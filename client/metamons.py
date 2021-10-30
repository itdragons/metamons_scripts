from operator import attrgetter
from typing import List, Dict
import requests
import json

from config import version
from exceptions import ResException
from models import WalletProperty, BattelObject, Bag


# address = "0xd0D02ED46C26787b3Be664a4896D6B93c707fA72"
# https://metamon-api.radiocaca.com/usm-api/getWalletPropertyList
from thread_util import ThreadPool, callback


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

    def get_my_bag(self) -> Dict[str, Bag]:
        res = requests.post("https://metamon-api.radiocaca.com/usm-api/checkBag", headers=self.headers,
                            files={"address": (None, self.address)})
        validate_res(res)
        bags = {}
        for item in res.json()["data"]["item"]:
            bags[item["bpType"]] = Bag(item["id"], item["bpType"], item["bpNum"])
        return bags

    def get_wallet_properties(self) -> List[WalletProperty]:
        res = requests.post("https://metamon-api.radiocaca.com/usm-api/getWalletPropertyList", headers=self.headers,
                            data={"address": self.address, "page": 1, "pageSize": 1000})
        validate_res(res)
        wallet_properties = []
        for metamon in res.json()["data"]["metamonList"]:
            wallet_properties.append(
                WalletProperty(metamon["id"], metamon["level"], metamon["tokenId"]))
        return wallet_properties

    def get_metamon_property_tear(self, id):
        res = requests.post("https://metamon-api.radiocaca.com/usm-api/getMetamonProperties", headers=self.headers,
                            files={"address": (None, self.address), "metamonId": (None, id)})
        validate_res(res)
        return int(res.json()["data"]["tear"])

    def get_battel_objects(self, wallet_property: WalletProperty) -> List[BattelObject]:
        url = "https://metamon-api.radiocaca.com/usm-api/getBattelObjects"
        params = {"address": (None, self.address), "metamonId": (None, wallet_property.id),
                  "front": (None, 1)}
        res = requests.post(url, files=params, headers=self.headers)
        validate_res(res)
        battel_objects = []
        for object in res.json()["data"]["objects"]:
            battel_objects.append(BattelObject(object["id"], object["level"]))
        return sorted(battel_objects, key=attrgetter('level'))

    def start_pay(self, wallet_property: WalletProperty, battel_object: BattelObject):
        url = "https://metamon-api.radiocaca.com/usm-api/startPay"
        params = {"address": (None, self.address), "battleLevel": (None, 1),
                  "monsterA": (None, wallet_property.id), "monsterB": (None, battel_object.id)}
        res = requests.post(url, files=params, headers=self.headers, )
        validate_res(res)
        if not res.json()["data"]["pay"]:
            raise Exception(f'#{wallet_property.token_id}需要支付: {res.json()["data"]["amount"]}')

    def start_battle(self, wallet_property: WalletProperty, battel_object: BattelObject):
        url = "https://metamon-api.radiocaca.com/usm-api/startBattle"
        params = {"address": (None, self.address), "battleLevel": (None, 1),
                  "monsterA": (None, wallet_property.id), "monsterB": (None, battel_object.id)}
        res = requests.post(url, files=params, headers=self.headers, )
        validate_res(res)
        data = res.json()["data"]
        challengeExp = data["challengeExp"]
        fragments = data["bpFragmentNum"]
        return challengeExp, fragments

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

    def run_battle(self, thread_name, property):
        print(f'{thread_name}_正在获取PK对手数据: #{property.token_id}')
        tear = self.get_metamon_property_tear(property.id)
        print(f'#{property.token_id} 剩余PK次数: {tear}')
        if 0 == tear:
            return
        for i in range(tear):
            print(f'开始第 {i + 1} 次的PK: #{property.token_id}')
            battel_target = self.get_battel_objects(property)[0]
            self.start_pay(property, battel_target)
            challengeExp, fragments = self.start_battle(property, battel_target)
            print(f'#{property.token_id} 第 {i + 1} 次的PK完成: exp+{challengeExp}, metamon fragments*{fragments}')
            # exp_sum += challengeExp
            # fragments += fragments_sum

    def start_beach_battle(self, thread_num):
        pool = ThreadPool(thread_num)
        print("获取源兽数据中...")
        properties = self.get_wallet_properties()
        print(f"源兽数量：{len(properties)}")
        # exp_sum = 0
        # fragments_sum = 0
        for property in properties:
            pool.put(self.run_battle, (property,), callback)
        #     pool.put(self.run_battle, (i,), callback)
        # print("\033[32;0m任务停止之前线程池中有%s个线程，空闲的线程有%s个！\033[0m"
        #       % (len(pool.generate_list), len(pool.free_list)))
        # 正常关闭线程池
        # pool.close()
        # print("任务执行完毕，正常退出！")
        # print(f'PK结束: exp={exp_sum}, metamon fragments*{fragments_sum}')
        # print(f'PK执行结束')


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
    metamons = Metamons("0x88ef6C3de9060AB57AF79DfdA14128652E964FDE", "4Gwi13oZkFTXHex5+2PuXg==")
    print("正在获取源兽数据...")
    properties = metamons.get_wallet_properties()
    print(f"源兽数量：{len(properties)}")
    for property in properties:
        print(f'start get battel objects: {property.id}')
        tear = metamons.get_metamon_property_tear(property.id)
        print(f'{property.id} 剩余battel次数: {tear}')
        battel_objects = metamons.get_battel_objects(property)
        for i in range(tear):
            print(f'开始第 {i + 1} 次的battel')
            metamons.start_pay(property, battel_objects[i])
            metamons.start_battle(property, battel_objects[i])
