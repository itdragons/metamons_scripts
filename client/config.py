import os

version = "1.2"

env = os.environ


def is_dev():
    return env.get("ENV") == "dev"


user_address = "0x88ef6c3de9060ab57af79dfda14128652e964fde" if is_dev() else ""
private_key = "32928f2d6fbd6c7496ee2467ac8287eb06952050e50a815d10fe392cad9176a0" if is_dev() else ""
access_token = "GHC9nQxmo1MyQIqk4woD9w==" if is_dev() else ""
