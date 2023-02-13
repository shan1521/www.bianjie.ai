<template>
    <Caption class="product" :title="serviceContent.title">
        <div v-if="serviceContent.iritaContent" class="irita_content">
            <div class="irita_content_wrap">
                <p class="irita_title">{{ serviceContent.iritaContent.title }}</p>
                <p class="desc">{{ serviceContent.iritaContent.subTitle }}</p>
            </div>
            <MoreBlue :text.sync="serviceContent.moreText"
                class="title_btn"
                @click.native="clickIritaFn"></MoreBlue>
        </div>
        <div class="product_content">
            <ul class="product_name_list">
                <li class="name_item"
                    v-for="(item, index) in serviceContent.productContent"
                    :key="index"
                    :class="{ 
                        name_item_en: isEn,
                        name_item_active: isShowWhiteIcon && index === currentTab
                    }"
                    @click="changeTab(index)">
                    <div class="item_img">
                        <SvgIcon v-if="index !== currentTab" class="svg_icon" :iconName="item.iconClassColor" />
                        <i v-if="isShowWhiteIcon && index === currentTab"
                            class="iconfont"
                            :class="item.iconClass"></i>
                    </div>
                    <div class="item_desc">
                        <span class="name">{{ item.name }}</span>
                        <div class="intro">{{ item.intro }}</div>
                    </div>
                </li>
            </ul>
            <ul class="product_detail_list">
                <li v-show="index === currentTab"
                    class="detail_item"
                    v-for="(item, index) in serviceContent.productContent"
                    :key="index">
                    <div class="detail_item_wrap"
                        :class="{detail_item_wrap_en: isEn}"
                        :style="differentProductBg(item.imgName)">
                        <div class="title">{{item.intro}} - {{item.name}}</div>
                        <p class="description">{{item.description}}</p>
                        <a class="name_btn_git"
                            v-if="item.link && index === 0"
                            :href="item.link"
                            target="_blank"
                            rel="noopener noreferrer">
                            {{item.moreText}}
                        </a>
                        <router-link class="name_btn"
                            v-if="item.route"
                            :to="item.route">
                            <span>{{item.moreText}}</span>
                            <span class="gt">&gt;&gt;</span>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </Caption>
</template>

<script>
import More from "@theme/components/Common/More.vue";
import MoreBlue from "@theme/components/Common/MoreBlue.vue";
import Prev from "@theme/components/Common/Prev.vue";
import Next from "@theme/components/Common/Next.vue";
import SvgIcon from "@theme/components/Common/SvgIcon.vue";
import Caption from "@theme/components/Common/Caption.vue";
import HomeMask from "@theme/components/Home/HomeMask.vue";
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { LANG_OPTIONS } from '@theme/constants';
export default {
    name: "Product",
    props: ["serviceContent"],
    data() {
        return {
            currentTab: 1,
            isShowWhiteIcon: true,
            clientWidth: +document.body.clientWidth,
            currentLang: this.$store.state.currentLang
        };
    },
    computed: {
        differentProductBg() {
            if (this.clientWidth > 475) {
                return function (productBg) {
                    return `background: url(/home/products/${productBg}) no-repeat center / cover;`;
                };
            } else if (this.clientWidth <= 475) {
                return function () {
                    return "background: url(/home/products/product_banner.png) no-repeat center / cover;";
                };
            }
        },
        isEn() {
            return this.currentLang === LANG_OPTIONS[0].value;
        }
    },
    methods: {
        clickIritaFn() {
            window.open("https://irita.bianjie.ai/");
        },
        changeTab(index) {
            if (index === this.currentTab) {
                this.isShowWhiteIcon = true;
            }
            this.currentTab = index;
        }
    },
    mounted() {
        window.onresize = () => {
            return (this.clientWidth = +document.body.clientWidth);
        };
    },
    components: {
        More,
        MoreBlue,
        Prev,
        Next,
        HomeMask,
        Swiper,
        SwiperSlide,
        SvgIcon,
        Caption
    },
};
</script>

<style lang="stylus" scoped>
.product {
    background: url('../../assets/home/hxnlyys_bg.png') no-repeat center / cover;
    .irita_content {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin: 6rem auto 0;
        padding: 0 4.8rem;
        max-width: 105.6rem;

        @media (max-width: 920px) {
            flex-direction: column;
            align-items: center;
            margin-top: 4.8rem;
        }

        @media (max-width: 768px) {
            padding: 0 3.2rem;
        }

        @media (max-width: 420px) {
            padding: 0 1.6rem;
        }

        .irita_content_wrap {
            @media (max-width: 920px) {
                text-align: center;
            }
            .irita_title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.6rem;

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
    .product_content {
        display: flex;
        align-items: center;
        margin: 4.8rem auto 0;
        padding: 0 4.8rem;
        max-width: 105.6rem;

        @media (max-width: 1022px) {
            max-width: 68.4rem;
        }

        @media (max-width: 768px) {
            padding: 0 3.2rem;
        }

        @media (max-width: 420px) {
            padding: 0 1.6rem;
        }

        .product_name_list {
            margin: 0 auto;
            width: 45.6rem;

            @media (max-width: 1022px) {
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
                box-shadow: 0px 0px 12px 0px rgba(7, 24, 78, 0.08);
                border-radius: 0.2rem;
                cursor: pointer;

                @media (max-width: 1022px) {
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

                    @media (max-width: 1022px) {
                        margin-right: 0;
                    }

                    @media (max-width: 560px) {
                        height: 2.7rem;
                    }

                    img {
                        height: 100%;
                        vertical-align: middle;
                    }
                    .svg_icon {
                        @media (max-width: 560px) {
                            width: 2.7rem;
                            height: 2.7rem;
                        }
                    }
                }

                .item_desc {
                    text-align: left;
                    @media (max-width: 1022px) {
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
                        line-height: 20px;
                    }
                }
            }
            .name_item_en {
                min-height: 99px;

                @media (max-width: 1022px) {
                    min-height: 76px;
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
                    min-height: 41rem;
                    text-align: left;

                    @media (max-width: 1022px) {
                        min-height: 34.2rem;
                    }

                    @media (max-width: 768px) {
                        padding: 3.2rem 2.4rem;
                    }

                    @media (max-width: 560px) {
                        padding: 1.2rem 0.8rem;
                        min-height: 25.1rem;
                    }

                    .title {
                        align-items: flex-start;
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
                .detail_item_wrap_en {
                    min-height: 51rem;

                    @media (max-width: 1082px) {
                        min-height: 57rem;
                    }

                    @media (max-width: 1022px) {
                        min-height: 40rem;
                    }
                }
            }
        }
    }
}
</style>