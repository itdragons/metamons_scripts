from web3 import Web3, WebsocketProvider
import json
from eth_account.messages import encode_defunct
from hexbytes import HexBytes

web3 = Web3(Web3.HTTPProvider('https://bsc-dataseed1.binance.org'))
# web3 = Web3(WebsocketProvider('wss://bsc-ws-node.nariox.org/'))
accounts = web3.eth.accounts
print(accounts)
print(web3.eth.block_number)
print(web3.isConnected())

# print(web3.fromWei(web3.eth.getBalance("0x88ef6C3de9060AB57AF79DfdA14128652E964FDE"), 'ether'))

# Metamask转账账户
fromAddress = web3.toChecksumAddress("0x88ef6C3de9060AB57AF79DfdA14128652E964FDE")
# Metamask账户私钥
private_key = "32928f2d6fbd6c7496ee2467ac8287eb06952050e50a815d10fe392cad9176a0"

toAddress = web3.toChecksumAddress("0x88ef6C3de9060AB57AF79DfdA14128652E964FDE")

abis = []
# with open("./abis/ERC20ABI.json", 'r', encoding='utf8') as data:
#     abis += json.load(data)
# with open("./abis/StormMultisender.json", 'r', encoding='utf8') as data:
#     abis += json.load(data)
# with open("./abis/MyABI.json", 'r', encoding='utf8') as data:
#     abis += json.load(data)

# 取得转账账户的交易nonce数据
nonce = web3.eth.getTransactionCount(fromAddress)


def to_transfer():
    # 取得当前汽体价格
    gas_price = web3.eth.gasPrice
    # 智能合约对象
    contract = web3.eth.contract(address=toAddress, abi=abis)
    txn = contract.functions.transfer(toAddress, 0x10).buildTransaction({
        "gasPrice": web3.toHex(web3.toWei(90, "Gwei")),  # 指定汽体价格
        "gas": web3.toHex(210000),  # 限制使用汽体最大量
        "value": web3.toHex(web3.toWei(0.1, "ether")),  # 发送总额必须大于转账金额+手续费否则会打包失败
        "nonce": nonce  # 防重放nonce,这个是必须的
    })

    print(txn)
    # 发送交易
    signed_txn = web3.eth.account.signTransaction(txn, private_key=private_key)
    print(signed_txn.hash)
    print(signed_txn.rawTransaction)
    # 发送到网络打包，如果报错 already known 就是上一笔交易正在打包，需要打包完成才能下一笔
    web3.eth.sendRawTransaction(signed_txn.rawTransaction)
    # 取得转账哈希
    txhash = web3.toHex(web3.sha3(signed_txn.rawTransaction))
    print("https://ropsten.etherscan.io/tx/" + txhash)

def bytesToString(bs):
    return bytes.decode(bs,encoding='utf8')

def hexStringTobytes(str):
    str = str.replace(" ", "")
    return bytes.fromhex(str)
    # return a2b_hex(str)

def test():
    msg = "LogIn"
    message = encode_defunct(text=msg)
    signature = web3.eth.account.sign_message(message, private_key=private_key).signature
    print(signature)
    print(HexBytes(signature))

test()


