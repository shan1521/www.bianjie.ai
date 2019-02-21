<template>
    <div class="validators" :class="validatorsWrapVar">
        <nav class="header" v-show="device">
            <div class="title_wrap">
                <img src="../assets/logo.png" alt="" @click="$router.push('/')">
                <span class="language" @click="changeLanguage">{{lang}}</span>
            </div>
        </nav>
        <div class="index1"  v-show="!device">
            <div class="head">
                <img class="down" v-show="!is" src="../assets/app/down.png" @click="is=true"/>
                <img class="down" v-show="is" src="../assets/app/x.png" style="width: 16px;margin-top: 22px;"
                     @click="is=false"/>
                <img class="logo" @click="$router.push('/app')" src="../assets/logo.png"/>
                <img class="en" src="../assets/app/cn.png" @click="changeLanguage" v-show="lang === '中文'"/>
                <img class="en" src="../assets/app/en.png" @click="changeLanguage" v-show="lang === 'English'"/>
            </div>
            <div class="index_down" v-show="is">
                <div v-for="(item,index) in currentMessage" @click="skipHome(item.href)" :key="index">
                    {{item.txt}}
                </div>
            </div>
        </div>
        <section class="body">
            <div class="banner_wrap">
                <div class="banner">
                    <div class="description">
                        <p>{{cos}}</p>
                        <h2>{{safe}}</h2>
                    </div>
                    <img src="../assets/validators/validator.png" alt="">
                </div>
            </div>
            <div class="content">
                <section class="content_know">
                    <div class="content_know_wrap">
                        <img src="../assets/validators/cosmos.png" alt="">
                        <div class="content_introduction">
                            <div class="cosmos_wrap">
                                <p>{{know1}}</p>
                                <h4>{{know2}}</h4>
                            </div>

                            <a href="https://cosmos.network/" target="_blank">{{knowBtn}}</a>
                        </div>
                    </div>
                </section>
                <section class="bianjie_introduce">
                    <div class="introduce_wrap_all">
                        <div class="bianjie_introduce_top">
                            <p class="introduce_title">{{introduce}}</p>
                            <div class="introduce_wrap">
                                <div class="introduce_wrap_module">
                                    <div class="title_wrap">
                                        <span></span>
                                        <p class="title_test">{{developer}}</p>
                                    </div>
                                    <div class="title_wrap" :style="device?'':'border-top:none;min-height:1.4rem;'">
                                        <span v-show="device"></span>
                                        <p class="content_title">{{developerContent}}</p>
                                    </div>
                                </div>
                                <div class="introduce_wrap_module">
                                    <div class="title_wrap">
                                        <span></span>
                                        <p class="title_test">{{cooperateDeveloper}}</p>
                                    </div>
                                    <div class="title_wrap" :style="device?'':'border-top:none;;min-height:1.4rem;'">
                                        <span v-show="device"></span>
                                        <p class="content_title">{{cooperateDeveloperContent}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bianjie_introduce_top">
                            <p class="introduce_title">{{chooseUs}}</p>
                            <div class="introduce_wrap">
                                <div class="introduce_wrap_module">
                                    <div class="title_wrap">
                                        <span></span>
                                        <p class="title_test">{{chooseUsTitle}}</p>
                                    </div>
                                    <div class="title_wrap" :style="device?'':'border-top:none;margin-bottom:0.2rem;'">
                                        <span v-show="device"></span>
                                        <p class="content_title">
                                            Testnet Validator:
                                            <a class="cosmos_explorer_link" href="https://explorecosmos.network/validators/cosmosaccaddr1shuqhpl273t96yg6nnqvyfeewj3ew3mdcwvcnu"
                                                target="_blank">
                                                https://explorecosmos.network/validators/cosmosaccaddr1shuqhpl273t96yg6nnqvyfeewj3ew3mdcwvcnu
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <div class="we_provide">
                <div class="title">{{provide}}</div>
                <div class="content_feature">
                    <div class="content_btn_wrap">
                        <div class="content_img">
                            <img src="../assets/validators/data.png" alt="">
                        </div>
                        <p class="content_description">{{feature1}}</p>
                    </div>
                    <div class="content_btn_wrap">
                        <div class="content_img">
                            <img src="../assets/validators/network.png" alt="">
                        </div>
                        <p class="content_description">{{feature2}}</p>
                    </div>
                    <div class="content_btn_wrap">
                        <div class="content_img">
                            <img src="../assets/validators/protection.png" alt="">
                        </div>
                        <p class="content_description">{{feature3}}</p>
                    </div>
                    <div class="content_btn_wrap">
                        <div class="content_img">
                            <img src="../assets/validators/code.png" alt="">
                        </div>
                        <p class="content_description">{{feature4}}</p>
                    </div>
                    <div class="content_btn_wrap">
                        <div class="content_img">
                            <img src="../assets/validators/24hour.png" alt="">
                        </div>
                        <p class="content_description">{{feature5}}</p>
                    </div>
                    <div class="content_btn_wrap">
                        <div class="content_img">
                            <img src="../assets/validators/test.png" alt="">
                        </div>
                        <p class="content_description">{{feature6}}</p>
                    </div>
                </div>
            </div>
            <div class="send_email">
                <p class="send_email_title">{{subscribe}}</p>
                <div class="send_email_wrap">
                    <input type="text" :placeholder="placeholder" v-model="email">
                    <span @click="handleClick">
                        <img src="../assets/validators/email.png" alt="">
                    </span>

                </div>
                <i class="info" :class="showError?'error':(showSuccess?'success':'')">{{emailInfo}}</i>
            </div>

        </section>
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
                cos: 'COSMOS验证节点',
                safe: '安全的边界,放心的委托',
                know1: 'Cosmos被誉为"区块链的互联网",它将成为区块链3.0',
                know2: 'Cosmos专注解决区块链交互操作和可扩展性问题,它的区块链间通讯协议可以实现区块链的互联--不同链上的通证能实现真正的价值互通,将自身注入智能合约,匿名交易的特性进行互换',
                knowBtn: '了解COSMOS',
                introduce: '边界智能简介',
                developer: 'IRISnet开发者',
                developerContent: '边界智能作为开发团队打造了IRISnet--作为Cosmos生态中的第一个区域性枢纽,它将专注于为分布式商业应用提供基础设施和协议.',
                cooperateDeveloper: 'COSMOS合作开发者',
                cooperateDeveloperContent: '边界智能是Cosmos在中国非常有影响力的研发技术贡献者,从起步的测试网gaia-1000开始，我们一直作为验证人帮助Cosmos不断升级,见证它的成长.',
                chooseUs: '选择边界智能',
                chooseUsTitle: '在COSMOS测试网络找到我们',
                provide: '我们提供',
                feature1: '安全可靠的企业级机房',
                feature2: '高可用性网络',
                feature3: '商业DDos攻击防护',
                feature4: '硬件加密保证安全',
                feature5: '7*24小时专业支持',
                feature6: '定期第三方渗透测试',
                subscribe: '订阅获取最新动态',
                placeholder: '请输入您的email地址',
                emailError:'请输入正确的邮箱地址',
                is: false,
                currentMessage:'',
                email:'',
                showError:false,
                showSuccess:false,
                emailInfo:'',
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
        },
        methods: {
            conversion(lang) {
                this.cos = message[lang].validators.cos;
                this.safe = message[lang].validators.safe;
                this.know1 = message[lang].validators.know1;
                this.know2 = message[lang].validators.know2;
                this.knowBtn = message[lang].validators.knowBtn;
                this.introduce = message[lang].validators.introduce;
                this.developer = message[lang].validators.developer;
                this.developerContent = message[lang].validators.developerContent;
                this.cooperateDeveloper = message[lang].validators.cooperateDeveloper;
                this.cooperateDeveloperContent = message[lang].validators.cooperateDeveloperContent;
                this.chooseUs = message[lang].validators.chooseUs;
                this.chooseUsTitle = message[lang].validators.chooseUsTitle;
                this.provide = message[lang].validators.provide;
                this.feature1 = message[lang].validators.feature1;
                this.feature2 = message[lang].validators.feature2;
                this.feature3 = message[lang].validators.feature3;
                this.feature4 = message[lang].validators.feature4;
                this.feature5 = message[lang].validators.feature5;
                this.feature6 = message[lang].validators.feature6;
                this.subscribe = message[lang].validators.subscribe;
                this.placeholder = message[lang].validators.placeholder;
                this.emailError = message[lang].validators.emailError;
            },
            scroll(top) {
                $('body,html').animate({
                        scrollTop: top
                    }, 500
                );
            },
            img(src) {
                src = src.split('public/')[0] + 'public/app/' + src.split('public/')[1];
                return src;
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
            skipHome(href){
                new Promise((resolve)=>{
                    this.$router.push('/app');
                    resolve();
                }).then(()=>{
                    this.$router.push(`/app${href.substr(1)}`);
                    console.log(`/app${href.substr(1)}`)
                })
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
    html, body {
        width: 100%;
        height: 100%;
    }

    .validators {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        font-family:"SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial";
        .header {
            height: 0.8rem;
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            justify-content: center;
            background: rgba(11, 36, 62, 1);
            .title_wrap{
                width:11.8rem;
                height:100%;
                display: flex;
                justify-content: space-between;
                img {
                    margin-left: 0.4rem;
                    cursor: pointer;
                }
                .language {
                    cursor: pointer;
                    width: 1rem;
                    height: 0.36rem;
                    background: #3147F2;
                    color: #ffffff;
                    text-align: center;
                    line-height: 0.36rem;
                    margin-top: 0.22rem;
                    margin-right: 0.4rem;
                    font-size: 0.16rem;
                    -webkit-border-radius: 0.04rem;
                    -moz-border-radius: 0.04rem;
                    -ms-border-radius: 0.04rem;
                    -o-border-radius: 0.04rem;
                    border-radius: 0.04rem;
                    border:0.02rem solid #6274FF;
                }
            }


        }
        .body {
            flex: 1;
            overflow-y: auto;
            .banner_wrap {
                width: 100%;
                background: url('../assets/validators/bg.jpg') no-repeat 0 0;
                background-size: 100% 2.9rem;

                .banner {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .description {
                        margin-top:0.4rem;
                        font-weight:300;
                        p {
                            color: #ffffff;
                        }
                        h2 {
                            color: #ffffff;
                            font-weight: 600;
                        }
                    }
                    img{
                        margin-top:0.3rem;
                    }

                }
            }
            .content {
                background: #161931;
                width: 100%;
                .content_know {

                    width: 100%;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .content_know_wrap {
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        justify-content: space-between;
                        img {

                        }
                        .content_introduction {
                            display: -webkit-box;
                            display: -webkit-flex;
                            display: -ms-flexbox;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: flex-start;
                            .cosmos_wrap{
                                margin-bottom:0.2rem;
                                p {
                                    color: rgba(255,255,255,0.8);
                                    font-size:0.18rem;
                                    line-height:0.28rem;
                                    font-weight:100;
                                }
                                h4{
                                    color: rgba(255,255,255,0.8);
                                    font-size:0.18rem;
                                    font-weight:100;
                                    line-height:0.28rem;
                                }
                            }

                            a{
                                width:1.44rem;
                                height:0.36rem;
                                -webkit-border-radius: 0.04rem;
                                -moz-border-radius: 0.04rem;
                                -ms-border-radius: 0.04rem;
                                -o-border-radius: 0.04rem;
                                border-radius: 0.04rem;
                                line-height:0.36rem;
                                text-align: center;
                                background:#3147F2;
                                color:#ffffff;
                                cursor:pointer;
                                border:0.02rem solid #6274FF;
                            }
                        }
                    }
                }
                .bianjie_introduce {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    .introduce_wrap_all{
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        flex-direction: column;
                        margin-top:0.3rem;
                        .bianjie_introduce_top{

                            .introduce_title{


                                color:#ffffff;
                            }
                            .introduce_wrap{

                                .introduce_wrap_module{
                                    display: -webkit-box;
                                    display: -webkit-flex;
                                    display: -ms-flexbox;
                                    display: flex;
                                    .title_wrap{


                                        border-top:0.01rem solid #60658F;
                                        padding-top:0.2rem;
                                        position: relative;
                                        span{
                                            position: absolute;
                                            width:1rem;
                                            height:0.01rem;
                                            background:#8c98e8;
                                            top:-0.01rem;
                                            left:0;
                                        }
                                        .title_test{

                                            color:#ffffff;
                                            font-size:0.2rem;


                                        }
                                        .content_title{

                                            color:rgba(255,255,255,0.8);
                                            line-height:0.26rem;
                                            overflow-wrap: break-word;
                                            .cosmos_explorer_link{
                                                color:#66A1FF;
                                                display: inline-block;
                                                word-break: break-all;
                                                word-wrap: break-word;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
            .we_provide{

                background: #272B49;
                width:100%;

                .title{

                }
                .content_feature{

                    .content_btn_wrap{

                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        flex-direction: column;
                        align-items:center;
                        .content_img{

                            img{
                                width:100%;
                                height:100%;
                            }

                        }
                        .content_description{

                            text-align: center;
                            color:rgba(255,255,255,0.8);
                            margin-top:0.14rem;
                            margin-bottom:0.17rem;
                            width:100%;
                            overflow-wrap: break-word;
                            word-break: normal;
                        }
                    }
                }


            }
            .send_email{

                background: #161931;
                width:100%;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                flex-direction: column;
                align-items:center;
                .send_email_title{

                    color:#ffffff;
                }
                .send_email_wrap{
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    border:0.01rem solid #60658F;
                    -webkit-border-radius: 0.04rem;
                    -moz-border-radius: 0.04rem;
                    -ms-border-radius: 0.04rem;
                    -o-border-radius: 0.04rem;
                    border-radius: 0.04rem;
                    overflow:hidden;

                    input{
                        outline: none !important;
                        border:none;

                        text-indent:0.15rem;
                        background: #272B49;
                        color:#ffffff;

                    }
                    span{
                        background: #3147F2;
                        cursor:pointer;
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                }
                .info{
                    visibility:hidden;
                }
                .error{
                    color:#ff4a4a;
                    visibility:visible;
                }
                .success{
                    color:lawngreen;
                    visibility:visible;
                }
            }

        }
    }




    //pc
    .personal_computer_validators_wrap {

        .header {

            img {

            }
            .language {

            }
        }
        .body {

            .banner_wrap {
                height: 2.9rem;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                justify-content: center;
                align-items: center;

                .banner {



                    .description {
                        margin-left:0.6rem;
                        margin-top:0.4rem;
                        p {
                            font-size: 0.36rem;
                        }
                        h2 {
                            font-size: 0.48rem;
                            color: #ffffff;
                        }
                    }
                    img{

                        margin-right:0.8rem;
                    }

                }
            }
            .content {

                .content_know {
                    height: 3rem;
                    .content_know_wrap {

                        img {
                            margin-right:0.36rem;
                            width: 2.2rem;
                            height: 2.2rem;
                        }
                        .content_introduction {
                            width:6rem;
                            margin-top:0.2rem;
                            .cosmos_wrap{
                                p {
                                    max-width: 6rem;
                                }
                                h4{
                                    max-width:  6rem;
                                }
                            }


                        }
                    }
                }
                .bianjie_introduce{
                    height: 7.4rem;
                    width: 100%;
                    .introduce_wrap_all {
                        .bianjie_introduce_top {

                            .introduce_title {

                                font-size: 0.36rem;
                                color: #ffffff;
                                margin-bottom:0.2rem;
                            }
                            .introduce_wrap {

                                .introduce_wrap_module {
                                    justify-content: space-between;
                                    margin-bottom:0.4rem;
                                    min-height:1.33rem;

                                    .title_wrap {


                                        .title_test {

                                            color: #ffffff;
                                            font-size: 0.24rem;
                                            width: 2.88rem;
                                            font-weight:300;
                                        }
                                        .content_title {

                                            width: 6rem;
                                            color: rgba(255, 255, 255, 0.8);
                                            font-size: 0.18rem;
                                            font-weight:100;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .we_provide{
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                align-items: center;
                flex-direction:column;
                padding-bottom:0.3rem;
                .title{

                    color:#ffffff;
                    font-size:0.36rem;
                    margin-top:0.6rem;
                    margin-bottom:0.6rem;
                }
                .content_feature{
                    max-width:8rem;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    flex-wrap:wrap;
                    justify-content: space-between;

                    .content_btn_wrap{
                        margin-bottom:0.6rem;

                        .content_img{

                            width:1rem;
                            height:1rem;
                        }
                        .content_description{

                            margin-top:0.3rem;
                            width:2.4rem;
                            font-size:0.16rem;
                        }
                    }
                }


            }
            .send_email{

                .send_email_title{

                    margin-top:0.4rem;
                    margin-bottom:0.3rem;
                    font-size:0.36rem;
                }
                .send_email_wrap{

                    width:6.4rem;
                    height:0.4rem;

                    margin-bottom:0.1rem;

                    input{

                        flex:1;
                        height:0.4rem;
                        border:none;
                        font-size:0.18rem;
                    }
                    span{

                        width:1rem;
                        height:0.4rem;

                        img{
                            width: 0.24rem;
                            height:0.2rem;
                        }

                    }
                }
                }
                .info{
                    margin-bottom:0.8rem;
                    font-style:normal;
                    font-size:0.14rem;
                }
                .error{
                    color:#ff4a4a;
                    visibility:visible;
                }
                .success{
                    color:lawngreen;
                    visibility:visible;
                }
            }

        }
    //移动
    .mobile_validators_wrap {

        .index1 {
            text-align: center;
            overflow: hidden;
            position: relative;
            height:0.63rem;

            .head {
                position: relative;
                position: fixed;
                top: 0;
                text-align: center;
                width: 100%;
                background: rgb(11, 36, 62);
                z-index: 10;
                .down {
                    position: absolute;
                    left: 0;
                    width: 20px;
                    margin-top: 20px;
                    margin-left: 30px;
                }
                .logo {
                    width: 100px;
                }
                .en {
                    position: absolute;
                    right: 0;
                    width: 20px;
                    margin-top: 20px;
                    margin-right: 30px;
                }
            }
            .index_logo {
                margin-top: 62px;
                width: 100%;

            }
            .index_btn {
                position: absolute;
                left: 50%;
                margin-left: -15px;
                bottom: 14%;
                cursor: pointer;
                z-index: 2;
                width: 30px;
            }
            .index_down {
                position: fixed;
                width: 100%;
                height: 100%;
                background: #fff;
                top: 0;
                z-index: 3;
                padding-top: 60px;

                div {
                    height: 60px;
                    line-height: 60px;
                    text-align: left;
                    text-indent: 62px;
                    color: #696e75;
                    border-bottom: 1px solid #f4f4f4;
                }
            }

        }
        .body {

            width:100%;
            .banner_wrap {

                height:1.95rem;
                .banner {
                    padding:0 0.1rem 0 0.2rem;
                    .description {

                        p {

                            font-size:0.16rem;
                            margin-bottom:0.1rem;
                        }
                        h2 {

                            font-size:0.18rem;
                            font-weight:600;
                        }
                    }

                }
                img{
                    height:1.04rem;
                }
            }
            .content {

                .content_know {
                    .content_know_wrap {
                        width:100%;
                        display:flex;

                        img {
                            width: 1.1rem;
                            height: 1.1rem;
                            margin-top:0.2rem;
                            margin-left:0.1rem;
                        }
                        .content_introduction {
                            margin-top:0.2rem;
                            margin-right:0.2rem;
                            flex:1;
                            a{
                                margin-top:0.2rem;
                                margin-bottom:0.4rem;

                            }


                        }
                    }
                }
                .bianjie_introduce{
                    width: 100%;
                    .introduce_wrap_all {
                        .bianjie_introduce_top {
                            &:first-child{
                                margin-bottom:0.3rem;
                            }

                            .introduce_title {

                                font-size: 0.24rem;
                                color: #ffffff;
                                margin-bottom:0.18rem;
                            }
                            .introduce_wrap {

                                .introduce_wrap_module {

                                    flex-direction: column;
                                    .title_wrap {

                                        .title_test {

                                            font-size:0.14rem;

                                        }
                                        .content_title {

                                            font-size:0.12rem;
                                            color:rgba(255,255,255,0.8);
                                            width:2.6rem;
                                            margin-bottom:0.18rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .we_provide{
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                flex-direction:column;
                align-items: center;
                width:100%;
                .title{

                    color:#ffffff;
                    margin-top:0.36rem;
                    margin-bottom:0.36rem;
                }
                .content_feature{
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    flex-wrap:wrap;
                    justify-content: space-between;
                    width:90%;
                    margin-bottom:0.3rem;
                    .content_btn_wrap{
                        min-width:1.4rem;

                        .content_img{
                            width:0.64rem;
                            height:0.64rem;

                        }
                        .content_description{
                            font-size:0.12rem;
                            max-width:1.4rem;

                        }
                    }
                }


            }
            .send_email{

                .send_email_title{

                    margin: 0.2rem;
                }
                .send_email_wrap{
                    height:0.24rem;
                    margin-bottom:0.1rem;

                    input{
                        width:2.5rem;

                    }
                    span{
                        width:0.5rem;

                        img{
                            width:0.12rem;
                            height:0.1rem;
                        }

                    }
                }
                .info{
                    margin-bottom:0.2rem;
                    font-style:normal;
                    font-size:0.14rem;

                }
                .error{
                    color:#ff4a4a;
                    visibility:visible;
                }
                .success{
                    color:lawngreen;
                    visibility:visible;
                }
            }

        }
    }
</style>