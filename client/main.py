import PySimpleGUI as sg

# sg.preview_all_look_and_feel_themes()
from metamons import Metamons

sg.change_look_and_feel('Black')


def start(address):
    try:
        metamons = Metamons(address)
        print("start get wallet properties")
        properties = metamons.get_wallet_properties()
        for property in properties:
            print(f'start get battel objects: {property.id}')
            tear = metamons.get_metamon_property_tear(property.id)
            print(f'{property.id} 剩余battel次数: {tear}')
            battel_objects = metamons.get_battel_objects(property)
            for i in range(tear):
                print(f'开始第 {i + 1} 次的battel')
                metamons.start_pay(property, battel_objects[i])
                metamons.start_battle(property, battel_objects[i])
    except Exception as e:
        print(f'运行异常: {e}')
    print("finshed!")


def gui():
    layout = [
        [sg.Text('合约地址:', font=("宋体", 15)), sg.Input(key="address")],
        [sg.Text('日志', justification='center')],
        [sg.Output(size=(100, 20), font=("宋体", 12))],
        [sg.Button('启动'), sg.Button('关闭程序')]
    ]

    window = sg.Window('metamons by dragons v1.0', layout, font=("宋体", 15), default_element_size=(50, 1))

    while True:
        event, values = window.read()
        if event in (None, '关闭程序'):  # 如果用户关闭窗口或点击`关闭`
            break
        if event == '启动':
            address = values["address"]
            if not address:
                print("请输入合约地址")
            else:
                start(address)

    window.close()


if __name__ == '__main__':
    gui()
