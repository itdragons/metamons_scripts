#!/usr/bin/env python
import PySimpleGUI as sg

sg.ChangeLookAndFeel('GreenTan')  # 主题颜色
# 窗口布局
layout = [[sg.Text('模糊查询', font=('微软雅黑', 14), text_color='white'),
           sg.InputText(key='_InputText_', font=('微软雅黑', 14), focus=True, size=(62, 14)),
           sg.Button('提交', key='_button1_')],
          [sg.Table(values=[["           ", "                             ", "                ", "           "]],
                    headings=['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd'],
                    max_col_width=500,
                    auto_size_columns=True,  # 自动调整列宽（根据上面第一次的values默认值为准，update时不会调整）
                    display_row_numbers=True,  # 序号
                    justification='center',  # 字符排列 left right center
                    num_rows=25,  # 行数
                    row_height=30,  # 行高
                    key='_table_',
                    font=('微软雅黑', 12),
                    text_color='black',
                    background_color='white',
                    enable_events=True,
                    bind_return_key=True,
                    tooltip='This is a table')],
          ]
# 窗口设置
window = sg.Window('Table ', resizable=True, return_keyboard_events=True, ).Layout(layout)
# 窗口&事件

while True:  # 创建一个事件循环，否则窗口运行一次就会被关闭
    event, value = window.Read()  # event, 以value的值判断窗口事件
    if event is None:  # 如果事件的值为 None，表示点击了右上角的关闭按钮
        break
    if event == '_button1_':  # 当获取反馈提交按钮，处理逻辑
        window['_table_'].update(values=[['111', '222', '333', '444']])  # 更新表格
        window['_table_'].update(values=[['111', '222', '333', '4213']])  # 更新表格
window.Close()
