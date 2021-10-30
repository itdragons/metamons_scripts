# -*- coding: utf-8 -*-
# @Time    : 2020/12/17 22:49
# @Author  : k
# @File    : Simlegui.py

import PySimpleGUI as sg

sg.popup('hello')
sg.popup_ok('默认弹窗')
sg.popup_yes_no('带yes和no按钮的弹窗')
sg.popup_cancel('带cancel按钮的弹窗')
sg.popup_ok_cancel('带ok和cancel按钮的弹窗')
sg.popup_error('带红色error按钮的弹窗')
sg.popup_auto_close('几秒后自动关闭的弹窗')

sg.popup(
    "你点我啊",
    title = 'xhc',
    button_color=("#A81B0C", '#FFFFFF '),
    background_color="#F47264",
    line_width=2,
    custom_text="好的"
)
#
text = '''大家好，
我们一起来学习PySimpleGUI制作简单的图形用户界面。'''
sg.popup_scrolled(text,title='Hello')
#
text1 = sg.popup_get_text('请输入文字1')
print(text1)
text2 = sg.popup_get_text('请输入文字2')
print(text2)
#
text = sg.popup_get_text('请输入密码:', password_char="*")
sg.popup(f'你输入的密码是：{text}')

path = sg.popup_get_file("请保存文件")
print(path)
#
path = sg.popup_get_file(
    '请选择需要保存的压缩包位置',
    save_as=True,
    default_extension='zip',
    file_types=(('压缩包', 'zip'),)
)
print(path)
#
for i in range(1000):
  sg.one_line_progress_meter(
    '进度条',
    i + 1,
    1000,
    '该进度条key',
    '这是一个进度条'
  )
#
for i in range(1, 1000):
    sg.one_line_progress_meter(
        '进度条',
        i + 1,
        1000,
        '该进度条key',
        '这是一个进度条',
        orientation='h',
        bar_color=('#F47264', '#FFFFFF')
    )

# 软件运行后弹出窗口让用户选择一个文件夹
sg.popup_get_folder()
# 用户选择后再弹出窗口让用户选择压缩包保存的位置和名称
sg.popup_get_file()
save_as = True
default_extension = 'zip'
# 用户输入完成后将该文件夹内所有的文件进行压缩打包
sg.zipfile模块
# 完成压缩后再弹出一个窗口告诉用户这个压缩包的体积大小
sg.os.stat()  # 读取文件信息
sg.popup()  # 弹窗显示数据
#
import PySimpleGUI as sg
import zipfile
import os


folder = sg.popup_get_folder('请选择要压缩的文件夹')
zip_path = sg.popup_get_file(
  '请选择要保存的压缩包位置',
  save_as=True,
  default_extension='zip',
  file_types=(('压缩包', '.zip'), )
)

with zipfile.ZipFile(zip_path, 'w') as zipobj:
  for file in os.scandir(folder):
    zipobj.write(file.path, file.path.replace(folder, '.'))

zip_size = os.stat(zip_path).st_size // 1024
sg.popup(f'压缩包体积大小为：{zip_size} KB')