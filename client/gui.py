from exceptions import ResException
from metamons import Metamons, login_get_accesstoken
from models import get_bag_name
from w3 import W3Api


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
    gui.metamons.start_beach_battle()


@load_metamons
def my_bag(values, window):
    bags = gui.metamons.get_my_bag()
    for bag in bags:
        print(f'{get_bag_name(bag)}: {bag.num}')


@load_metamons
def compose_monster_egg(values, window):
    gui.metamons.compose_monster_egg()


@load_metamons
def open_monster_egg(values, window):
    gui.metamons.open_monster_egg()