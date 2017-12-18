<template>
    <div>
        <Bhead txt="home"></Bhead>
        <div class="index ">
            <div class="center" >
                <div class="index_title">
                    <div class="index_title_strip">
                        <div></div>
                    </div>
                    <div class="index_title_subject">
                        {{$store.state.messages.index.subject}}
                    </div>
                    <div class="index_title_details">
                        {{$store.state.messages.index.details}}
                    </div>
                </div>
            </div>
        </div>
        <div class="mission">
            <div class="mission_warp">
                <div class="mission_cont" >
                    <div class="mission_title">
                        {{$store.state.messages.mission.title}}
                    </div>
                    <div class="mission_subject">
                        {{$store.state.messages.mission.subject[0]}}
                        <div></div>
                    </div>
                    <div class="mission_subject">
                        {{$store.state.messages.mission.subject[1]}}
                    </div>
                    <div class="mission_subject">
                        {{$store.state.messages.mission.subject[2]}}
                    </div>
                </div>
            </div>
            <div class="mission_warp1">
                <div>
                    <img src="../assets/1.png" />
                    <img src="../assets/2.png" />
                    <img src="../assets/3.png" />
                </div>
            </div>
        </div>
        <div class="about">
             <div class="center">
                 <div class="about_title">
                     {{$store.state.messages.about.title}}
                     <div></div>
                     <img src="../assets/bianjie.png"/>
                 </div>
                 <div class="about_subject">
                     <div>
                         {{$store.state.messages.about.subject[0]}}
                     </div>

                     <div style="margin-top:34px">
                         {{$store.state.messages.about.subject[1]}}
                     </div>
                 </div>
             </div>
        </div>
        <div class="core">
            <div class="center">
                <div class="core_title">
                    {{$store.state.messages.core.title}}
                </div>
                <div class="core_radius30">
                    <div class="core_radius20"></div>
                    <img src="../assets/4.png" class="core_radius30_imgLeft"/>
                    <div class="core_radius30_txtLeft">
                        <div>{{$store.state.messages.core.subject[0]}}</div>
                    </div>
                </div>
                <div class="core_vertical core_vertical176"></div>
                <div class="core_radius30">
                    <div class="core_radius20"></div>
                    <img src="../assets/5.png" class="core_radius30_imgRight"/>
                    <div class="core_radius30_txtRight">
                        <div>{{$store.state.messages.core.subject[1]}}</div>
                    </div>
                </div>
                <div class="core_vertical core_vertical188">

                </div>
                <!--<div class="core_subject">-->
                    <!--{{$store.state.messages.core.subject[2]}}-->
                <!--</div>-->
            </div>
        </div>

        <div id="#cooperation" class="cooperation" >
            <div class="center">
                <div class="cooperation_title">
                    {{$store.state.messages.cooperation.title}}
                </div>
                <div class="cooperation_subject" >
                    {{$store.state.messages.cooperation.subject[0]}}
                </div>
                <div class="cooperation_radius_list">
                    <div class="cooperation_radius" v-for="item in  $store.state.messages.index.enterprise">
                        <img :src="item.img" />
                    </div>
                </div>
                <div class="cooperation_radius_list">
                    <div class="cooperation_radius cooperation_radius_txt"  v-for="item in  $store.state.messages.index.enterprise" >
                        {{item.txt}}
                    </div>
                </div>
                <div class="cooperation_subject1">
                    {{$store.state.messages.cooperation.subject[1]}}
                </div>
                <div class="cooperation_radius_list1">
                    <div class="cooperation_radius" v-for="item in  $store.state.messages.index.school">
                        <img :src="item.img" />
                    </div>
                </div>
                <div class="cooperation_radius_list1" style="margin-bottom: 152px;">
                    <div class="cooperation_radius cooperation_radius_txt"   v-for="item in  $store.state.messages.index.school" >
                        {{item.txt}}
                    </div>
                </div>
            </div>
        </div>
        <div id="#contact" class="contact">
            <div class="center">
                <div class="contact_title">
                    {{$store.state.messages.contact.title}}
                </div>
                <div class="contact_email">
                    <span class="contact_34b">{{$store.state.messages.contact.email.txt}}</span>
                    <span class="contact_fff">{{$store.state.messages.contact.email.val}}</span>
                    <span class="contact_34b" style="margin-left:76px ">{{$store.state.messages.contact.wechat.txt}}</span>
                    <span class="contact_fff">{{$store.state.messages.contact.wechat.val}}</span>
                </div>
                <div class="contact_address">
                    <span class="contact_34b">{{$store.state.messages.contact.address.txt}}</span>
                    <span class="contact_fff">{{$store.state.messages.contact.address.val}}</span>
                </div>
                <div class="contact_across"></div>
                <div class="contact_img">
                    <img src="../assets/qcode.jpg"/>
                </div>
                <div class="contact_icp">
                    版权所有 © 2017 上海边界智能科技有限公司 沪ICP备17020986
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Bhead from './head'
    export default {
        name: 'index',
        components:{
            Bhead
        },
        methods:{
            roll(){
                if(document.getElementById(this.$route.hash)){
                    window.scrollTo(0, document.getElementById(this.$route.hash).offsetTop-80)
                }
            }
        },
        mounted(){
            this.roll();
        },
        watch: {
            '$route': 'roll'
        },
    }
</script>


