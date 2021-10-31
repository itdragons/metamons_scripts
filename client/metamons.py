from operator import attrgetter
from typing import List, Dict, Tuple
import requests
import json

from config import version
from exceptions import ResException
from models import Metamon, BattelObject, Bag, PkResult

# address = "0xd0D02ED46C26787b3Be664a4896D6B93c707fA72"
# https://metamon-api.radiocaca.com/usm-api/getWalletPropertyList
from thread_util import ThreadPool, callback


def validate_res(res):
    if res.status_code != 200 or res.json()["result"] != 1:
        raise ResException(f"请求数据失败：{res.json()}")


class MetamonsApi:
    address = ""
    headers = {
        "access_token": ""
    }

    def __init__(self, address, access_token):
        self.address = address
        self.headers["accesstoken"] = access_token

    def get_my_bag(self) -> Dict[str, Bag]:
        res = requests.post("https://metamon-api.radiocaca.com/usm-api/checkBag", headers=self.headers,
                            files={"address": (None, self.address)})
        validate_res(res)
        bags = {}
        for item in res.json()["data"]["item"]:
            bags[item["bpType"]] = Bag(item["id"], item["bpType"], item["bpNum"])
        return bags

    def get_metamons(self) -> List[Metamon]:
        res = requests.post("https://metamon-api.radiocaca.com/usm-api/getWalletPropertyList", headers=self.headers,
                            data={"address": self.address, "page": 1, "pageSize": 1000})
        validate_res(res)
        metamons = []
        for item in res.json()["data"]["metamonList"]:
            metamon = Metamon()
            metamon.id = item["id"]
            metamon.level = item["level"]
            metamon.token_id = item["tokenId"]
            metamon.exp = item["exp"]
            metamon.exp_max = item["expMax"]
            metamon.tear = item["tear"]
            metamons.append(metamon)
        return metamons


    def get_battel_objects(self, wallet_property: Metamon) -> List[BattelObject]:
        url = "https://metamon-api.radiocaca.com/usm-api/getBattelObjects"
        params = {"address": (None, self.address), "metamonId": (None, wallet_property.id),
                  "front": (None, 1)}
        res = requests.post(url, files=params, headers=self.headers)
        validate_res(res)
        battel_objects = []
        for object in res.json()["data"]["objects"]:
            battel_objects.append(BattelObject(object["id"], object["level"]))
        return sorted(battel_objects, key=attrgetter('level'))

    def start_pay(self, wallet_property: Metamon, battel_object: BattelObject):
        url = "https://metamon-api.radiocaca.com/usm-api/startPay"
        params = {"address": (None, self.address), "battleLevel": (None, 1),
                  "monsterA": (None, wallet_property.id), "monsterB": (None, battel_object.id)}
        res = requests.post(url, files=params, headers=self.headers, )
        validate_res(res)
        if not res.json()["data"]["pay"]:
            raise Exception(f'#{wallet_property.token_id}需要支付: {res.json()["data"]["amount"]}')

    def start_battle(self, wallet_property: Metamon, battel_object: BattelObject) -> PkResult:
        url = "https://metamon-api.radiocaca.com/usm-api/startBattle"
        params = {"address": (None, self.address), "battleLevel": (None, 1),
                  "monsterA": (None, wallet_property.id), "monsterB": (None, battel_object.id)}
        res = requests.post(url, files=params, headers=self.headers, )
        validate_res(res)
        data = res.json()["data"]
        return PkResult(data["challengeResult"], data["challengeExp"], data["bpFragmentNum"])

    def compose_monster_egg(self, batch_num):
        for i in range(batch_num):
            url = "https://metamon-api.radiocaca.com/usm-api/composeMonsterEgg"
            params = {"address": (None, self.address)}
            res = requests.post(url, files=params, headers=self.headers)
            validate_res(res)
            print(res.json())

    def open_monster_egg(self, open_num):
        for i in range(open_num):
            url = "https://metamon-api.radiocaca.com/usm-api/openMonsterEgg"
            params = {"address": (None, self.address)}
            res = requests.post(url, files=params, headers=self.headers)
            validate_res(res)
            print(f'第 {open_num} 次开蛋：{res.json()}')

    def update_monster(self, wallet_property: Metamon):
        url = "https://metamon-api.radiocaca.com/usm-api/updateMonster"
        params = {"address": (None, self.address), 'nftId': (None, wallet_property.id)}
        res = requests.post(url, files=params, headers=self.headers)
        validate_res(res)


def login_get_accesstoken(address, sign):
    params = {"address": (None, address), "sign": (None, sign),
              "msg": (None, "LogIn")}
    res = requests.post("https://metamon-api.radiocaca.com/usm-api/login", files=params)
    validate_res(res)
    return res.json()["data"]


def is_valid():
    url = "https://1198853003001738.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/scripts.LATEST/metamon/"
    res = requests.get(url)
    return res.text in version


if __name__ == '__main__':
    metamons = MetamonsApi("0x88ef6C3de9060AB57AF79DfdA14128652E964FDE", "4Gwi13oZkFTXHex5+2PuXg==")
    print("正在获取源兽数据...")
    properties = metamons.get_metamons()
    print(f"源兽数量：{len(properties)}")
    for property in properties:
        print(f'start get battel objects: {property.id}')
        # tear = metamons.get_metamon_property_tear(property.id)
        print(f'{property.id} 剩余battel次数: 1')
        battel_objects = metamons.get_battel_objects(property)
        for i in range(1):
            print(f'开始第 {i + 1} 次的battel')
            metamons.start_pay(property, battel_objects[i])
            metamons.start_battle(property, battel_objects[i])
