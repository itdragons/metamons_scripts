from typing import Dict, List

from exceptions import ResException
from metamons import MetamonsApi, login_get_accesstoken
from models import get_bag_name, BagType, PkData, Metamon, PkFinishConfirm, PkResult
from thread_util import ThreadPool
from w3 import W3Api
import PySimpleGUI as sg


class MetamonGui:
    window = None
    w3_api: W3Api = None
    metamons: MetamonsApi = None
    metamons_map: Dict[int, Metamon] = {}
    pk_data: Dict[int, PkData] = {}
    pk_finished_confirm: PkFinishConfirm = PkFinishConfirm.停止


gui = MetamonGui()


def load_w3(fn):
    def wrapper(*args, **kwargs):
        values = args[0]
        private_key = values["private_key"]
        if not gui.w3_api:
            if not private_key:
                raise ResException("请先输入private_key")
        gui.w3_api = W3Api(values["address"], private_key)
        fn(*args, **kwargs)

    return wrapper


def load_metamons(fn):
    def wrapper(*args, **kwargs):
        values = args[0]
        accesstoken = values["accesstoken"]
        if not gui.metamons:
            if not accesstoken:
                raise ResException("请输入accesstoken")
        gui.metamons = MetamonsApi(values["address"], access_token=accesstoken)
        fn(*args, **kwargs)

    return wrapper


def load_pk_config(fn):
    def wrapper(*args, **kwargs):
        values = args[0]
        if values["pk_finish_0"]:
            gui.pk_finished_confirm = PkFinishConfirm.停止
        if values["pk_finish_1"]:
            gui.pk_finished_confirm = PkFinishConfirm.继续
        if values["pk_finish_2"]:
            gui.pk_finished_confirm = PkFinishConfirm.自动升级
        fn(*args, **kwargs)

    return wrapper


@load_w3
def login(values):
    print("正在登陆中……")
    sign = gui.w3_api.login_sign()
    accesstoken = login_get_accesstoken(values["address"], sign)
    print(f'login success: {accesstoken}')
    gui.window['accesstoken'].update(accesstoken)


def _run_thread_to_pk(thread_name, property: Metamon):
    if property.is_level_update():
        if gui.pk_finished_confirm == PkFinishConfirm.停止:
            print(f"#{property.token_id} 需要升级，停止PK\n")
            return
        if gui.pk_finished_confirm == PkFinishConfirm.自动升级:
            gui.metamons.get_my_bag()
            print(f"#{property.token_id} 正在自动升级……\n")
            gui.metamons.update_monster(property)
    print(f'#{property.token_id} 剩余PK次数: {property.tear}')
    if 0 == property.tear:
        return
    exp_sum = 0
    fragment_sum = 0
    for i in range(property.tear):
        print(f'开始第 {i + 1} 次的PK: #{property.token_id}')
        print(f'{thread_name}_正在获取PK对手数据: #{property.token_id}')
        battel_target = gui.metamons.get_battel_objects(property)[0]
        gui.metamons.start_pay(property, battel_target)
        pk_result = gui.metamons.start_battle(property, battel_target)
        exp_sum += pk_result.challengeExp
        fragment_sum += pk_result.bpFragmentNum
        print(
            f'#{property.token_id} 第 {i + 1} 次的PK{"胜利" if pk_result.challengeResult else "失败"}: exp+{pk_result.challengeExp}, fragments*{pk_result.bpFragmentNum}\n')
        pk_result_handle(property.token_id, pk_result)
    return property.token_id, exp_sum, fragment_sum


def _beach_pk(thread_num):
    pool = ThreadPool(thread_num)
    print("获取源兽数据中...")
    properties = gui.metamons.get_metamons()
    print(f"源兽数量：{len(properties)}")
    for property in properties:
        pool.put(_run_thread_to_pk, (property,), pk_callback)
    # 正常关闭线程池
    # pool.close()


@load_pk_config
@load_metamons
def start_battle(values):
    thread_num = int(sg.popup_get_text('请输入并发数量', default_text="2"))
    print(f"并发数量: {thread_num}")
    load_my_metamons(values)
    _beach_pk(thread_num)


@load_metamons
def load_my_bag(values):
    bags = gui.metamons.get_my_bag()
    update_bag_gui_data(bags)
    for bag in bags.values():
        print(f'{get_bag_name(bag)}: {bag.num}')


def update_bag_gui_data(bags):
    for bag in bags.values():
        gui.window[f"bag_{bag.type}"].update(bag.num)


@load_metamons
def load_my_metamons(values):
    my_metamons = gui.metamons.get_metamons()
    for metamon in my_metamons:
        gui.metamons_map[metamon.token_id] = metamon
    update_metamons_gui_data()
    print("源兽数据更新成功……")


def update_metamons_gui_data():
    datas = []

    def get_pk_desc(pk_data):
        if not pk_data:
            return "*"
        return f'{pk_data.succ_num}|{pk_data.fail_num}  {pk_data.exp_sum}_{pk_data.fragment_sum}'

    for metamon in gui.metamons_map.values():
        pk_data = gui.pk_data.get(metamon.token_id)
        datas.append(
            [metamon.id, metamon.token_id, metamon.level, f'{metamon.exp}/{metamon.exp_max}', metamon.tear,
             get_pk_desc(pk_data)])
    gui.window["-TABLE-"].update(values=datas)


@load_metamons
def compose_monster_egg(values):
    bags = gui.metamons.get_my_bag()
    bag = bags.get(BagType.碎片.value)
    batch_num = int(bag.num / 1000)
    print(f'碎片数量：{bag.num}, 可合成次数: {batch_num}')
    gui.metamons.compose_monster_egg(batch_num)
    print(f'合碎片已完成\n')


@load_metamons
def open_monster_egg(values):
    open_num = int(sg.popup_get_text('请输入开蛋次数', default_text="1"))
    print(f"开蛋次数: {open_num}")
    gui.metamons.open_monster_egg(open_num)


def pk_callback(status, result, exception):
    """
    根据需要进行的回调函数，默认不执行。
    :param status: action函数的执行状态
    :param result: action函数的返回值
    :return:
    """
    if not status and exception:
        print(exception, "\n")
        return
    if result:
        pass


def pk_result_handle(token_id, pk_result: PkResult):
    def update_stat_data():
        pk_data = gui.pk_data.get(token_id)
        if not pk_data:
            pk_data = PkData(token_id)
            gui.pk_data[token_id] = pk_data
        if pk_result.challengeResult:
            pk_data.succ_num += 1
        else:
            pk_data.fail_num += 1
        pk_data.exp_sum = pk_data.exp_sum + pk_result.challengeExp
        pk_data.fragment_sum = pk_data.fragment_sum + pk_result.bpFragmentNum

    update_stat_data()
    metamon = gui.metamons_map.get(token_id)
    metamon.exp = pk_result.challengeExp + metamon.exp
    metamon.tear = metamon.tear - 1
    update_metamons_gui_data()