<style scoped lang='less'>
    .index{
        height: 415px;
        background: linear-gradient(to right, #034876 50%, #bcd6e3 50%);
        /*background-color: #19557f;*/
        .center{
            height: 100%;
            background: url('/public/home.jpg') center center no-repeat;
        }
        .index_title{
            margin-left: 135px;
            .index_title_strip{
                margin-top: 180px;height: 2px;background-color: #fff;width: 100px;position: relative;
                div{
                    width: 36px;position: absolute;top: 0;background-color: #1f98f8;height: 100%;
                }
            }
            .index_title_subject{
                margin-top: 40px;color: #fff;font-size: 40px;font-weight:bold;
            }
            .index_title_details{
                color: #fff;font-size: 28px;margin-top: 7px;
            }
        }
    }
    .mission{
        overflow: hidden;
        .mission_warp{
            float: left;width: 50%;background-color: #fff;height: 274px;
            .mission_cont{
                float: right;width:683px;height: 100%;
                .mission_title{
                    margin-top: 80px;margin-left: 86px;font-size: 24px;color: #00293b;font-weight: bold;margin-bottom: 4px
                }
                .mission_subject{
                    font-size: 18px;color: #00293b;margin-left: 224px;margin-top: 6px;position: relative;
                    div{
                        position: absolute;width: 100px;left: -138px;top: 6px;height: 2px;background-color: #1f98f8;
                    }
                }
            }
        }
        .mission_warp1{
            float: left;width: 50%;height: 274px;background-color: #1f98f8;
            div{
                float: left;width:683px;height: 100%;
                img{
                    margin-top: 60px;margin-left:40px;
                }
            }
        }
    }
    .about{
        background-color: #63686c;
        .center{height: 320px;}
        .about_title{
            width: 252px;
            text-align: right;margin-left: 274px;margin-top: 50px;color: #fff;font-weight: bold;font-size: 48px;float: left;position: relative;
            div{
                position: absolute;bottom: -4px;right:0;height: 2px;width: 160px;background-color: #fff;
            }
            img{position: absolute;    top: 88px;left: -190px;}
        }
        .about_subject{
            margin-top: 50px;color: #fff;margin-left: 68px;font-size: 18px;float: left;
            div{
                margin-top:6px;
                width: 710px;
                line-height: 30px;
            }
            div:first-child{
                margin-top: 3px;
            }
        }
    }
    .core{
        background-color: #fff;
        .core_title{
            margin-top: 70px;font-size: 30px;color: #00293b;text-align: center;font-weight: bold;margin-bottom: 45px;
        }
        .core_radius30{
            position: relative;height: 30px;width: 30px;background-color: #9f9da3;text-align: center;margin-left: 50%;left: -15px;border-radius: 50%;
            .core_radius20{
                width: 20px;height: 20px;border-radius: 50%;background-color: #fff;margin-top: 50%;top:-10px;position: absolute;left: 50%;margin-left: -10px
            }
            .core_radius30_imgLeft{
                position: absolute; left: -164px;
            }
            .core_radius30_imgRight{
                position: absolute; right: -164px;
            }
            .core_radius30_txtLeft{
                position: absolute;width: 530px;text-align: left;margin-left: 62px;font-size: 18px;color: #00293b;line-height: 30px;
            }
            .core_radius30_txtRight{
                position: absolute;width: 530px;text-align: right;left: -532px;font-size: 18px;color: #00293b;line-height: 30px;margin-left: -36px;
            }
        }
        .core_vertical176{ height: 176px;}
        .core_vertical188{height: 188px}
        .core_vertical{
           background-color: #9f9da3;width: 1px;margin-left: 50%;    left: -1px;  position: relative;
        }
        .core_subject{
            margin:70px 0px 70px 0px;text-align: center;font-size: 18px;color: #00293b;
        }
    }
    .cooperation{
        background-color: #fff;text-align: center;
        .cooperation_title{
            color: #00293b;font-size: 30px;margin-top: 70px;margin-bottom: 50px
        }
        .cooperation_subject{
            color: #00293b;font-size: 20px;margin-bottom: 50px
        }
        .cooperation_subject1{
            font-size: 20px;color: #00293b;margin-top: 90px;margin-bottom: 50px
        }
        .cooperation_radius_list {
            margin: 0px 198px;
            overflow: hidden;
            .cooperation_radius:last-child {
                margin-right: 0px;
            }
        }
        .cooperation_radius_txt{
            margin-top: 20px;height: 20px!important;
        }
        .cooperation_radius_list1{
            margin: 0px 300px;overflow: hidden;
            .cooperation_radius:last-child{
                margin-right: 0px;
            }
        }
        .cooperation_radius{
            float: left;width: 150px;height: 150px;border-radius: 50%;margin-right: 50px
        }
    }
    .contact{
        background-color: #0c5587;height:400px;
        .center{
            position: relative;
            .contact_title{
                padding-top: 60px;margin-left: 300px;font-size: 48px;color: #fff;font-weight: bold;
            }
            .contact_email{
                margin-left: 300px;margin-top: 68px;font-size: 18px;
            }
            .contact_address{
                margin-left: 300px;margin-top: 24px;font-size: 18px;
            }
            .contact_fff{
                color: #fff;
            }
            .contact_34b{
                color: #3faaff;
            }
            .contact_across{
                height: 1px;width: 810px;margin:36px auto;background-color: #3faaff
            }
            .contact_img{
                position: absolute;width: 120px;height: 120px;top: 56px;right:296px;
                img{
                    width: 100%;
                }
            }
            .contact_icp{
                color: #fff;text-align: center;font-size: 14px;margin-top: 40px
            }
        }
    }
</style>  