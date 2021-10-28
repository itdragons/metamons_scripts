from web3 import Web3, WebsocketProvider
import json

web3 = Web3(Web3.HTTPProvider('http://localhost:8545'))
# web3 = Web3(WebsocketProvider('wss://mainnet.infura.io/ws/v3/54cdeb5c4ae54af6bdf9d6d65c602f89'))
# web3 = Web3(WebsocketProvider('wss://bsc-ws-node.nariox.org/'))
accounts = web3.eth.accounts
print(accounts)
print(web3.eth.block_number)
print(web3.isConnected())

# print(web3.fromWei(web3.eth.getBalance("0x88ef6C3de9060AB57AF79DfdA14128652E964FDE"), 'ether'))

# Metamask转账账户
fromAddress = web3.toChecksumAddress("0x9ec4417cF4b1592eC340a76d72CeBe2599020C05")
# Metamask账户私钥
private_key = "8ff425519c1582835f42d7fb5f915ae12a0a7ab7c1bc94344c6438be6457cae1"

toAddress = web3.toChecksumAddress("0xC9382ffb1B0240E567FEf2a5daa24c48624376aD")

abis = []
with open("./abis/ERC20ABI.json", 'r', encoding='utf8') as data:
    abis += json.load(data)
with open("./abis/StormMultisender.json", 'r', encoding='utf8') as data:
    abis += json.load(data)
with open("./abis/MyABI.json", 'r', encoding='utf8') as data:
    abis += json.load(data)

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


def test():
    toAddress = web3.toChecksumAddress("0xA3AD41BD7957BF5AE809D695ccF69963DE45C0aF")
    contract = web3.eth.contract(address=toAddress, abi=abis)
    result = contract.functions.myName().call()
    print(result)
test()
