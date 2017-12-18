<template>
    <div >
        <Bhead txt="product"></Bhead>
        <div class="product">
            <div class="center">
                <div class="product_warp">
                    <div class="product_warp_list" v-for="item of $store.state.messages.product.list">
                        <div class="product_warp_top">
                            <div class="product_warp_top_list">
                                {{item.title}}
                            </div>
                            <div class="product_warp_top_list1">
                                {{item.subject}}
                            </div>
                            <div class="product_warp_top_list2">
                                {{item.subject1}}
                            </div>
                        </div>
                        <div class="product_warp_txt">
                            {{item.txt}}
                        </div>
                        <div class="product_warp_txt1" v-html="item.txt1">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Bhead from './head'
    export default {
        name: 'product',
        components:{
            Bhead
        },
    }
</script>


<style scoped lang="less">
    .product{
        height: 305px;width: 100%;background-color: #0c5587;
        .center{
            position: relative;height: 700px;
        }
        .product_warp{
            position: absolute;left: 328px;    top: 60px;
            .product_warp_list{
                width: 300px;height: 586px;background-color: #fff;box-shadow: 0px 0px 16px rgba(41, 40, 47, 0.7);float: left;margin-left: 30px;
                .product_warp_top{
                    height: 245px;background-color: #00233b;width: 100%; background: linear-gradient(to bottom, #1f98f8 0%,#0179d9 100%);
                    .product_warp_top_list{
                        font-size: 58px;
                        color: #fff;
                        font-weight: bold;
                        padding-top: 30px;
                        margin-left: 20px;
                        line-height: 64px;
                    }
                    .product_warp_top_list1{
                        margin-left: 22px;font-size:18px;color: #fff;font-weight: bold;    margin-top: 14px;
                    }
                    .product_warp_top_list2{
                        margin-left: 22px;font-size:18px;color: #fff;margin-top:4px;font-weight: bold;
                    }
                }
                .product_warp_txt{
                    margin-top: 40px;margin-left: 20px;line-height: 24px;margin-right: 20px;color: #2b2525;font-size: 14px;
                }
                .product_warp_txt1{
                   margin-left: 20px;line-height: 24px;margin-right: 20px;color: #2b2525;font-size: 14px
                }
            }
        }
    }
</style>  