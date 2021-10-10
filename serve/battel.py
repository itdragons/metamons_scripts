from typing import List
import requests
import json

from models import WalletProperty, BattelObject

current_address = "0xd0D02ED46C26787b3Be664a4896D6B93c707fA72"


def get_wallet_properties() -> List[WalletProperty]:
    res = requests.post("https://test-api.metamons.io/usm-api/getWalletPropertyList",
                        files={"address": (None, current_address)})
    wallet_properties = []
    for metamon in res.json()["data"]["metamonList"]:
        attribute = json.loads(metamon["metadata"])["attributes"][0]
        wallet_properties.append(
            WalletProperty(metamon["id"], int(attribute["Level"])))
    return wallet_properties


def get_metamon_property_tear(id):
    res = requests.post("https://test-api.metamons.io/usm-api/getMetamonProperties",
                        files={"address": (None, current_address), "metamonId": (None, id)})
    return int(res.json()["data"]["tear"])


def get_battel_objects(wallet_property: WalletProperty) -> List[BattelObject]:
    url = "https://test-api.metamons.io/usm-api/getBattelObjects"
    params = {"address": (None, current_address), "metamonId": (None, wallet_property.id),
              "front": (None, wallet_property.level)}
    res = requests.post(url, files=params)
    battel_objects = []
    for object in res.json()["data"]["objects"]:
        battel_objects.append(BattelObject(object["id"]))
    return battel_objects


def start_pay(wallet_property: WalletProperty, battel_object: BattelObject):
    url = "https://test-api.metamons.io/usm-api/startPay"
    params = {"address": (None, current_address), "battleLevel": (None, wallet_property.level),
              "monsterA": (None, wallet_property.id), "monsterB": (None, battel_object.id)}
    res = requests.post(url, files=params)
    if not res.json()["data"]["pay"]:
        raise Exception(f'需要支付: {res.json()["data"]["amount"]}')


def start_battle(wallet_property: WalletProperty, battel_object: BattelObject):
    url = "https://test-api.metamons.io/usm-api/startBattle"
    params = {"address": (None, current_address), "battleLevel": (None, wallet_property.level),
              "monsterA": (None, wallet_property.id), "monsterB": (None, battel_object.id)}
    res = requests.post(url, files=params)
    data = res.json()["data"]
    print(f'battle finshed: exp+{data["challengeExp"]}, metamon fragments*{data["bpFragmentNum"]}')


if __name__ == '__main__':
    print("start get wallet properties")
    properties = get_wallet_properties()
    for property in properties:
        print(f'start get battel objects: {property.id}')
        tear = get_metamon_property_tear(property.id)
        print(f'{property.id} 剩余battel次数: {tear}')
        battel_objects = get_battel_objects(property)
        for i in range(tear):
            print(f'开始第 {i + 1} 次的battel')
            # start_pay(property, battel_objects[i])
            start_battle(property, battel_objects[i])
