<template>
    <div class="validators" :class="validatorsWrapVar">
        <nav class="header">
            <img src="../assets/logo.png" alt="">
            <span class="language">{{lang}}</span>
        </nav>
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
                                    <div>
                                        <p>{{chooseUsTitle}}</p>
                                    </div>
                                    <div>
                                        <p>hello</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
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
                validatorsWrapVar: window.innerWidth > 500 ? 'personal_computer_validators_wrap' : 'personal_computer_validators_wrap',
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
                height: 2.9rem;
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
                            font-size: 0.36rem;
                            color: #ffffff;
                        }
                        h2 {
                            font-size: 0.48rem;
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
                            width: 2.2rem;
                            height: 2.2rem;
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
                                    height:0.28rem;
                                    line-height:0.28rem;
                                }
                                h4{
                                    color: rgba(255,255,255,0.8);
                                    font-size:0.14rem;
                                    height:0.28rem;
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
                    justify-content: space-between;
                    align-items: flex-start;
                    width: 100%;
                    .introduce_wrap_all{

                        .bianjie_introduce_top{

                            .introduce_title{

                            }
                            .introduce_wrap{

                                .introduce_wrap_module{

                                    .title_wrap{
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

                .banner {

                    .description {
                        margin-right:1.5rem;
                        p {

                        }
                        h2 {

                        }
                    }

                }
            }
            .content {

                .content_know {
                    height: 3rem;
                    .content_know_wrap {

                        img {
                            margin-right:0.36rem;
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
                    .bianjie_introduce_top{

                    }
                }
            }

        }
    }
</style>