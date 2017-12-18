<template>
    <div class="news">
        <Bhead txt="news"></Bhead>
        <section  v-for="item in  $store.state.messages.news.list">
            <div class="year" >
                <div class="center">
                    <div class="mlf135">
                        <div>{{item.year}}</div>
                    </div>
                </div>
            </div>
            <div class="center" v-for="i in item.count">
                <a :href="i.href" target="_blank">
                    <div class="list">
                        <div class="wrap">
                            <div>
                                <span class="day">{{i.day}}</span>
                                <span class="month">{{i.month}}</span>
                            </div>
                            <div class="text">
                                <img  src="../assets/news.png"/>
                                <div class="title" >
                                    {{i.title}}
                                </div>
                                <div class="subject">
                                    {{i.subject}}
                                </div>

                            </div>

                        </div>
                    </div>

                </a>
            </div>
        </section>
    </div>
</template>


<script>
    import Bhead from './head'
    export default {
        name: 'news',
        components:{
            Bhead
        }
    }
</script>


<style scoped lang="less">
   .news{
        .year{
            background-color:#ebebeb;
            .center{
                .mlf135{
                    margin-left: 135px;
                    div{
                        color: #acaaaa;font-size: 14px;margin: 2px 0
                    }
                }
            }
        }
        .list{
            margin-left: 135px;
            .wrap{
                margin-top: 38px;background-color: #fff;
               div{
                   float: left;
                   .day{
                       font-size: 32px
                   }
                   .month{
                       font-size: 18px;margin-left: 8px
                   }
               }
                .text{
                    border-bottom: 4px solid  #fff;
                    margin-left: 50px;height: 150px;width: 1036px; box-shadow: 0px 0px 6px rgba(41, 40, 47, 0.3);margin-bottom: 10px;padding-left: 44px;padding-top: 30px;position: relative;
                    .title{
                        font-size: 30px;font-weight: bold;height: 60px;width: 50%
                    }
                    .subject{
                        font-size: 14px;color: #00233b;line-height: 24px;width: 80%
                    }
                    img{position: absolute;top: 0;left: 0;display: none}
                    &:hover{
                        color: #00b9e6;
                        border-bottom: 4px solid  #00b9e6;
                        img{display: block}
                    }
                }
            }
        }
   }
</style>  