from enum import Enum
from typing import NamedTuple


class WalletProperty(NamedTuple):
    id: str
    # luck: int
    level: int


class BattelObject(NamedTuple):
    id: str
    level: int


class Bag(NamedTuple):
    id: int
    type: int
    num: int


def get_bag_name(bag: Bag):
    if bag.type == 1:
        return "碎片"
    if bag.type == 2:
        return "药水"
    if bag.type == 6:
        return "蛋"
    return f"未知[{bag.type}]"

