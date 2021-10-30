import time
from concurrent.futures import ThreadPoolExecutor

import PySimpleGUI as sg
from config import version, user_address, access_token, private_key
from exceptions import ResException
from gui import login, my_bag, start_battle, compose_monster_egg, open_monster_egg
from metamons import is_valid
import threading

sg.change_look_and_feel('Black')

layout = [
    [sg.Text('address:', border_width=2), sg.Input(key="address", default_text=user_address)],
    [sg.Text('accesstoken:', font=("宋体", 15), border_width=2),
     sg.Input(key="accesstoken", default_text=access_token)],
    # [sg.Text('private_key(登陆必填):', font=("宋体", 15), border_width=5),
    #  sg.Input(key="private_key", default_text=private_key)],
    # [sg.Text('并行数量:', font=("宋体", 15), border_width=5),
    #  sg.Input(key="thread_num", default_text=2)],
    [sg.Text('日志', justification='center')],
    [sg.Output(size=(100, 20), font=("宋体", 12))],
    [sg.Button('背包'), sg.Button('合碎片'), sg.Button('开蛋'), sg.Button('PK')],
    # [sg.Button('登陆'), sg.Button('关闭程序')],
    [sg.Button('关闭程序')],
    # [sg.Button('TEST')]
]

window = sg.Window(f'Metamons Sup V{version}', layout, font=("宋体", 15), default_element_size=(50, 1))


def valid_input(values):
    address = values["address"]
    if not address:
        print("请输入address")
        return False
    return True


def test(values, window):
    print("test")


def run_gui():
    event_fc = {
        "登陆": login,
        "PK": start_battle,
        "背包": my_bag,
        "合碎片": compose_monster_egg,
        "开蛋": open_monster_egg,
        "TEST": test,
    }
    while True:
        event, values = window.read()

        if event in (None, '关闭程序'):  # 如果用户关闭窗口或点击`关闭`
            break

        if not is_valid():
            sg.popup("程序不可用")

        if valid_input(values):
            try:
                event_fc[event](values, window)
            except ResException as e:
                print(e)
                # sg.popup(e)
            except Exception as e:
                print(f'运行异常: {e}')
                # sg.popup("运行异常", e)

    window.close()


if __name__ == '__main__':
    run_gui()
