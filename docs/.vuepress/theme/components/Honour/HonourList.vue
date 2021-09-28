<template>
    <div class="honourlist_container">
        <div class="honourlist_top_container">
            <div class="honourlist_top">
                <div class="honourlist_title">{{honourList.title}}</div>
            </div>
        </div>
        <div class="honourlist_bottom_container">
            <div class="honourlist_bottom">
                <div class="swiper-button-prev"><Prev class="prev_btn"></Prev></div>
                <div class="swiper_wrap">
                    <swiper class="top_list" :options="swiperTopOption">
                        <swiper-slide @click.native="maskVisible" class="top_item" v-for="(verItem,vIndex) in honourList.verticalList" :key="vIndex">
                            <img :src="verItem.imgSrc" alt="">
                        </swiper-slide>
                    </swiper>
                    <swiper class="bottom_list" :options="swiperBottomOption">
                        <swiper-slide class="bottom_item" v-for="(horizonItem,hIndex) in honourList.horizontalList" :key="hIndex">
                            <img :src="horizonItem.imgSrc" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="swiper-button-next"><Next class="next_btn"></Next></div>
            </div>
        </div>
        <!-- <div v-if="showMask" class="mask" @click="changeShow">
            1234
        </div> -->
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import Prev from '@theme/components/Common/Prev.vue';
import Next from '@theme/components/Common/Next.vue';
export default {
    name: 'HonourList',
    props: ['honourList'],
    data(){
        return {
            swiperTopOption: {
                slidesPerView: 4,
                spaceBetween: 32,
                // autoplay: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                speed: 800,
            },
            swiperBottomOption: {
                slidesPerView: 3,
                spaceBetween: 24,
                // autoplay: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                speed: 800,
            },
            topIndex: 0,
            bottomIndex: 0,
            showMask: false
        }
    },
    computed: {
        isDisabledNext(){
            if(this.honourList.verticalList.length - this.honourList.horizontalList.length > 0) {
                if(this.topIndex >= this.honourList.verticalList.length) {
                    return true;
                }
            }
        }
    },
    methods: {
        changeShow(){
            this.showMask = !this.showMask;
        },
        maskVisible(){
            this.showMask = true;
        },
        // toLeft(){

        // },
        // toRight() {
        //     let topIndex = 0;
        //     // this.$refs.swiperTop.scrollLeft = (201 + 32) * activeIndex + 'px';
        //     const topItems = document.querySelectorAll('.top_list .top_item');
        //     const bottomItems = document.querySelectorAll('.bottom_list .bottom_item');
        //     topItems.forEach((topItem, index)=>{
        //         topIndex = index;
        //         this.$refs.swiperTop.scrollLeft = -(201 + 32) * topIndex + 'px';
        //     })
        //     console.log(topIndex)
        // }
    },
    components: {
        Swiper,
        SwiperSlide,
        Prev,
        Next
    }
}
</script>

<style lang="stylus">
.honourlist_container {
    width: 100%;
    .honourlist_top_container {
        width: 100%;
        height: 11.2rem;
        background: #F7F8FA;
        .honourlist_top {
            box-sizing: border-box;
            margin: 0 auto;
            padding-top: 4.8rem;
            max-width: 114.2rem;
            height: 100%;
            .honourlist_title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
                text-align: center;
            }
        }
    }
    .honourlist_bottom_container {
        margin-top: 4rem;
        width: 100%;
        height: 63.4rem;
        .honourlist_bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            margin: 0 auto;
            padding: 3.2rem 0;
            max-width: 114.2rem;
            height: 100%;
            .disabled {
                cursor: not-allowed;
                color: #e9e9e9;
                background: #e9e9e9;
            }
            .swiper-button-prev{
                position: relative;
                top: 0;
                @media (max-width: 1200px) {
                    display: none;
                }
                &::after {
                    content: '';
                    display: none;
                }
            }
            .swiper-button-disabled {
                cursor: not-allowed;
            }
            .swiper_wrap {
                margin: 0 6rem;
                overflow: hidden;
                @media (max-width: 1200px) {
                    margin: 0 4.8rem;
                }
                @media (max-width: 1040px) {
                    width: 90rem;
                }
                @media (max-width: 400px) {
                    margin: 0 1.6rem;
                }
                .top_list {
                    box-sizing: border-box;
                    padding: 0 1.1rem;
                    width: 100%;
                    height: 28.6rem;
                    display: flex;
                    align-items: center;
                    @media (max-width: 1040px) {
                        width: 90rem;
                    }
                    .top_item {
                        margin-right: 3.2rem;
                        width: 20.1rem;
                        height: 28.6rem;
                        cursor: pointer;
                        &:last-child {
                            margin-right: 0;
                        }
                        img {
                            height: 100%;
                        }
                    }
                }
                .bottom_list {
                    display: flex;
                    align-items: center;
                    margin-top: 4rem;
                    height: 20rem;
                    @media (max-width: 1040px) {
                        width: 90rem;
                    }
                    .bottom_item {
                        margin-right: 2.4rem;
                        width: 29.5rem;
                        height: 20rem;
                        cursor: pointer;
                        &:last-child {
                            margin-right: 0;
                        }
                        img {
                            height: 100%;
                        }
                    }
                }
                
            }
            .swiper-button-next{
                position: relative;
                top: 0;
                @media (max-width: 1200px) {
                    display: none;
                }
                &::after {
                    content: '';
                    display: none;
                }
            }
        }
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.65);
        z-index: 999;
    }
}
</style>