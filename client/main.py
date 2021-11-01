import PySimpleGUI as sg
from config import version, user_address, access_token, private_key, unknown, is_dev
from exceptions import ResException
from gui import login, start_battle, compose_monster_egg, open_monster_egg, load_my_bag, \
    load_my_metamons, gui
from metamons import is_valid
from thread_util import print

# sg.change_look_and_feel('Black')
from models import BagType

font_frame = '_ 14'

t_size = (8, 1)
user_info_col = [
    [sg.Text('address:', border_width=3, size=t_size),
     sg.Input(key="address", default_text=user_address)],
    [sg.Text('accesstoken:', border_width=3, size=t_size), sg.Input(key="accesstoken", default_text=access_token)]
]
data_col = [
    [sg.Button('背包'), sg.Button('源兽')]
]
pk_conf_col = [
    [sg.Radio('继续打', "pk_finish_conf", k="pk_finish_1"),
     sg.Radio('停止', "pk_finish_conf", default=True, k="pk_finish_0"),
     sg.Radio('自动升级', "pk_finish_conf", k="pk_finish_2")]
]
oper_col = [
    [sg.Button('合碎片'), sg.Button('开蛋'), sg.Button('PK')]
]
bag_t_size = (4, 1)
bag_col = [
    [
        sg.Text('碎片:', size=bag_t_size),
        sg.Input(key='bag_1', default_text=unknown, readonly=True, disabled_readonly_background_color="grey",
                 size=(5, 1)),
        sg.Text('药水:', size=bag_t_size),
        sg.Input(key='bag_2', default_text=unknown, readonly=True, disabled_readonly_background_color="grey",
                 size=(5, 1)),
        sg.Text('黄钻:', size=bag_t_size),
        sg.Input(key='bag_3', default_text=unknown, readonly=True, disabled_readonly_background_color="grey",
                 size=(5, 1)),
        sg.Text('紫钻:', size=bag_t_size),
        sg.Input(key='bag_4', default_text=unknown, readonly=True, disabled_readonly_background_color="grey",
                 size=(5, 1))],
    [
        sg.Text('RACA:', size=bag_t_size),
        sg.Input(key='bag_5', default_text=unknown, readonly=True, disabled_readonly_background_color="grey",
                 size=(5, 1)),
        sg.Text('蛋:', size=bag_t_size),
        sg.Input(key='bag_6', default_text=unknown, readonly=True, disabled_readonly_background_color="grey",
                 size=(5, 1))
    ]
]

tab4_layout = [[sg.Text('This is inside tab 4', background_color='darkseagreen')],
               [sg.Input(key='-in3-')]]

tab5_layout = [[sg.Text('This is inside tab 5')],
               [sg.Input(key='-in4-')]]

headings = ["ID", "编号", '等级', '经验', '能量', 'PK']

table_col = sg.Column([
    [sg.Table(values=[['', '', '', '', '', '', '']], headings=headings, max_col_width=10,
              auto_size_columns=True,
              display_row_numbers=True,
              justification='right',
              # alternating_row_color='lightyellow',
              key='-TABLE-',
              selected_row_colors='red on yellow',
              # enable_events=True,
              expand_x=True,
              expand_y=True,
              # enable_click_events=True,  # Comment out to not enable header and other clicks
              )]
], element_justification='l', expand_x=True, expand_y=True)

right_col = sg.Column([
    [sg.Frame('帐号信息', user_info_col, font=font_frame)],
    [sg.Frame('背包数据', bag_col, font=font_frame)],
    [sg.Frame('PK满经验', pk_conf_col, font=font_frame)],
    [sg.Frame('数据同步', data_col, font=font_frame), sg.Frame('操作', oper_col, font=font_frame)],
], element_justification='l', expand_x=True, expand_y=True)

console_col = sg.Column([
    [sg.Text('日志', justification='center', font='Courier 10', background_color='black', text_color='white')],
    [sg.Output(size=(50, 10), font=("Courier", 13), background_color="black", text_color='white', key="-LOG OUT-")],
], element_justification='l', expand_x=True, expand_y=True)

layout = [
    [sg.Pane(
        [
            sg.Column([[console_col]], element_justification='l', expand_x=True, expand_y=True),
            sg.Column([[right_col]], element_justification='l', expand_x=True, expand_y=True)
        ], orientation='h', k='-PANE-'
    )],
    [table_col],
    [sg.Button('关闭程序')],
    [sg.Button('TEST')] if is_dev() else []
]

window = sg.Window(f'Metamons Sup V{version}', layout, font=("宋体", 15), finalize=True, resizable=True,
                   use_default_focus=False)
window.set_min_size(window.size)
window['-LOG OUT-'].expand(True, True, True)
window['-PANE-'].expand(True, True, True)
gui.window = window


def valid_input(values):
    address = values["address"]
    if not address:
        print("请输入address")
        return False
    return True


def test(values):
    print("test", "\n")


def run_gui():
    event_fc = {
        "登陆": login,
        "PK": start_battle,
        "背包": load_my_bag,
        "源兽": load_my_metamons,
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
                event_fc[event](values)
            except ResException as e:
                print(f'\n{e}__main')
                # sg.popup(e)
            except Exception as e:
                print(f'\n运行异常: {e}')
                # sg.popup("运行异常", e)

    window.close()


if __name__ == '__main__':
    run_gui()
