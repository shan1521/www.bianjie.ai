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
                    <MoreBlue :text.sync="serviceContent.moreText"
                        class="title_btn"
                        @click.native="clickIritaFn"></MoreBlue>
                </div>
            </div>
        </div>

        <div class="product_content">
            <!-- 列表 -->
            <div class="product_name_list_wrap">
                <ul class="product_name_list">
                    <li class="name_item"
                        v-for="(item, index) in serviceContent.productContent"
                        :key="index"
                        @mouseover="showFn(index)">
                        <span class="irita_img">
                            <img :src="differentImg(item.icon)"></img>
                        </span>
                        <div>
                            <span class="name">{{ item.name }}</span>
                            <div class="intro">{{ item.intro }}</div>
                        </div>

                    </li>
                </ul>
            </div>

            <div class="product_content_list">
                <div class="list_container">
                    <div class="list"
                        v-for="(item, index) in serviceContent.productContent"
                        :key="index">
                        <div v-show="showList==index">
                            <div class="list_top">
                                <span>{{item.intro}}</span>
                                <span>-</span>
                                <span>{{item.name}}</span>
                            </div>
                            <div class="list_center">{{item.description}}</div>
                            <div class=list_footer>
                                <span class="left"></span>
                                <span class="right">
                                    <img :src="differentImg(item.imgName)"
                                        alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <HomeMask v-if="showMask"
            :showMask.sync="showMask"></HomeMask>
    </div>
</template>

<script>
import More from "@theme/components/Common/More.vue";
import MoreBlue from "@theme/components/Common/MoreBlue.vue";
import Prev from "@theme/components/Common/Prev.vue";
import Next from "@theme/components/Common/Next.vue";
import HomeMask from "@theme/components/Home/HomeMask.vue";
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
    name: "Product",
    props: ["serviceContent"],
    data() {
        const that = this;
        return {
            showList: 0,
            showMask: false,
            swiperOptions: {
                initialSlide: this.currentTab,
                navigation: {
                    prevEl: ".prev_btn",
                    nextEl: ".next_btn",
                },
                spaceBetween: 10,
                speed: 800,
                autoplayDisableOnInteraction: false,
                slideToClickedSlide: true,
                on: {
                    slideChange() {
                        that.$store.commit("currentTab", this.activeIndex);
                    },
                },
            },
        };
    },
    computed: {
        differentImg() {
            return function (imgName) {
                return `/home/products/${imgName}`;
            };
        },
        currentTab() {
            return +this.$store.state.currentTab;
        },
        productSwiper() {
            return this.$refs.productSwiper.$swiper;
        },
    },
    methods: {
        showFn(index) {
            // console.log("123");
            this.showList = index;
        },
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
            if (val === "next") {
                if (
                    this.currentTab <
                    this.serviceContent.productContent.length - 1
                ) {
                    this.$refs.swiperRef.next();
                    this.$refs.swiperRefSmall.next();
                }
            } else if (val === "prev") {
                if (this.currentTab > 0) {
                    this.$refs.swiperRef.prev();
                    this.$refs.swiperRefSmall.prev();
                }
            }
        },
    },
    mounted() {
        this.productSwiper.slideTo(this.currentTab, 0);
    },
    components: {
        More,
        MoreBlue,
        Prev,
        Next,
        HomeMask,
        Swiper,
        SwiperSlide,
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
            background: linear-gradient(to right, rgba(255, 255, 255, 0), #CCD5EF, rgba(255, 255, 255, 0));

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
        justify-content: center;
        display: flex;
        width: 100%;

        .product_name_list_wrap {
            @media (max-width: 768px) {
                overflow-x: auto;

                &::-webkit-scrollbar {
                    display: none;
                }
            }

            .product_name_list {
                flex-direction: column;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                max-width: $contentWidth;

                @media (max-width: 768px) {
                    width: 800px;
                }

                .name_item {
                    &:hover {
                        .intro{color: rgba(255, 255, 255, 0.75);}
                        .name {
                            color: #FFFFFF;
                        }

                        background: #0967E9;
                        box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.04);
                        border-radius: 2px;
                    }

                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    padding: 1.6rem 0;
                    width: 45.6rem;
                    height: 6, 8rem;
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
            }
        }

        .product_content_list {
            background: #FFFFFF;
            box-shadow: 0 0 1.8rem 0 rgba(0, 0, 0, 0.04);
            border-radius: 0.4rem;

            .list_container {
                width: 52.8rem;
                height: 33.8rem;
                background: linear-gradient(175deg, rgba(255, 255, 255, 0) 0%, #E9F1FD 100%);
                opacity: 0.79;

                .list {
                    display: flex;
                    justify-content: center;
                    align-content: center;

                    .list_top {
                        height: 1.6rem;
                        font-size: 1.6rem;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: rgba(0, 0, 0, 0.85);
                        line-height: 1.6rem;
                    }

                    .list_center {
                        width: 48rem;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: rgba(0, 0, 0, 0.85);
                        line-height: 2.4rem;
                    }

                    .right img {
                        width: 31.8rem;
                        height: 18.4rem;
                    }
                }
            }
        }
    }
}
</style>