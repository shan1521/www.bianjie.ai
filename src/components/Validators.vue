<template>
    <div class="validators" :class="validatorsWrapVar">
        <nav class="header" v-show="device">
            <img src="../assets/logo.png" alt="">
            <span class="language">{{lang}}</span>
        </nav>
        <div class="index1"  v-show="!device">
            <div class="head">
                <img class="down" v-show="!is" src="../assets/app/down.png" @click="is=true"/>
                <img class="down" v-show="is" src="../assets/app/x.png" style="width: 16px;margin-top: 22px;"
                     @click="is=false"/>
                <img class="logo" @click="scroll(0)" src="../assets/logo.png"/>
                <img class="en" src="../assets/app/en.png"/>
            </div>
            <div class="index_down" v-show="is">
                <router-link :key="index" :to="item.href" tag="div"
                             v-for="(item,index) in $store.state.messages.index.title">
                    {{item.txt}}
                </router-link>
                <router-link class="head_item" key="310" to="/validators" tag="div">Validators</router-link>
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

                            <span>{{knowBtn}}</span>
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
                                        <p class="title_test">{{developer}}</p>
                                    </div>
                                    <div class="title_wrap">
                                        <p class="content_title">{{developerContent}}</p>
                                    </div>
                                </div>
                                <div class="introduce_wrap_module">
                                    <div class="title_wrap">
                                        <p class="title_test">{{cooperateDeveloper}}</p>
                                    </div>
                                    <div class="title_wrap">
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
                                        <p class="title_test">{{chooseUsTitle}}</p>
                                    </div>
                                    <div class="title_wrap">
                                        <p class="content_title">hello</p>
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
                    <input type="text" :placeholder="placeholder">
                    <span>

                    </span>
                </div>
            </div>

        </section>
    </div>
</template>

<script>

    import message from '../assets/lang/message';

    export default {
        name: "Validators",
        data() {
            return {
                validatorsWrapVar: window.innerWidth > 500 ? 'personal_computer_validators_wrap' : 'mobile_validators_wrap',
                device:window.innerWidth > 500,
                lang: 'English',
                cos: 'COSMOS验证节点',
                safe: '安全的边界,放心的委托',
                know1: 'Cosmos被誉为"区块链的互联网",它将成为区块链3.0',
                know2: 'Cosmos专注解决区块链交互操作和可扩展性问题,它的区块链间通讯协议可以实现区块链的互联--不同链上的通证能实现真正的价值互通,将自身注入智能合约,匿名交易的特性进行互换',
                knowBtn: '了解COSMOS',
                introduce: '边界智能简介',
                developer: 'IRISnet开发者',
                developerContent: '边界智能作为开发团队打造了IRISnet--作为Cosmos生态中的第一个区域性枢纽,它将专注于为分布式商业应用提供基础设施和协议.',
                cooperateDeveloper: 'COSMOS合作开发者',
                cooperateDeveloperContent: '边界一直是Cosmos在中国最有影响力的核心技术贡献者,从第一版测试网gaia-1000开始,我们一直作为验证人帮助Cosmos不断升级,见证它的成长.',
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
                is: false,
            }
        },
        methods: {
            conversion(lang) {
                this.cos = mesage[lang].validators.cos;
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
        .header {
            height: 0.8rem;
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            justify-content: space-between;
            background: rgba(11, 36, 62, 1);
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
                -webkit-border-radius: 0.08rem;
                -moz-border-radius: 0.08rem;
                -ms-border-radius: 0.08rem;
                -o-border-radius: 0.08rem;
                border-radius: 0.08rem;
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
                    justify-content: center;
                    align-items: center;
                    .description {
                        margin-top:0.4rem;
                        p {
                            color: #ffffff;
                        }
                        h2 {
                            color: #ffffff;
                            font-weight: 400;
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
                        justify-content: center;
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
                                p {
                                    color: rgba(255,255,255,0.8);
                                    font-size:0.14rem;
                                    line-height:0.28rem;
                                }
                                h4{
                                    color: rgba(255,255,255,0.8);
                                    font-size:0.14rem;
                                    line-height:0.28rem;
                                }
                            }

                            span{
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
                                        .title_test{

                                            color:#ffffff;
                                            font-size:0.2rem;
                                        }
                                        .content_title{

                                            color:rgba(255,255,255,0.8);
                                            font-size:0.2rem;
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
                            color:#ffffff;
                            font-size:0.16rem;
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

                    input{

                    }
                    span{

                    }
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
                .banner {


                    .description {
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

                                font-size: 0.48rem;
                                color: #ffffff;
                            }
                            .introduce_wrap {

                                .introduce_wrap_module {

                                    .title_wrap {

                                        margin-right: 0.72rem;

                                        .title_test {

                                            color: #ffffff;
                                            font-size: 0.2rem;
                                            width: 2.88rem;
                                        }
                                        .content_title {

                                            width: 5rem;
                                            color: rgba(255, 255, 255, 0.8);
                                            font-size: 0.2rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .we_provide{

                height:7.96rem;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                align-items: center;
                flex-direction:column;
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
                        margin-bottom:0.4rem;

                        .content_img{

                            width:1.12rem;
                            height:1rem;
                        }
                        .content_description{

                            margin-top:0.3rem;
                            width:2.4rem;
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
                    height:0.36rem;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    margin-bottom:0.8rem;

                    input{

                        flex:1;
                        height:0.36rem;
                    }
                    span{

                        width:0.5rem;
                        height:0.36rem;
                    }
                }
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
                            font-weight:400;
                        }
                    }

                }
                img{
                    width:0.71rem;
                    height:1.04rem;
                }
            }
            .content {

                .content_know {
                    height: 3.1rem;
                    .content_know_wrap {

                        padding:0.2rem 0.3rem 0 0.1rem;
                        img {
                            margin-right:0.36rem;
                            width: 1.1rem;
                            height: 1.1rem;
                        }
                        .content_introduction {
                            .cosmos_wrap{
                                p {
                                    max-width: 4rem;
                                }
                                h4{
                                    max-width:  4rem;
                                }
                            }
                            span{
                                margin-top:0.2rem;
                            }


                        }
                    }
                }
                .bianjie_introduce{
                    height: 7.4rem;
                    width: 100%;
                    .introduce_wrap_all {
                        padding:0 0.3rem;
                        .bianjie_introduce_top {

                            .introduce_title {

                                font-size: 0.2rem;
                                color: #ffffff;
                            }
                            .introduce_wrap {

                                .introduce_wrap_module {

                                    flex-direction: column;
                                    .title_wrap {
                                        width:100%;
                                        margin-right: 0.72rem;

                                        .title_test {


                                        }
                                        .content_title {


                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .we_provide{

                .title{

                    color:#ffffff;
                }
                .content_feature{
                    .content_btn_wrap{

                        .content_img{

                        }
                        .content_description{

                        }
                    }
                }


            }
            .send_email{

                .send_email_title{

                }
                .send_email_wrap{

                    input{

                    }
                    span{

                    }
                }
            }

        }
    }
</style>