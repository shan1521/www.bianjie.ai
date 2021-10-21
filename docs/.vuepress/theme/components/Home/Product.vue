<template>
    <div class="product_container">
        <div class="product_title_content">
            <div class="title_content">
                <div class="title">{{ serviceContent.title }}</div>
                <div class="irita_content">
                    <div class="irita_content_wrap">
                        <p class="irita_title">{{ serviceContent.iritaContent.title }}</p>
                        <p class="desc">{{ serviceContent.iritaContent.subTitle }}</p>
                    </div>
                    <MoreBlue
                        :text.sync="serviceContent.moreText"
                        class="title_btn"
                        @click.native="clickIritaFn"
                    ></MoreBlue>
                </div>
            </div>
        </div>
        <div class="product_content">
            <div class="product_name_list_wrap">
                <ul class="product_name_list">
                    <li class="name_item" 
                        v-for="(item, index) in serviceContent.productContent" :key="index"
                        :class="currentTab === index ? 'active' : ''"
                        @click="changeTab(index)"
                    >
                        <span class="irita_img">
                            <img :src="differentImg(item.icon)"></img>
                        </span>
                        <span class="name">{{ item.name }}</span>
                    </li>
                </ul>
            </div>
            
            <div class="product_content_list">
                <div class="list_container">
                    <div class="list">
                        <Prev class="prev_btn" :style="currentTab === 0 ? 'cursor: not-allowed' : ''" @click.native="currentTab > 0 ? arrowClick('prev')  : ''"></Prev>
                        <swiper class="product_list" :options="swiperOptions" ref="productSwiper">
                            <swiper-slide
                                class="item"
                                v-for="(
                                    item, index
                                ) in serviceContent.productContent"
                                :key="index"
                            >
                                <div class="left">
                                    <div class="name">{{ item.name }}</div>
                                    <div class="intro">{{ item.intro }}</div>
                                    <div class="desc">
                                        {{ item.description }}
                                    </div>
                                    <a class="name_btn_git" v-if="item.link && index === 0" :href="item.link" target="_blank" rel="noopener noreferrer">
                                        <span>{{item.moreText}}</span>
                                    </a>
                                    <router-link class="name_btn" v-if="item.route" :to="item.route">
                                        <More
                                            :text.sync="item.moreText"
                                        ></More>
                                    </router-link>
                                </div>
                                <div class="right">
                                    <img :src="differentImg(item.imgName)" alt="" />
                                </div>
                            </swiper-slide>
                        </swiper>
                        <Next class="next_btn" :style="currentTab === (serviceContent.productContent.length - 1) ? 'cursor: not-allowed' : ''" @click.native="currentTab < (serviceContent.productContent.length - 1) ? arrowClick('next')  : ''"></Next>
                    </div>
                </div>
            </div>
        </div>
        <div class="product_footer_content">
            <div class="footer_content">
                <div class="content">
                    <div class="title">{{ serviceContent.consult.title }}</div>
                    <div class="desc_content">
                        <span class="desc">{{
                            serviceContent.consult.description
                        }}</span>
                        <span class="chat_btn" @click="updateShowMask">
                            <span class="text">{{serviceContent.chatWithUs}}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <HomeMask v-if="showMask" :showMask.sync="showMask"></HomeMask>
    </div>
</template>

<script>
import More from "@theme/components/Common/More.vue";
import MoreBlue from "@theme/components/Common/MoreBlue.vue";
import Prev from "@theme/components/Common/Prev.vue";
import Next from "@theme/components/Common/Next.vue";
import HomeMask from '@theme/components/Home/HomeMask.vue';
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
    name: "Product",
    props: ["serviceContent"],
    data() {
        const that = this;
        return {
            showMask: false,
            swiperOptions: {
                initialSlide: this.currentTab,
                navigation: {
                    prevEl: ".prev_btn",
                    nextEl: ".next_btn",
                },
                spaceBetween: 10,
                speed: 800,
                autoplayDisableOnInteraction:false,
                slideToClickedSlide: true,
                on: {
                    slideChange() {
                        that.$store.commit('currentTab', this.activeIndex);
                    }
                }
            }
        };
    },
    computed: {
        differentImg(){
            return function(imgName){
                return `/home/products/${imgName}`;
            }
        },
        currentTab() {
            return +this.$store.state.currentTab;
        },
        productSwiper() {
            return this.$refs.productSwiper.$swiper;
        }
    },
    methods: {
        clickIritaFn() {
            window.open("https://irita.bianjie.ai/");
        },
        changeTab(index) {
            this.$store.commit("currentTab", index);
            this.productSwiper.slideTo(index, 800);
        },
        updateShowMask() {
            this.showMask = true;
        },
        arrowClick(val) {
            if(val === "next") {
                if(this.currentTab < this.serviceContent.productContent.length - 1) {
                    this.$refs.swiperRef.next();
                    this.$refs.swiperRefSmall.next();
                }
            } else if(val === "prev") {
                if(this.currentTab > 0) {
                    this.$refs.swiperRef.prev();
                    this.$refs.swiperRefSmall.prev();
                }
            }
        }
    },
    mounted() {
        this.productSwiper.slideTo(this.currentTab,0);
    },
    components: {
        More,
        MoreBlue,
        Prev,
        Next,
        HomeMask,
        Swiper, 
        SwiperSlide
    },
};
</script>

