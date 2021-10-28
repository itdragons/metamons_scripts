from operator import attrgetter
from typing import List
import requests
import json

from config import version
from exceptions import ResException
from models import WalletProperty, BattelObject, Bag


# address = "0xd0D02ED46C26787b3Be664a4896D6B93c707fA72"
# https://metamon-api.radiocaca.com/usm-api/getWalletPropertyList

def validate_res(res):
    if res.status_code != 200 or res.json()["result"] != 1:
        raise ResException(f"请求数据失败：{res.json()}")


class Metamons:
    address = ""
    headers = {
        "access_token": ""
    }

    def __init__(self, address, access_token):
        self.address = address
        self.headers["accesstoken"] = access_token

    def get_my_bag(self):
        res = requests.post("https://metamon-api.radiocaca.com/usm-api/checkBag", headers=self.headers,
                            files={"address": (None, self.address)})
        validate_res(res)
        bags = []
        for item in res.json()["data"]["item"]:
            bags.append(Bag(item["id"], item["bpType"], item["bpNum"]))
        return bags

    def get_wallet_properties(self) -> List[WalletProperty]:
        res = requests.post("https://metamon-api.radiocaca.com/usm-api/getWalletPropertyList", headers=self.headers,
                            data={"address": self.address, "page": 1, "pageSize": 10})
        validate_res(res)
        wallet_properties = []
        for metamon in res.json()["data"]["metamonList"]:
            wallet_properties.append(
                WalletProperty(metamon["id"], metamon["level"]))
        return wallet_properties

    def get_metamon_property_tear(self, id):
        res = requests.post("https://metamon-api.radiocaca.com/usm-api/getMetamonProperties", headers=self.headers,
                            files={"address": (None, self.address), "metamonId": (None, id)})
        validate_res(res)
        return int(res.json()["data"]["tear"])

    def get_battel_objects(self, wallet_property: WalletProperty) -> List[BattelObject]:
        url = "https://metamon-api.radiocaca.com/usm-api/getBattelObjects"
        params = {"address": (None, self.address), "metamonId": (None, wallet_property.id),
                  "front": (None, wallet_property.level)}
        res = requests.post(url, files=params, headers=self.headers, )
        validate_res(res)
        battel_objects = []
        for object in res.json()["data"]["objects"]:
            battel_objects.append(BattelObject(object["id"], object["level"]))
        return sorted(battel_objects, key=attrgetter('level'))

    def start_pay(self, wallet_property: WalletProperty, battel_object: BattelObject):
        url = "https://metamon-api.radiocaca.com/usm-api/startPay"
        params = {"address": (None, self.address), "battleLevel": (None, wallet_property.level),
                  "monsterA": (None, wallet_property.id), "monsterB": (None, battel_object.id)}
        res = requests.post(url, files=params, headers=self.headers, )
        validate_res(res)
        if not res.json()["data"]["pay"]:
            raise Exception(f'需要支付: {res.json()["data"]["amount"]}')

    def start_battle(self, wallet_property: WalletProperty, battel_object: BattelObject):
        url = "https://metamon-api.radiocaca.com/usm-api/startBattle"
        params = {"address": (None, self.address), "battleLevel": (None, wallet_property.level),
                  "monsterA": (None, wallet_property.id), "monsterB": (None, battel_object.id)}
        res = requests.post(url, files=params, headers=self.headers, )
        validate_res(res)
        data = res.json()["data"]
        challengeExp = data["challengeExp"]
        fragments = data["bpFragmentNum"]
        print(f'battle finshed: exp+{challengeExp}, metamon fragments*{fragments}')
        return challengeExp, fragments

    def compose_monster_egg(self):
        url = "https://metamon-api.radiocaca.com/usm-api/composeMonsterEgg"
        params = {"address": (None, self.address)}
        res = requests.post(url, files=params, headers=self.headers)
        validate_res(res)
        print(res.json())

    def open_monster_egg(self):
        url = "https://metamon-api.radiocaca.com/usm-api/openMonsterEgg"
        params = {"address": (None, self.address)}
        res = requests.post(url, files=params, headers=self.headers)
        validate_res(res)
        print(res.json())

    def start_beach_battle(self):
        print("start get wallet properties")
        properties = self.get_wallet_properties()
        exp_sum = 0
        fragments_sum = 0
        for property in properties:
            print(f'start get battel objects: {property.id}')
            tear = self.get_metamon_property_tear(property.id)
            print(f'{property.id} 剩余battel次数: {tear}')
            if 0 == tear:
                continue
            battel_objects = self.get_battel_objects(property)
            for i in range(tear):
                print(f'开始第 {i + 1} 次的battel')
                self.start_pay(property, battel_objects[i])
                challengeExp, fragments = self.start_battle(property, battel_objects[i])
                exp_sum += challengeExp
                fragments += fragments_sum
        print(f'beach battle run finshed: exp={exp_sum}, metamon fragments*{fragments_sum}')


def login_get_accesstoken(address, sign):
    params = {"address": (None, address), "sign": (None, sign),
              "msg": (None, "LogIn")}
    res = requests.post("https://metamon-api.radiocaca.com/usm-api/login", files=params)
    validate_res(res)
    return res.json()["data"]


def is_valid():
    url = "https://1198853003001738.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/scripts.LATEST/metamon/"
    res = requests.get(url)
    return res.text == version


if __name__ == '__main__':
    metamons = Metamons("0x88ef6C3de9060AB57AF79DfdA14128652E964FDE", "4Gwi13oZkFTXHex5+2PuXg==")
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
