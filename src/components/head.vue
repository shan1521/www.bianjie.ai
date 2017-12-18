<template>
    <div  style="height: 80px">
        <div class="head">
            <div class="center">
            <div style="width: 610px">
                <img src="../assets/logo.png" />
            </div>
            <div style="float: right;width: 750px;">
                <!--<router-link v-show="$store.state.lang=='EN'" to='?lang=CN'  class="div_list" tag="div">-->
                    <!--中-->
                <!--</router-link>-->
                <!--<router-link v-show="$store.state.lang=='CN'" to='?lang=EN'  class="div_list" tag="div">-->
                    <!--EN-->
                <!--</router-link>-->
                <router-link v-for="item in list" :to="item.href" :key="item.id" class="div_list" tag="div">
                    {{$store.state.messages.head[item.txt]}}<div :class="{'div_select':(item.txt==txt)}"></div>
                </router-link>
            </div>
        </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'head',
        props: ['txt'],
        data(){
            return{
                list:[
                    {'txt':'contact',is:false,href:'/#contact'},
                    {'txt':'cooperation',is:false,href:'/#cooperation'},
                    {'txt':'news',is:false,href:'/news'},
                    {'txt':'product',is:false,href:'/product'},
                    {'txt':'home',is:true,href:'/'}
                ]
            }
        }
    }
</script>


<style scoped lang='less'>
    .head{
        height: 80px;  background-color: #fff;position: fixed;z-index: 10;width: 100%;border-bottom: 1px solid #999;
        .center{
            div{
                float: left;
                img{
                    margin: 17px 344px 17px 135px
                }
            }
            .div_list{
                line-height: 80px;font-size: 18px;color: #00233b;margin-left: 52px;cursor: pointer;position: relative;float: right;
                div{
                    position: absolute;width: 30px;height: 4px;border-radius: 2px;background-color: #1f98f8;left: 50%;margin-left: -15px;top: 76px;
                    display: none;
                }
                .div_select{ display: block;}

                &:hover{
                    div{
                        display: block;
                    }
                }

            }

        }
    }
</style>  