import os

version = "1.2.9"

env = os.environ


def is_dev():
    return env.get("ENV") == "dev"


user_address = "0x88ef6c3de9060ab57af79dfda14128652e964fde" if is_dev() else ""
private_key = "" if is_dev() else ""
access_token = "n7vIcWPNB1FmEGsuMfrzrA==" if is_dev() else ""
unknown = "未知"