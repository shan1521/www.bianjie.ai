<template>
    <div class="industryadv_container">
        <div class="industryadv_content">
            <div class="title">
                {{ industryAdvantage.title }}
            </div>
            <div class="industryadv_swiper_container">
                <Prev class="prev_btn" @click.native="arrowClick('prev')"></Prev>
                <el-carousel
                    :interval="3000"
                    type="card"
                    v-if="industryAdvantage.industryAdvImg"
                    class="industry_swiper"
                    arrow="never"
                    ref="swiperRef"
                    :autoplay="false"
                    height="560"
                >
                    <el-carousel-item
                        v-for="( item, index ) in industryAdvantage.industryAdvImg"
                        :key="index"
                    >
                        <img :src="item.src" alt="" />
                    </el-carousel-item>
                </el-carousel>
                <Next class="next_btn" @click.native="arrowClick('next')"></Next>
            </div>
            <div class="industryadv_swiper_container_small">
                <Prev class="prev_btn"></Prev>
                <swiper class="swiper" :options="swiperOpts">
                    <swiper-slide
                        class="swiper_item"
                        v-if="industryAdvantage.industryAdvImg"
                        v-for="( item, index ) in industryAdvantage.industryAdvImg"
                        :key="index"
                    >
                        <img :src="item.src" alt="" />
                    </swiper-slide>
                </swiper>
                <Next class="next_btn"></Next>
            </div>
            <div v-if="industryAdvantage.industryVideo" class="industry_video">
            </div>
        </div>
    </div>
</template>

<script>
import Prev from "@theme/components/Common/Prev";
import Next from "@theme/components/Common/Next";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
    name: "IndustryAdv",
    props: ["industryAdvantage"],
    data() {
        return {
            swiperOpts: {
                navigation: {
                    prevEl: ".prev_btn",
                    nextEl: ".next_btn",
                },
                loop: true,
                speed: 1500,
                spaceBetween: 10
            }
        }
    },
    methods: {
        arrowClick(val) {
            if(val == 'next') {
                this.$refs.swiperRef.next();
                this.$refs.swiperRefSmall.next();
            } else {
                this.$refs.swiperRef.prev();
                this.$refs.swiperRefSmall.prev();
            }
        }
    },
    components: {
        Prev,
        Next,
        Swiper,
        SwiperSlide
    },
};
</script>

<style lang="stylus">
.industryadv_container {
    width: 100%;
    background: url('../../assets/about/global_banner.png') no-repeat center / cover;

    .industryadv_content {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 8rem 0 12rem;
        max-width: 155.2rem;
        height: 100%;

        .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: $fontSize32;
            font-weight: $fontWeight500;
            color: #000;
            line-height: 3.2rem;
            text-align: center;
            @media (max-width: 768px) {
                font-size: $fontSize24;
            }
            @media (max-width: 375px) {
                font-size: $fontSize20;
            }

            &::after {
                content: '';
                display: block;
                margin-top: 2.4rem;
                width: 16rem;
                height: 0.4rem;
                background: $highlightDetailColor;
            }
        }

        .industryadv_swiper_container {
            position: relative;
            left: 50%;
            transform: translate(-50%);
            display: flex;
            align-items: center;
            margin-top: 4.8rem;
            max-width: 155.2rem;
            @media (max-width: 1080px) {
                display: none;
            }
            
            .prev_btn {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                margin-left: -32rem;
                z-index: 9999;
                outline: none;
                @media (max-width: 720px) {
                    margin-left: -28rem;
                    width: 3.4rem;
                    height: 3.4rem;
                    .prev_content {
                        width: 3rem;
                        height: 3rem;
                    }
                }
                @media (max-width: 620px) {
                    margin-left: -24rem;
                }
                @media (max-width: 520px) {
                    margin-left: -22rem;
                    width: 2.4rem;
                    height: 2.4rem;
                    .prev_content {
                        width: 2rem;
                        height: 2rem;
                        .prev {
                            .iconfont {
                                font-size: $fontSize12;
                            }
                        }
                    }
                }
                @media (max-width: 470px) {
                    margin-left: -18rem;
                }
                @media (max-width: 400px) {
                    margin-left: -16rem;
                }
                @media (max-width: 320px) {
                    margin-left: -14.5rem;
                }
            }
            .industry_swiper {
                margin: 0 4rem;
                width: 100%;
                text-align: center;
                @media (max-width: 1080px) {
                    display: none;
                }
                .el-carousel__container {
                    .el-carousel__item {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        max-width: 84rem;
                        height: 100%;
                        img {
                            height: 100%;
                        }
                    }
                    .el-carousel__indicators {
                        display: none;
                    }
                }

            }
            .el-carousel__indicators {
                display: none;
            }
            .next_btn {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                margin-left: 32rem;
                z-index: 9999;
                outline: none;
                @media (max-width: 720px) {
                    margin-left: 28rem;
                    width: 3.4rem;
                    height: 3.4rem;
                    .next_content {
                        width: 3rem;
                        height: 3rem;
                    }
                }
                @media (max-width: 620px) {
                    margin-left: 24rem;
                }
                @media (max-width: 520px) {
                    margin-left: 22rem;
                    width: 2.4rem;
                    height: 2.4rem;
                    .next_content {
                        width: 2rem;
                        height: 2rem;
                        .next {
                            .iconfont {
                                font-size: $fontSize12;
                            }
                        }
                    }
                }
                @media (max-width: 470px) {
                    margin-left: 18rem;
                }
                @media (max-width: 400px) {
                    margin-left: 16rem;
                }
                @media (max-width: 320px) {
                    margin-left: 14.5rem;
                }
            }
        }
        .industryadv_swiper_container_small {
            display: none;
            @media (max-width: 1080px) {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 4.8rem auto 0;
                max-width: 75.2rem;
            }
            .prev_btn {
                @media (max-width: 768px) {
                    display: none;
                }
            }
            .swiper {
                @media (max-width: 1080px) {
                    margin-left: 4.8rem;
                    margin-right: 4.8rem;
                    max-width: 56rem;
                    max-height: 33.6rem;
                }
                @media (max-width: 400px) {
                    margin-left: 1.6rem;
                    margin-right: 1.6rem;
                }
                .swiper-wrapper {
                    .swiper_item {
                        img {
                            width: 100%;
                        }
                    }
                }
            }
            .next_btn {
                @media (max-width: 768px) {
                    display: none;
                }
            }
        }
    }
}
</style>