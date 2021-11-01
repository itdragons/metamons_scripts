from enum import Enum, unique
from typing import NamedTuple


class Metamon():
    id: str
    # luck: int
    level: int
    token_id: int
    exp: int
    exp_max: int
    tear: int

    def is_level_update(self):
        return self.exp == self.exp_max


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

@unique
class PkFinishConfirm(Enum):
    停止 = 0
    继续 = 1
    自动升级 = 2

    def is_stop(self):
        return self == PkFinishConfirm.停止


def get_bag_name(bag: Bag):
    for type in BagType:
        if type.value == bag.type:
            return type.name
    return f"未知[{bag.type}]"


class PkResult(NamedTuple):
    challengeResult: bool
    challengeExp: int
    bpFragmentNum: int


class PkData():
    metamon_num: str
    succ_num: int = 0
    fail_num: int = 0
    exp_sum: int = 0
    fragment_sum: int = 0

    def __init__(self, metamon_num):
        self.metamon_num = metamon_num


class MetamonTableItem:
    num: str
    level: int
    exp_desc: str
    # status: str
    pk: str
    # pk_rate: str

    @classmethod
    def to_from_metamon(cls, walletProperty: Metamon):
        table_item = MetamonTableItem()
        table_item.num = walletProperty.token_id,
        table_item.level = walletProperty.level,
        table_item.exp_desc = f'{walletProperty.exp}/{walletProperty.exp_max}'
        return table_item