<style lang="stylus">
.product_container {
    width: 100%;

    .product_title_content {
        box-sizing: border-box;
        padding: 8rem 0 0;
        margin: 0 auto;
        max-width: $contentWidth;
        @media (max-width: 768px) {
            padding: 6rem 0 0;
        }
        @media (max-width: 375px) {
            padding: 4rem 0 0;
        }

        &::after {
            content: '';
            display: block;
            margin-top: 3.2rem;
            width: 100%;
            height: 0.2rem;
            background: linear-gradient(to right, rgba(255, 255, 255, 0),#CCD5EF, rgba(255, 255, 255, 0));
            @media (max-width: 768px) {
                margin-top: 2.4rem;
            }
            @media (max-width: 375px) {
                margin-top: 1.6rem;
            }
        }

        .title_content {
            margin: 0 auto;
            max-width: 105.6rem;
            @media (max-width: 1200px) {
                box-sizing: border-box;
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 375px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }

            .title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
                @media (max-width: 375px) {
                    font-size: $fontSize16;
                    font-weight: $fontWeight600;
                    line-height: 1.6rem;
                }

                &::after {
                    content: '';
                    display: block;
                    margin-top: 2.4rem;
                    width: 8rem;
                    height: 0.4rem;
                    background: #0967E9;
                    @media (max-width: 375px) {
                        margin-top: 1.6rem;
                    }
                }
            }

            .irita_content {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                margin-top: 6rem;
                @media (max-width: 920px) {
                    flex-direction: column;
                    align-items: center;
                    margin-top: 4.8rem;
                    text-align: center;
                }
                .irita_content_wrap {
                    .irita_title {
                        font-size: $fontSize24;
                        font-weight: $fontWeight500;
                        color: #000;
                        line-height: 2.6rem;
                        @media (max-width: 920px) {
                            text-align: center;
                        }
                    }
                    .desc {
                        margin-top: 1.6rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, 0.75);
                        line-height: 1.4rem;
                        @media (max-width: 920px) {
                            line-height: 2.4rem;
                        }
                    }
                }

                .title_btn {
                    @media (max-width: 920px) {
                        margin-top: 1.6rem;
                    }
                }
            }
        }
    }

    .product_content {
        width: 100%;

        .product_name_list_wrap {
            @media (max-width: 768px) {
                overflow-x: auto;
                &::-webkit-scrollbar {
                    display: none;
                }
            }
            .product_name_list {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                max-width: $contentWidth;
                @media (max-width: 768px) {
                    width: 800px;
                }

                .name_item {
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 1.6rem 0;
                    width: 24rem;
                    height: 100%;
                    cursor: pointer;

                    .irita_img {
                        display: inline-block;
                        width: 3.6rem;
                        height: 3.6rem;
                        img {
                            width: 100%;
                        }
                    }

                    .name {
                        margin-left: 1.2rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        color: #000;
                        line-height: 1.6rem;
                    }

                    .activeName {
                        color: #0967E9;
                    }
                }

                .active {
                    position: relative;
                    &::after {
                        position: absolute;
                        bottom: 0;
                        content: '';
                        display: block;
                        width: 100%;
                        height: 0.3rem;
                        background: #0967E9;
                        border-radius: 0.4rem;
                    }
                }
            }
        }

        .product_content_list {
            width: 100%;
            background: url('../../assets/home/cpyfw_bg.png') no-repeat center / cover;

            .list_container {
                box-sizing: border-box;
                margin: 0 auto;
                padding: 4.8rem 0 4.2rem;
                max-width: $contentWidth;
                height: 100%;

                .list {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0 auto;
                    max-width: 116.8rem;
                    @media (max-width: 1200px) {
                        justify-content: center;
                    }
                    .prev_btn {
                        @media (max-width: 768px) {
                            display: none;
                        }
                    }

                    .product_list {
                        flex: 1 0;
                        margin: 0 4.8rem;
                        @media (max-width: 375px) {
                            margin: 0 2.4rem;
                        }
                        
                        .swiper-wrapper {
                            align-items: center;
                        }

                        .item {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            width: 100%;
                            @media (max-width: 710px) {
                                justify-content: center;
                            }

                            .left {
                                display: flex;
                                flex-direction: column;
                                @media (max-width: 710px) {
                                    justify-content: center;
                                    align-items: center;
                                }
                                .name {
                                    font-size: $fontSize16;
                                    font-weight: $fontWeight600;
                                    color: #fff;
                                    line-height: 1.6rem;
                                    @media (max-width: 710px) {
                                        text-align: center;
                                    }

                                    &::before {
                                        content: '';
                                        display: block;
                                        margin-bottom: 3.2rem;
                                        width: 8rem;
                                        height: 0.4rem;
                                        background: #0967E9;
                                    }
                                }

                                .intro {
                                    margin-top: 1.2rem;
                                    font-size: $fontSize16;
                                    font-weight: $fontWeight600;
                                    color: #fff;
                                    line-height: 1.6rem;
                                    letter-spacing: 0.1rem;
                                }

                                .desc {
                                    margin-top: 2.4rem;
                                    width: 27.2rem;
                                    font-size: $fontSize14;
                                    font-weight: $fontWeight400;
                                    color: rgba(255, 255, 255, 0.75);
                                    line-height: 2.4rem;
                                }

                                .name_btn_git {
                                    box-sizing: border-box;
                                    display: flex;
                                    align-items: center;
                                    margin-top: 4.8rem;
                                    padding-left: 1.6rem;
                                    width: 16.5rem;
                                    height: 3.2rem;
                                    font-size: $fontSize14;
                                    font-weight: $fontWeight400;
                                    color: #fff;
                                    line-height: 1.4rem;
                                    background: url(../../assets/home/long_without_outline.png) no-repeat center / cover;
                                    border-radius: 0.4rem;
                                }

                                .name_btn {
                                    display: block;
                                    margin-top: 4.8rem;
                                }
                            }

                            .right {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin-left: 3.2rem;
                                max-width: 67.2rem;
                                height: 44.2rem;
                                @media (max-width: 710px) {
                                    display: none;
                                }

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
    }

    .product_footer_content {
        width: 100%;
        background: url('../../assets/home/zxyjsfw_bg.png') no-repeat center / cover;

        .footer_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 3.2rem 0;
            max-width: $contentWidth;
            height: 100%;
            @media (max-width: 1152px) {
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 375px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }

            .content {
                margin: 0 auto;
                max-width: 105.6rem;
                height: 100%;

                .title {
                    font-size: $fontSize20;
                    font-weight: $fontWeight500;
                    color: #fff;
                    line-height: 2rem;
                    @media (max-width: 600px) {
                        text-align: center;
                    }
                    @media (max-width: 375px) {
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                    }
                }

                .desc_content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 1.6rem;
                    @media (max-width: 600px) {
                        flex-direction: column;
                        justify-content: flex-start;
                    }

                    .desc {
                        max-width: 37.2rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(255, 255, 255, 0.85);
                        line-height: 2.6rem;
                    }

                    .chat_btn {
                        display: inline-block;
                        margin-top: 3.6rem;
                        display: flex;
                        align-items: center;
                        width: 12.4rem;
                        height: 3.2rem;
                        background: url(../../assets/home/white_outline_icon.png) no-repeat center / cover;
                        border-radius: 0.2rem;
                        .text {
                            margin-left: 2rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: #fff;
                            line-height: 1.4rem;
                        }
                        @media (max-width: 600px) {
                            margin-top: 1.6rem;
                        }
                    }
                }
            }
        }
    }
}
</style>