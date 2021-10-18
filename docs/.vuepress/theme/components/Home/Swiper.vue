<template>
    <div class="swiper_container" ref="mySwiper">
        <swiper :options="swiperOption" v-if="homeContent">
            <swiper-slide v-for="(item,index) in homeContent" :key="index">
                <swiper-home :content="homeContent[index]" :currentSwiper="currentSwiper"></swiper-home>
            </swiper-slide>
            <div
                class="swiper-pagination swiper-pagination-bullets"
                slot="pagination"
            ></div>
        </swiper>
        <div class="btn_wrap">
            <div class="swiper-button-prev">
                <div class="prev_btn">
                    <i class="iconfont icon-jiantou_left"></i>
                </div>
            </div>
            <div class="swiper-button-next">
                <div class="next_btn">
                    <i class="iconfont icon-jiantou"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import SwiperHome from "./SwiperHome.vue";
export default {
    name: "Swiper",
    props: {
        homeContent: {
            type: Array,
        },
    },
    data() {
        return {
            swiperOption: {
                navigation: {
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet(index, className) {
                        return `<span style="width: 48px; height: 4px; background: rgba(255, 255, 255, 1); border-radius: 3px; outline: none;" class="${className} swiper-pagination-bullet-custom"></span>`;
                    },
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                loop: true,
                speed: 1500
            },
            currentSwiper: 0
        };
    },
    components: {
        'swiper': Swiper,
        'swiper-slide': SwiperSlide,
        'swiper-home': SwiperHome
    }
};
</script>

<style lang="stylus">
.swiper_container{
    position: relative;
    width: 100%;
    height: 52.8rem;
    @media (max-width: 968px) {
        height: 42rem;
    }
    @media (max-width: 400px) {
        height: 28rem;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-wrapper {
            height: 100%;

            .swiper-slide {
                position: relative;
                width: 100%;
                height: 100%;
            }
        }

        .swiper-pagination-bullets {
            bottom: 4.8rem;
        }
    }
    .btn_wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0 auto;
        max-width: $contentWidth;
        height: 4.8rem;
        @media (max-width: 968px) {
            display: none;
        }
        .swiper-button-prev {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: -56rem;
            width: 4.8rem;
            height: 4.8rem;
            background: rgba(255,255,255,.09);
            border-radius: 50%;
            box-shadow: 0 0 1.2rem 0 rgba(0, 0, 0, 0.12);
            &::after {
                display: none;
            }
            @media (max-width: 1168px) {
                margin-left: -48rem;
            }
            @media (max-width: 992px) {
                margin-left: -45rem;
            }
            @media (max-width: 915px) {
                display: none;
            }
            .prev_btn {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 4rem;
                height: 4rem;
                border: 0.1rem solid #fff;
                border-radius: 50%;
                .icon-jiantou_left {
                    display: block;
                    width: 1.2rem;
                    height: 1.4rem;
                    font-size: 1.2rem;
                    color: #fff;
                }
            }
        }
        .swiper-button-next {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: -56rem;
            width: 4.8rem;
            height: 4.8rem;
            background: rgba(255,255,255,.09);
            border-radius: 50%;
            box-shadow: 0 0 1.2rem 0 rgba(0, 0, 0, 0.12);
            &::after {
                display: none;
            }
            @media (max-width: 1168px) {
                margin-right: -48rem;
            }
            @media (max-width: 992px) {
                margin-right: -45rem;
            }
            @media (max-width: 915px) {
                display: none;
            }
            .next_btn {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 4rem;
                height: 4rem;
                border: 0.1rem solid #FFFFFF;
                border-radius: 50%;
                .icon-jiantou {
                    display: block;
                    width: 1.2rem;
                    height: 1.4rem;
                    font-size: 1.2rem;
                    color: #fff;
                }
            }
        }
    }
}
</style>