import PySimpleGUI as sg

from config import version
from metamons import Metamons, is_valid, metamons_start, login_get_accesstoken

sg.change_look_and_feel('Black')


def login_by_sign(values):
    sign = values["sign"]
    if not sign:
        print("请先输入sign")
    else:
        address = values["address"]
        accesstoken = login_get_accesstoken(address, sign)


def init_metamons(values):
    address = values["address"]
    accesstoken = values["accesstoken"]
    if not accesstoken:
        print("请输入accesstoken")
    return Metamons(address, access_token=accesstoken)


def start(values):
    metamons = init_metamons(values)
    if metamons:
        metamons_start(metamons)


def my_bag(values):
    metamons = init_metamons(values)
    metamons.get_my_bag()


def valid_input(values):
    address = values["address"]
    if not address:
        print("请输入合约地址")
        return False
    return True


def gui():
    layout = [
        [sg.Text('合约地址:', font=("宋体", 15), border_width=5), sg.Input(key="address")],
        # [sg.Text('sign:', font=("宋体", 15), border_width=5), sg.Input(key="sign")],
        [sg.Text('accesstoken:', font=("宋体", 15), border_width=5), sg.Input(key="accesstoken")],
        [sg.Text('日志', justification='center')],
        [sg.Output(size=(100, 20), font=("宋体", 12))],
        # sg.Button('login by sign'),
        [sg.Button('启动PK'), sg.Button('背包'), sg.Button('关闭程序')]
    ]

    window = sg.Window(f'Metamons Sup V{version}', layout, font=("宋体", 15), default_element_size=(50, 1))

    event_fc = {
        "启动PK": start,
        "login by sign": login_by_sign,
        "背包": my_bag
    }
    while True:
        event, values = window.read()
        if event in (None, '关闭程序'):  # 如果用户关闭窗口或点击`关闭`
            break

        if not is_valid():
            print("程序不可用")

        if valid_input(values):
            event_fc[event](values)
        # if event == '启动':
        #     address = values["address"]
        #     accesstoken = values["accesstoken"]
        #     if not address or not accesstoken:
        #         print("请输入合约地址和accesstoken")
        #     else:
        #         start(address, accesstoken)

    window.close()


if __name__ == '__main__':
    gui()
