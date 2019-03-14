<template>
    <div class="container">
        <div class="header_container" :class="flShowBoxShadow ? 'box_shadow':''">
            <div class="header_wrap">
                <div class="header_logo_img_content" @click="skipHome">
                    <img src="../assets/new_logo.png">
                </div>
                <div class="chang_lang_content" @click="changeLanguage(lang)">
                    <span class="lang_content">{{lang}}</span>
                    <div class="chang_lang_img">
                        <img src="../assets/lang_switch.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="banner_container">
            <div class="banner_content_wrap">
                <div class="content_left">
                    <h2>{{headerTitle}}</h2>
                    <p>{{headerProduct}}</p>
                    <h2 class="cosmos_address">{{headerValidatorAddress}}</h2>
                    <p @click="toCosmosBrowser">{{headerCosmosAddress}}</p>
                </div>
                <div class="content_right">
                    <div class="cosmos_img_content">
                        <img src="../assets/validators/validator.png">
                    </div>
                    <div class="cosmos_content">
                        <p>COSMOS</p>
                        <p>Validators</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="about_container">
            <div class="about_content_wrap">
                <p class="about_title">{{aboutTitle}}</p>
                <p class="about_second_title">{{aboutSecondTitle}}</p>
                <div class="about_content">
                    <div class="irisnet_content">
                        <div class="irisnet_title"><span>{{aboutIrisnetTitle}}</span></div>
                        <ul class="irisnet_text">
                            <li v-for="item in aboutIrisnetList"><i class="common_node"></i>{{item.item}}</li>
                        </ul>
                    </div>
                    <div class="cosmos_content">
                        <div class="cosmos_title"><span>{{aboutCosmosTitle}}</span></div>
                        <ul class="cosmos_text">
                            <li v-for="item in aboutCosmosList"><i class="common_node"></i>{{item.item}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="logo_container">
            <div class="logo_wrap">
                <div class="img_content" @click="toIrisnet">
                    <img src="../assets/irisnet_logo.png" alt="">
                </div>
                <div class="img_content cosmos_img" @click="toCosmos">
                    <img src="../assets/cosmos_logo.png" alt="">
                </div>
            </div>
        </div>
        <div class="safe_container">
            <div class="safe_wrap">
                <h2>{{bianJieTitle}}</h2>
                <ul class="safe_content">
                    <li class="safe_item" v-for="item in bianJieProductList">
                        <div class="safe_img_content">
                            <img :src="item.src" alt="">
                        </div>
                        <p class="safe_text">{{item.text}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="news_letter_container">
            <div class="news_letter_wrap">
                <h2>{{subscribe}}</h2>
                <div class="send_email_wrap">
                    <input type="text" :placeholder="placeholder" v-model="email">
                    <span @click="handleClick">
                        <img src="../assets/validators/email.png" alt="">
                    </span>
                </div>
                <i class="info" :class="showError?'error':(showSuccess?'success':'')">{{emailInfo}}</i>
            </div>
        </div>
    </div>
</template>

<script>

    import message from '../common/message';
    import axios from 'axios';

    export default {
        name: "Validators",
        data() {
            return {
                validatorsWrapVar: window.innerWidth > 500 ? 'personal_computer_validators_wrap' : 'mobile_validators_wrap',
                device:window.innerWidth > 500,
                lang: '',
                headerTitle: 'Bianjie - IRISnet Developer',
                headerProduct:'Maintained by the core development team of IRISnet',
                headerValidatorAddress:'Validator_address',
                headerCosmosAddress:'cosmosvaloper1ssm0d433seakyak8kcf93yefhknjleeds4y3em',
                aboutIrisnetTitle: 'Core Developer of IRIS Network',
                aboutTitle:'About Bianjie',
                aboutSecondTitle:'Core developer of IRISnet, active contributor to Cosmos',
                aboutIrisnetList: [
                    {
                        item:'First regional hub in Cosmos ecosystem'
                    },
                    {
                        item:'First BPoS blockchain built based on Coamos SDK'
                    },
                    {
                        item:'Understand each configuration Cosmos SDK'
                    }
                ],
                aboutCosmosTitle: 'Co-Developer of Cosmos Network',
                aboutCosmosList: [
                    {
                        item:'Genesis Validator on Cosmos Hub'
                    },
                    {
                        item:'From day 1 of gaia-1000 to mainnet launch'
                    },
                    {
                        item:'Technical support team of Cosmos China'
                    },
                    {
                        item:'Contributor to Cosmos and Tendermint'
                    }
                ],
                bianJieTitle:'Safe Bianjie, Safe Delegation',
                bianJieProductList:[
                    {
                        src:require('../assets/cosmos/service_room.png'),
                        text:'Safe and reliable enterprise-class data center',
                    },
                    {
                        src:require('../assets/cosmos/net.png'),
                        text:'Highly available network',
                    },
                    {
                        src:require('../assets/cosmos/node.png'),
                        text:'Auto scale sentry nodes',
                    },
                    {
                        src:require('../assets/cosmos/lock.png'),
                        text:'HSM for Private Key Protection',
                    },
                    {
                        src:require('../assets/cosmos/hour.png'),
                        text:'24/7 professional  monitoring',
                    },
                    {
                        src:require('../assets/cosmos/shield.png'),
                        text:'DDoS attack protection',
                    }
                ],
                placeholder: '请输入您的email地址',
                emailError:'请输入正确的邮箱地址',
                subscribe: '订阅获取最新动态',
                is: false,
                currentMessage:'',
                email:'',
                showError:false,
                showSuccess:false,
                emailInfo:'',
                flShowBoxShadow:false,
            }
        },
        mounted(){
            let userBrowserExplorerLanguage = navigator.language || navigator.userLanguage;
            let settingLanguage= userBrowserExplorerLanguage.substr(0,2).toLowerCase();
            if(settingLanguage === 'zh'){
                this.lang = 'English';
                this.conversion('cn');
            }else {
                this.conversion('en');
                this.lang = '中文';
            }
            window.addEventListener('scroll',this.scrollTop)
        },
        methods: {
            toIrisnet(){
                window.open('https://www.irisnet.org/')
            },
            toCosmos(){
                window.open('https://cosmos.network/')
            },
            toCosmosBrowser(){
                window.open('https://hubble.figment.network/chains/cosmoshub-1/validators/696ABC95186FD65A07050C28AB00C9358A315030')
            },
            scrollTop(){
              if(window.scrollY > 10){
                  this.flShowBoxShadow = true;
              }else {
                  this.flShowBoxShadow = false;
              }
            },
            conversion(lang) {
                this.headerTitle = message.cosmos[lang].header.title;
                this.headerProduct = message.cosmos[lang].header.product;
                this.headerValidatorAddress = message.cosmos[lang].header.validatorAddress;
                this.headerCosmosAddress = message.cosmos[lang].header.address;
                this.aboutIrisnetTitle = message.cosmos[lang].about.irisnet.title;
                this.aboutIrisnetList = message.cosmos[lang].about.irisnet.list;
                this.aboutTitle = message.cosmos[lang].about.title;
                this.aboutSecondTitle = message.cosmos[lang].about.secondTitle;
                this.aboutCosmosTitle = message.cosmos[lang].about.cosmos.title;
                this.aboutCosmosList = message.cosmos[lang].about.cosmos.list;
                this.bianJieTitle = message.cosmos[lang].bianjie.title;
                this.bianJieProductList = message.cosmos[lang].bianjie.product;
                this.placeholder = message[lang].validators.placeholder;
                this.subscribe = message[lang].validators.subscribe;
                this.emailError = message[lang].validators.emailError;
            },
            scroll(top) {
                $('body,html').animate({
                        scrollTop: top
                    }, 500
                );
            },
            changeLanguage(){
                if(this.lang === 'English'){
                    this.lang = '中文';
                    this.conversion('en');
                }else{
                    this.lang = 'English';
                    this.conversion('cn');
                }
            },
            flIsMobile(){
                const userAgentInfo = navigator.userAgent;
                const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
                let flag = true;
                for (let i = 0; i < Agents.length; i++) {
                    if (userAgentInfo.includes(Agents[i]) > 0) {
                        flag = false;
                        break;
                    }
                }
                return flag;
            },
            skipHome(){
                console.log(this.flIsMobile(),"6666")
                if(this.flIsMobile()){
                    this.$router.push({
                        path:'/'
                    })
                }else {
                    this.$router.push({
                        path:'/app'
                    })
                }

            },
            handleClick(){
                let address =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                //server 端接收参数.  0  代表中文;  1  代表英文;
                let lang = (this.lang === 'English' ? 1 : 0);
                if(address.exec(this.email)){

                    this.showError = false;
                    axios({
                        method: 'post',
                        url:"/",
                        data: {
                            email:this.email,
                            lang,
                        }
                    }).then((data)=>{
                        if(data.status === 200){
                            return data.data;
                        }
                    }).then((data)=>{
                        if(data.detail){
                            this.emailInfo = data.detail;
                            this.showError = true;
                            setTimeout(()=>{
                                this.showError = false;
                            },2000);
                        }else{
                            this.emailInfo = 'successful!';
                            this.showSuccess = true;
                            this.email = '';
                            setTimeout(()=>{
                                this.showSuccess = false;
                            },2000);
                        }
                    }).catch((error)=>{
                        console.log(error)
                    })
                }else {
                    this.emailInfo = this.emailError;
                    this.showError = true;
                    setTimeout(()=>{
                        this.showError = false;
                    },2000);
                }

            }
        }
    }
</script>

<style scoped lang="less">
    @import "../style/cosmos";
</style>