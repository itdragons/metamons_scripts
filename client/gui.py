from exceptions import ResException
from metamons import Metamons, login_get_accesstoken
from models import get_bag_name, BagType
from w3 import W3Api
import PySimpleGUI as sg


class MetamonGui:
    w3_api: W3Api = None

    metamons: Metamons = None


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
        gui.metamons = Metamons(values["address"], access_token=accesstoken)
        fn(*args, **kwargs)

    return wrapper


@load_w3
def login(values, window):
    print("正在登陆中……")
    sign = gui.w3_api.login_sign()
    accesstoken = login_get_accesstoken(values["address"], sign)
    print(f'login success: {accesstoken}')
    window['accesstoken'].update(accesstoken)


@load_metamons
def start_battle(values, window):
    thread_num = int(sg.popup_get_text('请输入并发数量', default_text="2"))
    print(f"并发数量: {thread_num}")
    gui.metamons.start_beach_battle(thread_num)


@load_metamons
def my_bag(values, window):
    bags = gui.metamons.get_my_bag()
    update_bag_gui_data(window, bags)
    for bag in bags.values():
        print(f'{get_bag_name(bag)}: {bag.num}')


def update_bag_gui_data(window, bags):
    for bag in bags.values():
        window[f"bag_{bag.type}"].update(bag.num)


@load_metamons
def compose_monster_egg(values, window):
    bags = gui.metamons.get_my_bag()
    bag = bags.get(BagType.碎片.value)
    batch_num = int(bag.num / 1000)
    print(f'碎片数量：{bag.num}, 可合成次数: {batch_num}')
    gui.metamons.compose_monster_egg(batch_num)
    print(f'合碎片已完成\n')


@load_metamons
def open_monster_egg(values, window):
    open_num = int(sg.popup_get_text('请输入开蛋次数', default_text="1"))
    print(f"开蛋次数: {open_num}")
    gui.metamons.open_monster_egg(open_num)
