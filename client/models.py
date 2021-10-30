from enum import Enum, unique
from typing import NamedTuple


class WalletProperty(NamedTuple):
    id: str
    # luck: int
    level: int
    token_id: int


class BattelObject(NamedTuple):
    id: str
    level: int


class Bag(NamedTuple):
    id: int
    type: int
    num: int


@unique
class BagType(Enum):
    碎片 = 1
    药水 = 2
    黄钻 = 3
    紫钻 = 4
    RACA = 5
    蛋 = 6


def get_bag_name(bag: Bag):
    for type in BagType:
        if type.value == bag.type:
            return type.name
    return f"未知[{bag.type}]"
