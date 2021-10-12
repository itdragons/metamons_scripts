// import { Button } from 'antd';
import { useMount } from 'ahooks'
import Dapp from '@hightall/dapp-lib'
import './App.css'
import { reloadDapp } from './dapp'
import v20Abi from './abi/ERC20.json'
import v1155Abi from './abi/ERC1155.json'
import MetamonEggAbi from './abi/MetamonEgg.json'
import MetamonHandleAbi from './abi/MetamonHandle.json'

function App() {
    const onDappEnabled = account => {
    // console.log('account', account)
        localStorage.setItem('account-address', account.address)
    }
    useMount(() => {
        reloadDapp(onDappEnabled)
    })
    /** 设置登陆网络 */
    const setNetworkEnv = NetworkEnv => {
    // 0 loacl 1 test 2 main
        window.networkEnv = NetworkEnv == 2 ? 'main' : 'test'
        localStorage.setItem('networkEnv', window.networkEnv)
        console.log(window.networkEnv)
    }
    /** 获取登陆状态 */
    const getLoginState = () => {
        if (localStorage.getItem('account-address') && localStorage.getItem('connect-method') && localStorage.getItem('connect-sign')) {
            /** 有address 和 method 是连接登陆 */
            return {
                state: true,
                'address': localStorage.getItem('account-address'),
                'method': localStorage.getItem('connect-method'),
                'sign': localStorage.getItem('connect-sign')
            }
        } else {
            /** 未登录状态 */
            return {
                state: false,
                'address': '',
                'method': '',
                'sign': ''
            }
        }
    }
    /** 退出登录 */
    const LogOut = () => {
        localStorage.clear()
    }
    /** 钱包登陆 */
    let ethereum = window.ethereum// 存储MetaMask插件对象
    const connectWallet = async connectMethod => {
        if (connectMethod == 'MetaMask' && !window.ethereum.isMetaMask) {
            window.ethereum = ethereum
        }
        const options = {
            extension: connectMethod
        }
        // console.log(connectMethod)
        if (connectMethod === 'WalletConnect') {
            options.providerOptions = {
                rpc: {
                    97: 'https://data-seed-prebsc-2-s3.binance.org:8545/',
                    56: 'https://bsc-dataseed.binance.org/'
                },
                chainId: window.networkEnv === 'main' ? 56 : 97
            }
        }
        let dapp = new Dapp(options)
        dapp.onEnabled((account: any) => onDappEnabled(account))
        console.log('连接的网络是', window.networkEnv)
        try {
            await dapp.enableBrowserExtension(window.networkEnv)
        } catch (err) {
            console.log(err)
            return {
                message: 'err',
                description: err
            }
        }
        // console.log(dapp)
        /** 已登陆 可获取签名*/
        if (dapp.currentAccount && dapp.currentAccount.address) {
            window.dapp = dapp
            localStorage.setItem('connect-method', connectMethod)
            /** 获取钱包登陆签名 账号不变，message 不变，签名应该是不变的*/
            let sig
            const message = 'LogIn'
            try {
                if (connectMethod === 'MetaMask') {
                    // Ref EIP-712, sign data that has a structure
                    sig = await dapp.personalSign(message)
                } else {
                    // Binance Chain Wallet doesn't support signTypedData yet
                    sig = await dapp.signMessage(message)
                }
            } catch (err) {
                /** 签名失败 */
                console.log(err)
                return {
                    message: 'err',
                    description: err
                }
            }

            localStorage.setItem('connect-sign', sig)
            return {
                message: 'ok',
                description: 'login successful',
                value: {
                    address: dapp.currentAccount.address,
                    sign: sig,
                    msg: message
                }
            }
        } else {
            return {
                message: 'err', description: 'No dapp.currentAccount.address'
            }
        }
    }

    /** 支付
   * 支付需要授权金额充足
  */
    const buy = async price => {
        if (window.dapp) {
            /** 支付 */
            try {
                /** 转换金额 需要进行金额转换，*10^18，前端金额转换方 */
                let transfer = window.dapp.parseUnits(String(price))
                /** 支付 */
                const tx = await window.dapp.runContractTransactionFunc(window.networkEnv == 'main' ? '0x12BB890508c125661E03b09EC06E404bc9289040' : '0xECeF3F3585A5DeDEfa37C8A8fC7e07dE635C2F99', v20Abi, 'transfer', '0xfE55F08aF9735D48a1150d6f26c7B6AA9ADaEAa9', transfer)
                console.dir(tx)
                return {
                    message: 'ok',
                    description: 'buy hash',
                    value: {
                        hash: tx.hash
                    }
                }
            } catch (err) {
                console.log(err)
                return { message: 'err', description: err }
            }

        } else {
            return { message: 'err', description: 'No dapp' }
        }

    }
    /** 消耗药水 tokenIds type:Array*/
    const ConsumePotion = async(amount, metamonId) => {
        if (window.dapp) {
            try {
                const tx = await window.dapp.runContractTransactionFunc(window.networkEnv == 'main' ? '0x51353799F8550c9010a8b0CbFE6C02cA96E026E2' : '0x086Af94B491899Cee5451C0bAaC1020bD3ABf77f', v1155Abi, 'burnInMetamon', 0, amount, metamonId)
                console.log(tx)
                return {
                    message: 'ok',
                    description: 'ConsumePotion hash',
                    value: {
                        hash: tx.hash
                    }
                }
            } catch (err) {
                console.log(err)
                return { message: 'err', description: err }
            }
        } else {
            return { message: 'err', description: 'No dapp' }
        }
    }
    /** 消耗⻩色钻石进行升级  tokenIds type:Array*/
    const ConsumeDiamondYellow = async(amount, metamonId) => {
        if (window.dapp) {
            try {
                const tx = await window.dapp.runContractTransactionFunc(window.networkEnv == 'main' ? '0x5dc3FeD851e07715965E5727592CE33d14b7828D' : '0x08A19ef42d33C2E0b2d47C33954957A290c0e60F', v1155Abi, 'burnInMetamon', 0, amount, metamonId)
                console.log(tx)
                return {
                    message: 'ok',
                    description: 'ConsumeDiamondYellow hash',
                    value: {
                        hash: tx.hash
                    }
                }
            } catch (err) {
                console.log(err)
                return { message: 'err', description: err }
            }
        } else {
            return { message: 'err', description: 'No dapp' }
        }
    }
    /** 消耗紫色钻石进行升级  tokenIds type:Array*/
    const ConsumeDiamondPurple = async(amount, metamonId) => {
        if (window.dapp) {
            try {
                const tx = await window.dapp.runContractTransactionFunc(window.networkEnv == 'main' ? '0x5dc3FeD851e07715965E5727592CE33d14b7828D' : '0x08A19ef42d33C2E0b2d47C33954957A290c0e60F', v1155Abi, 'burnInMetamon', 1, amount, metamonId)
                console.log(tx)
                return {
                    message: 'ok',
                    description: 'ConsumeDiamondPurple hash',
                    value: {
                        hash: tx.hash
                    }
                }
            } catch (err) {
                console.log(err)
                return { message: 'err', description: err }
            }
        } else {
            return { message: 'err', description: 'No dapp' }
        }
    }
    /** 合成元兽蛋 */
    const PiecesOfSynthetic = async(hash, sig) => {
        if (window.dapp) {
            try {
                const tx = await window.dapp.runContractTransactionFunc(window.networkEnv == 'main' ? '0xBd84164d543BEbfb1D909486854Ec2A4f2F2C6ff' : '0xC0e5c2d7deD94fDE23666AccCA4Dc0C1eBE5a5DA', MetamonHandleAbi, 'claimEgg', hash, sig)
                console.log(tx)
                return {
                    message: 'ok',
                    description: 'ConsumeDiamondPurple hash',
                    value: {
                        hash: tx.hash
                    }
                }
            } catch (err) {
                console.log(err)
                return { message: 'err', description: err }
            }
        } else {
            return { message: 'err', description: 'No dapp' }
        }
    }
    /** 批量合成元兽蛋 hashList:type Array sigList:Array*/
    // const PiecesOfSyntheticList = async (hashList, sigList) => {
    //   if (window.dapp) {
    //     try {
    //       const tx = await window.dapp.runContractTransactionFunc('0xC0e5c2d7deD94fDE23666AccCA4Dc0C1eBE5a5DA', MetamonHandleAbi, "batchClaimEgg", hashList, sigList)
    //       console.log(tx)
    //       return {
    //         message: 'ok',
    //         description: `ConsumeDiamondPurple hash`,
    //         value: {
    //           hash: tx.hash
    //         }
    //       }
    //     } catch (err) {
    //       console.log(err)
    //       return { message: 'err', description: err }
    //     }
    //   } else {
    //     return { message: 'err', description: 'No dapp' }
    //   }
    // }
    /** 开元兽蛋 */
    const HatchResults = async tokenId => {
        if (window.dapp) {
            try {
                const tx = await window.dapp.runContractTransactionFunc(window.networkEnv == 'main' ? '0x0cf6eC310531A65Bc198452961b975db30eaf4CA' : '0xD3F373B7c27C3378040f595f57C456548Dec87a7', MetamonEggAbi, 'open', tokenId)
                console.log(tx)
                return {
                    message: 'ok',
                    description: 'HatchResults hash',
                    value: {
                        hash: tx.hash
                    }
                }
            } catch (err) {
                console.log(err)
                return { message: 'err', description: err }
            }
        } else {
            return { message: 'err', description: 'No dapp' }
        }
    }
    /** 获得药水 */
    /* const GainPotion = async (nonce, sig) => {
    if (window.dapp) {
      try {
        const tx = await window.dapp.runContractTransactionFunc('0x0cB7a04AE78e7D26e63c9269998BfD35744b411b', MetamonHandleAbi, "claimPotion", nonce, sig)
        console.log(tx)
        return {
          message: 'ok',
          description: `ConsumeDiamondPurple hash`,
          value: {
            hash: tx.hash
          }
        }
      } catch (err) {
        console.log(err)
        return { message: 'err', description: err }
      }
    } else {
      return { message: 'err', description: 'No dapp' }
    }
  } */
    /** 批量获得药水 nonceList:type Array sigList:type Array*/
    /* const GainPotionList = async (nonceList, sigList) => {
    if (window.dapp) {
      try {
        const tx = await window.dapp.runContractTransactionFunc('0x0cB7a04AE78e7D26e63c9269998BfD35744b411b', MetamonHandleAbi, "batchClaimPotion", nonceList, sigList)
        console.log(tx)
        return {
          message: 'ok',
          description: `ConsumeDiamondPurple hash`,
          value: {
            hash: tx.hash
          }
        }
      } catch (err) {
        console.log(err)
        return { message: 'err', description: err }
      }
    } else {
      return { message: 'err', description: 'No dapp' }
    }
  } */

    // /** 测试 */
    setNetworkEnv('2')

    window.webDapp = new Object()
    window.webDapp.setNetworkEnv = setNetworkEnv
    window.webDapp.connectWallet = connectWallet
    window.webDapp.buy = buy
    window.webDapp.ConsumePotion = ConsumePotion
    window.webDapp.ConsumeDiamondYellow = ConsumeDiamondYellow
    window.webDapp.ConsumeDiamondPurple = ConsumeDiamondPurple
    window.webDapp.PiecesOfSynthetic = PiecesOfSynthetic
    // window.webDapp.PiecesOfSyntheticList = PiecesOfSyntheticList
    window.webDapp.HatchResults = HatchResults
    // window.webDapp.GainPotion = GainPotion
    // window.webDapp.GainPotionList = GainPotionList
    window.webDapp.getLoginState = getLoginState
    window.webDapp.LogOut = LogOut

    return (
        <div className="App">
            {/* <Button onClick={() => connectWallet('MetaMask')}>Metamask</Button>
      <Button onClick={() => connectWallet('WalletConnect')}>Wallnet Connect</Button>
      <Button onClick={() => buy(20)}>buy</Button>
      <Button onClick={() => ConsumePotion(2, '1')}>消耗药水</Button>
      <Button onClick={() => ConsumeDiamondYellow(2, '2')}>消耗⻩色钻石进行升级</Button>
      <Button onClick={() => ConsumeDiamondPurple(3, '3')}>消耗紫色钻石进行升级</Button>
      <Button onClick={() => HatchResults(0)}>开元兽蛋</Button>
      <Button onClick={() => PiecesOfSynthetic('0xad7c5bef027816a800da1736444fb58a807ef4c9603b7848673f7e3a68eb14a5', "0x5211256d10330eb600df699d05942e0a4475abdc636699188bd415d6e1bc5565665a674257867c227ea473e5edf14a1dfeec37a4e58d40602186c512aeed723c1b")}>合成元兽蛋</Button> */}
        </div>
    )
}

export default App
