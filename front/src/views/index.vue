<template>
    <div>
        <vue-metamask @onComplete="onComplete" />
        <Divider>{{ msg }}</Divider>
        <Divider>{{ metaMaskAddress }}</Divider>
        <Form :model="formItem" :label-width="120">
            <FormItem label="sign">
                <Input v-model="formItem.sign" placeholder="" disabled />
            </FormItem>
            <FormItem label="合约地址(收款方)">
                <Input v-model="formItem.toAddress" placeholder="" disabled />
            </FormItem>
            <!--            <FormItem label="燃料价格">-->
            <!--                <InputNumber v-model="formItem.gasPrice" :min="1" />-->
            <!--            </FormItem>-->
            <FormItem label="批量次数">
                <InputNumber v-model="formItem.batchesNum" :min="1" />
            </FormItem>
            <Button type="primary" style="margin-left: 8px;" @click="sign">Sign</Button>
            <Button type="primary" style="margin-left: 8px;" @click="pay">Pay</Button>
            <!--            <Button type="primary" style="margin-left: 8px;" @click="test">Test</Button>-->
        </form>
        <Divider />
        {{ logs }}
    </div>
</template>

<script>
import VueMetamask from './matamask'
// import api from '../api/index'
export default {
    name: 'Metamask',
    components: {
        VueMetamask
    },
    data() {
        return {
            formItem: {
                sign: '',
                toAddress: '0xfe55f08af9735d48a1150d6f26c7b6aa9adaeaa9',
                gasPrice: 0x95be,
                gasLimit: 21000,
                batchesNum: 1
            },
            msg: '',
            metaMaskAddress: '',
            web3: null,
            logs: ''
        }
    },
    methods: {
        sign() {
            this.web3.eth.personal.sign('LogIn', this.metaMaskAddress, '')
                .then(sign => {
                    this.formItem.sign = sign
                    // let formData = new FormData()
                    // formData.append('address', this.metaMaskAddress)
                    // formData.append('sign', sign)
                    // formData.append('msg', 'LogIn')
                    // api.post('https://metamon-api.radiocaca.com/usm-api/login', formData).then(res => {
                    //     console.log('res=>', res)
                    // })
                })
        },
        cal(data) {
            console.log(data)
        },
        pay() {
            let transferData = this.getTransferData(this.formItem.toAddress, '250000000000000000000')
            for (let i = 0; i < this.formItem.batchesNum; i++) {
                this.web3.eth.sendTransaction({
                    from: this.metaMaskAddress,
                    to: '0x12BB890508c125661E03b09EC06E404bc9289040',
                    data: transferData,
                    gas: this.formItem.gasPrice
                }, function(error, hash) {
                    if (error) {
                        console.log('发送交易失败', error)
                    } else {
                        console.log('发送交易成功，hash:', hash)
                    }
                })
            }
        },
        test() {
            let data = this.getOpenData('6501')
            console.log(data)
        },
        getOpenData(amount) {
            return this.web3.eth.abi.encodeFunctionCall({
                name: 'open',
                type: 'function',
                inputs: [{
                    type: 'uint256',
                    name: '_amount'
                }]
            }, [amount])
        },
        getTransferData(address, amount) {
            // https://learnblockchain.cn/docs/web3.js/web3-eth-abi.html
            return this.web3.eth.abi.encodeFunctionCall({
                name: 'transfer',
                type: 'function',
                inputs: [{
                    type: 'address',
                    name: 'recipient'
                }, {
                    type: 'uint256',
                    name: 'amount'
                }]
            }, [address, amount])
        },

        onComplete(data) {
            // console.log('data:', data)
            if (!data) {
                return
            }

            this.web3 = data.web3
            this.msg = data.message
            this.metaMaskAddress = data.metaMaskAddress
        }
    }
}
</script>
