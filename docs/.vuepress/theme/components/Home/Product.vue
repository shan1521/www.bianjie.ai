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
            <div class="product_content">
                <ul class="product_name_list">
                    <li class="name_item" 
                        v-for="(item, index) in serviceContent.productContent"
                        :key="index"
                        :class="isShowWhiteIcon && index === currentTab ? 'name_item_active' : ''"
                        @click="changeTab(index)"
                    >
                        <!-- @mouseover="showFn(index)" -->
                        <div class="item_img">
                            <img v-if="index !== currentTab" :src="differentImg(item.icon)"></img>
                            <i v-if="isShowWhiteIcon && index === currentTab" class="iconfont" :class="item.iconClass"></i>
                        </div>
                        <div class="item_desc">
                            <span class="name">{{ item.name }}</span>
                            <div class="intro">{{ item.intro }}</div>
                        </div>
                    </li>
                </ul>
                <ul class="product_detail_list">
                    <li v-if="index === currentTab" class="detail_item" v-for="(item, index) in serviceContent.productContent" :key="index">
                        <div class="detail_item_wrap" :style="differentProductBg(item.imgName)">
                            <div class="title">{{item.intro}} - {{item.name}}</div>
                            <p class="description">{{item.description}}</p>
                            <a class="name_btn_git" v-if="item.link && index === 0" :href="item.link" target="_blank" rel="noopener noreferrer">
                                {{item.moreText}}
                            </a>
                            <router-link class="name_btn" v-if="item.route" :to="item.route">
                                <span>{{item.moreText}}</span>
                                <span class="gt">&gt;&gt;</span>
                            </router-link>
                        </div>
                    </li>
                </ul>

                <!-- <div class="product_content_list">
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
                </div> -->
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
        return {
            showMask: false,
            currentTab: 1,
            isShowWhiteIcon: true,
            clientWidth: +document.body.clientWidth
        };
    },
    computed: {
        differentImg() {
            return function (imgName) {
                return `/home/products/${imgName}`;
            };
        },
        differentProductBg() {
            if(this.clientWidth > 475) {
                return function(productBg) {
                    return `background: url(/home/products/${productBg}) no-repeat center / cover;`
                }
            } else if(this.clientWidth <= 475) {
                return function() {
                    return 'background: url(/home/products/product_banner.png) no-repeat center / cover;'
                }
            }
        }
    },
    methods: {
        clickIritaFn() {
            window.open("https://irita.bianjie.ai/");
        },
        changeTab(index) {
            if(index === this.currentTab) {
                this.isShowWhiteIcon = true;
            }
            this.currentTab = index;
        },
        updateShowMask() {
            this.showMask = true;
        },
    },
    mounted(){
        window.onresize = () => {
            return this.clientWidth = +document.body.clientWidth;
        }
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

<style lang="stylus" scoped>
.product_container {
    background: url('../../assets/home/hxnlyys_bg.png') no-repeat center / cover;
    margin: 0 auto;
    width: 100%;

    .product_title_content {
        box-sizing: border-box;
        padding: 8rem 4.8rem;
        margin: 0 auto;
        max-width: $contentWidth;

        @media (max-width: 768px) {
            padding: 6rem 4.8rem;
        }
        @media (max-width: 400px) {
            padding: 4rem 1.6rem;
        }

        .title_content {
            margin: 0 auto;
            max-width: 105.6rem;

            .title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;

                @media (max-width: 400px) {
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
                    background: $highlightDetailColor;

                    @media (max-width: 400px) {
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
        .product_content {
            display: flex;
            align-items: center;
            margin: 4.8rem auto 0;
            max-width: 105.6rem;
            @media (max-width: 995px) {
                max-width: 68.4rem;
            }
            .product_name_list {
                margin: 0 auto;
                width: 45.6rem;
                @media (max-width: 995px) {
                    width: 7.6rem;
                }
                @media (max-width: 560px) {
                    width: 4.8rem;
                }
                .name_item {
                    display: flex;
                    align-items: center;
                    box-sizing: border-box;
                    margin-top: 0.8rem;
                    padding: 1.5rem 2rem;
                    background: #fff;
                    box-shadow: 0 0 1.2rem 0.2rem 0 rgba(7, 24, 78, 0.08);
                    border-radius: 0.2rem;
                    cursor: pointer;
                    @media (max-width: 995px) {
                        max-width: 7.6rem;
                    }
                    @media (max-width: 560px) {
                        padding: 1rem 1.2rem;
                        max-width: 4.8rem;
                    }
                    &:first-child {
                        margin-top: 0;
                    }
                    .item_img {
                        margin-right: 1.6rem;
                        height: 3.6rem;
                        @media (max-width: 995px) {
                            margin-right: 0;
                        }
                        @media (max-width: 560px) {
                            height: 2.7rem;
                        }
                        img {
                            height: 100%;
                            vertical-align: middle;
                        }
                    }
                    .item_desc {
                        @media (max-width: 995px) {
                            display: none;
                        }
                        .name {
                            font-size: 16px !important;
                            font-weight: 600;
                            color: #000000;
                            line-height: 16px;
                        }
                        .intro {
                            margin-top: 0.8rem;
                            font-size: 14px;
                            font-weight: 400;
                            color: rgba(0, 0, 0, 0.75);
                            line-height: 14px;
                        }
                    }
                }
                .name_item_active {
                    background: $highlightDetailColor;
                    .iconfont {
                        display: inline-block;
                        font-size: $fontSize36;
                        color: #fff;
                        @media (max-width: 560px) {
                            font-size: 27px;
                        }
                    }
                    .item_desc {
                        .name {
                            color: #fff;
                        }
                        .intro {
                            color: #fff;
                        }
                    }
                }
            }
            .product_detail_list {
                margin-left: 2.4rem;
                max-width: 58.4rem;
                @media (max-width: 560px) {
                    margin-left: 0.8rem;
                }
                .detail_item {
                    box-sizing: border-box;
                    padding: 0.8rem;
                    background: #fff;
                    box-shadow: 0 0 1.8rem 0 rgba(0, 0, 0, 0.04);
                    border-radius: 0.4rem;
                    .detail_item_wrap {
                        box-sizing: border-box;
                        padding: 3.2rem;
                        min-height: 35.6rem;
                        @media (max-width: 768px) {
                            padding: 3.2rem 2.4rem;
                        }
                        @media (max-width: 560px) {
                            padding: 1.2rem 0.8rem;
                            min-height: 28.8rem;
                        }
                        .title {
                            font-size: $fontSize16;
                            font-weight: 600;
                            color: rgba(0, 0, 0, 0.85);
                            line-height: 2.4rem;
                        }
                        .description {
                            margin-top: 1.6rem;
                            font-size: $fontSize14;
                            font-weight: 400;
                            color: rgba(0, 0, 0, 0.85);
                            line-height: 2.4rem;
                        }
                        .name_btn_git {
                            display: block;
                            margin-top: 4rem;
                            font-size: 14px;
                            font-weight: 600;
                            color: #0967E9;
                            line-height: 14px;
                            @media (max-width: 570px) {
                                margin-top: 2.4rem;
                            }
                        }
                        .name_btn {
                            display: flex;
                            align-items: center;
                            margin-top: 4rem;
                            font-size: $fontSize14;
                            font-weight: 600;
                            color: #0967E9;
                            line-height: 1.4rem;
                            @media (max-width: 570px) {
                                margin-top: 2.4rem;
                            }
                            .gt {
                                display: inline-block;
                                margin-left: 0.4rem;
                            }
                        }
                    }
                }
            }
        }
    }

    // .product_content {
    //     margin-top: 4.8rem;
    //     // display: flex;
    //     // justify-content: center;
    //     width: 100%;

    //     .product_name_list_wrap {
    //         margin-right: 1.6rem;

    //         @media (max-width: 768px) {
    //             overflow-x: auto;

    //             &::-webkit-scrollbar {
    //                 display: none;
    //             }
    //         }

    //         .product_name_list {
    //             flex-direction: column;
    //             display: flex;
    //             justify-content: center;
    //             align-items: center;
    //             margin: 0 auto;
    //             max-width: $contentWidth;

    //             @media (max-width: 768px) {
    //                 width: 800px;
    //             }

    //             .name_item {
    //                 margin-bottom: 0.8rem;
    //                 background: #FFFFFF;

    //                 &:hover {
    //                     .intro {
    //                         color: rgba(255, 255, 255, 0.75);
    //                     }

    //                     .name {
    //                         color: #FFFFFF;
    //                     }

    //                     background: $highlightDetailColor;
    //                     box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.04);
    //                     border-radius: 2px;
    //                 }

    //                 box-sizing: border-box;
    //                 display: flex;
    //                 align-items: center;
    //                 padding: 1.6rem 0;
    //                 width: 45.6rem;
    //                 cursor: pointer;

    //                 .irita_img {
    //                     width: 3.6rem;
    //                     height: 3.6rem;

    //                     img {
    //                         width: 100%;
    //                     }
    //                 }

    //                 .intro {
    //                     margin-left: 1.6rem;
    //                     margin-top: 0.8rem;
    //                     font-size: 1.4rem;
    //                     font-family: PingFangSC-Regular, PingFang SC;
    //                     font-weight: 400;
    //                     color: rgba(0, 0, 0, 0.75);
    //                     line-height: 1.4rem;
    //                 }

    //                 .name {
    //                     margin-left: 1.6rem;
    //                     font-size: $fontSize16;
    //                     font-weight: $fontWeight600;
    //                     color: #000;
    //                     line-height: 1.6rem;
    //                 }

    //                 .activeName {
    //                     color: $highlightDetailColor;
    //                 }
    //             }
    //         }
    //     }

    //     .product_content_list {
    //         // background: #FFFFFF;
    //         box-shadow: 0 0 1.8rem 0 rgba(0, 0, 0, 0.04);
    //         background: linear-gradient(175deg, rgba(255, 255, 255, 0) 0%, #E9F1FD 100%);
    //         border-radius: 0.4rem;

    //         .list_container {
    //             width: 58.4rem;
    //             height: 37.2rem;
    //             opacity: 0.79;

    //             .list {
    //                 display: flex;
    //                 justify-content: center;
    //                 align-content: center;

    //                 .list_top {
    //                     margin-top: 4rem;
    //                     height: 1.6rem;
    //                     font-size: 1.6rem;
    //                     font-family: PingFangSC-Semibold, PingFang SC;
    //                     font-weight: 600;
    //                     color: rgba(0, 0, 0, 0.85);
    //                     line-height: 1.6rem;
    //                 }

    //                 .list_center {
    //                     margin-top: 1.6rem;
    //                     width: 48rem;
    //                     font-size: 14px;
    //                     font-family: PingFangSC-Regular, PingFang SC;
    //                     font-weight: 400;
    //                     color: rgba(0, 0, 0, 0.85);
    //                     line-height: 2.4rem;
    //                 }

    //                 .right img {
    //                     width: 31.8rem;
    //                     height: 18.4rem;
    //                 }
    //             }
    //         }
    //     }
    // }
}
</style>