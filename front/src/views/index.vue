<template>
    <div>
        <vue-metamask @onComplete="onComplete" />
        <Divider>{{ msg }}</Divider>
        <Divider>{{ metaMaskAddress }}</Divider>
        <Form :model="formItem" :label-width="80">
            <FormItem label="合约地址(收款方)">
                <Input v-model="formItem.toAddress" placeholder="" />
            </FormItem>
            <!--            <FormItem label="燃料价格">-->
            <!--                <InputNumber v-model="formItem.gasPrice" :min="1" />-->
            <!--            </FormItem>-->
            <FormItem label="批量次数">
                <!-- 250,1250,2500,12500,25000-->
                <!--                <RadioGroup v-model="formItem.amountData">-->
                <!--                    <Radio label="0xa9059cbb000000000000000000000000fe55f08af9735d48a1150d6f26c7b6aa9adaeaa900000000000000000000000000000000000000000000000d8d726b7177a80000">1</Radio>-->
                <!--                    <Radio label="0xa9059cbb000000000000000000000000fe55f08af9735d48a1150d6f26c7b6aa9adaeaa9000000000000000000000000000000000000000000000043c33c193756480000">5</Radio>-->
                <!--                    <Radio label="0xa9059cbb000000000000000000000000fe55f08af9735d48a1150d6f26c7b6aa9adaeaa90000000000000000000000000000000000000000000000878678326eac900000">10</Radio>-->
                <!--                    <Radio label="0xa9059cbb000000000000000000000000fe55f08af9735d48a1150d6f26c7b6aa9adaeaa90000000000000000000000000000000000000000000002a5a058fc295ed00000">50</Radio>-->
                <!--                    <Radio label="0xa9059cbb000000000000000000000000fe55f08af9735d48a1150d6f26c7b6aa9adaeaa900000000000000000000000000000000000000000000054b40b1f852bda00000">100</Radio>-->
                <!--                </RadioGroup>-->
                <InputNumber v-model="formItem.batchesNum" :min="1" />
            </FormItem>
            <Button type="primary" @click="pay">Pay</Button>
        </form>
        <Divider />
        {{ logs }}
    </div>
</template>

<script>
import VueMetamask from './matamask'

export default {
    name: 'Metamask',
    components: {
        VueMetamask
    },
    data() {
        return {
            formItem: {
                toAddress: '0x12bb890508c125661e03b09ec06e404bc9289040',
                gasPrice: 0x95be,
                gasLimit: 21000,
                amountData: '0xa9059cbb000000000000000000000000fe55f08af9735d48a1150d6f26c7b6aa9adaeaa900000000000000000000000000000000000000000000000d8d726b7177a80000',
                batchesNum: 1
            },
            msg: '',
            metaMaskAddress: '',
            web3: null,
            logs: ''
        }
    },
    methods: {
        pay() {
            for (let i = 0; i < this.formItem.batchesNum; i++) {
                this.web3.eth.sendTransaction({
                    from: this.metaMaskAddress,
                    to: this.formItem.toAddress,
                    data: this.formItem.amountData,
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
