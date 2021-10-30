import time
from concurrent.futures import ThreadPoolExecutor

import PySimpleGUI as sg
from config import version, user_address, access_token, private_key, unknown
from exceptions import ResException
from gui import login, my_bag, start_battle, compose_monster_egg, open_monster_egg
from metamons import is_valid
import threading

# sg.change_look_and_feel('Black')
from models import BagType

font_frame = '_ 14'

left_col = sg.Column([
    [sg.Text('日志', justification='center', font='Courier 10', background_color='black', text_color='white')],
    [sg.Output(size=(50, 50), font=("Courier", 13), background_color="black", text_color='white', key="-LOG OUT-")],
], element_justification='l', expand_x=True, expand_y=True)

t_size = (8, 1)
user_info_col = [
    [sg.Text('address:', border_width=3, size=t_size),
     sg.Input(key="address", default_text=user_address)],
    [sg.Text('accesstoken:', border_width=3, size=t_size), sg.Input(key="accesstoken", default_text=access_token)]
]
oper_col = [
    [sg.Button('背包'), sg.Button('合碎片'), sg.Button('开蛋'), sg.Button('PK')]
]
bag_col = [
    [
        sg.Text('碎片:'),
        sg.Input(key='bag_1', default_text=unknown, readonly=True, disabled_readonly_background_color="grey",
                 size=(5, 1)),
        sg.Text('药水:'),
        sg.Input(key='bag_2', default_text=unknown, readonly=True, disabled_readonly_background_color="grey",
                 size=(5, 1)),
        sg.Text('黄钻:'),
        sg.Input(key='bag_3', default_text=unknown, readonly=True, disabled_readonly_background_color="grey",
                 size=(5, 1)),
        sg.Text('紫钻:'),
        sg.Input(key='bag_4', default_text=unknown, readonly=True, disabled_readonly_background_color="grey",
                 size=(5, 1)),
        sg.Text('RACA:'),
        sg.Input(key='bag_5', default_text=unknown, readonly=True, disabled_readonly_background_color="grey",
                 size=(5, 1)),
        sg.Text('蛋:'),
        sg.Input(key='bag_6', default_text=unknown, readonly=True, disabled_readonly_background_color="grey",
                 size=(5, 1)),
    ]
]

right_col = sg.Column([
    [sg.Frame('帐号信息', user_info_col, font=font_frame)],
    [sg.Frame('背包数据', bag_col, font=font_frame)],
    [sg.Frame('操作', oper_col, font=font_frame)],
])

layout = [
    [sg.Pane([sg.Column([[left_col]], element_justification='l', expand_x=True, expand_y=True),
              sg.Column([[right_col]], element_justification='c', expand_x=True, expand_y=True)], orientation='h',
             k='-PANE-')],

    # [sg.Text('private_key(登陆必填):', font=("宋体", 15), border_width=5),
    #  sg.Input(key="private_key", default_text=private_key)],
    # [sg.Text('并行数量:', font=("宋体", 15), border_width=5),
    #  sg.Input(key="thread_num", default_text=2)],

    # [sg.Button('登陆'), sg.Button('关闭程序')],
    [sg.Button('关闭程序')],
    # [sg.Button('TEST')]
]

window = sg.Window(f'Metamons Sup V{version}', layout, font=("宋体", 15), finalize=True, resizable=True,
                   use_default_focus=False)
window.set_min_size(window.size)
window['-LOG OUT-'].expand(True, True, True)
window['-PANE-'].expand(True, True, True)


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
