from web3 import Web3
from eth_account.messages import encode_defunct

web3 = Web3(Web3.HTTPProvider('https://bsc-dataseed1.binance.org'))

print(f'web3 connection status: {web3.isConnected()}')

class W3Api:

    def __init__(self, from_address, private_key):
        self.from_address = from_address
        # self.from_address = web3.toChecksumAddress(from_address)
        self.private_key = private_key

    def login_sign(self):
        message = encode_defunct(text="LogIn")
        signature = web3.eth.account.sign_message(message, private_key=self.private_key).signature
        return signature.hex()
