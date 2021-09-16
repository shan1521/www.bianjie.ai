<template>
    <div class="product_container">
        <div class="product_title_content">
            <div class="title_content">
                <div class="title">{{ serviceContent.title }}</div>
                <div class="irita_content">
                    <div class="irita_title">
                        {{ serviceContent.iritaContent.title }}
                    </div>
                    <div class="desc_content">
                        <div class="desc">
                            {{ serviceContent.iritaContent.subTitle }}
                        </div>
                        <More
                            :text.sync="serviceContent.moreText"
                            class="title_btn"
                            @click.native="clickIritaFn"
                        ></More>
                    </div>
                </div>
            </div>
        </div>
        <div class="product_content">
            <ul class="product_name_list">
                <li
                    class="name_item"
                    v-for="(item, index) in serviceContent.productContent"
                    :key="index"
                    :class="currentTab === index ? 'active' : ''"
                    @click="changeTab(index)"
                >
                    <span class="irita_img">
                        <img :src="differentImg(item.icon)"></img>
                    </span>
                    <span
                        class="name"
                        :class="currentTab === index ? 'activeName' : ''"
                        >{{ item.name }}</span
                    >
                </li>
            </ul>
            
            <div class="product_content_list">
                <div class="list_container">
                    <div class="list">
                        <Prev @click.native="subIndex"></Prev>
                        <ul class="product_list">
                            <li
                                class="item"
                                v-for="(
                                    item, index
                                ) in serviceContent.productContent"
                                :key="index"
                                v-if="index === currentTab"
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
                            </li>
                        </ul>
                        <Next @click.native="addIndex"></Next>
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
                        <More
                            :text.sync="serviceContent.chatWithUs"
                            class="chat_btn"
                            @click.native="updateShowMask"
                        ></More>
                    </div>
                </div>
            </div>
        </div>
        <HomeMask v-if="showMask" :showMask.sync="showMask"></HomeMask>
    </div>
</template>

<script>
// import '../../../public/iconfont/iconfont.css'

import More from "@theme/components/Common/More.vue";
import Prev from "@theme/components/Common/Prev.vue";
import Next from "@theme/components/Common/Next.vue";
import HomeMask from '@theme/components/Home/HomeMask.vue';
export default {
    name: "Product",
    props: ["serviceContent"],
    data() {
        return {
            currentTab: 0,
            showMask: false,
        };
    },
    computed: {
        differentImg(){
            return function(imgName){
                return `/home/products/${imgName}`;
            }
        },
    },
    methods: {
        clickIritaFn() {
            window.open("https://irita.bianjie.ai/");
        },
        changeTab(index) {
            this.currentTab = index;
        },
        subIndex() {
            if(this.currentTab > 0) {
                this.currentTab -= 1;
            }
            if(this.currentTab === 0) {
                this.currentTab = 0;
            }
        },
        addIndex() {
            if(this.currentTab < 4) {
                this.currentTab += 1;
            }
            if(this.currentTab === 4) {
                this.currentTab = 4;
            }
        },
        updateShowMask(){
            this.showMask = true;
        },
    },
    components: {
        More,
        Prev,
        Next,
        HomeMask
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

        &::after {
            content: '';
            display: block;
            margin-top: 3.2rem;
            width: 100%;
            height: 0.2rem;
            background: #CCD5EF;
            @media (max-width: 768px) {
                margin-top: 2.4rem;
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
                    background: #0967E9;
                    @media (max-width: 400px) {
                        margin-top: 1.6rem;
                    }
                }
            }

            .irita_content {
                margin-top: 6rem;
                @media (max-width: 920px) {
                    margin-top: 4.8rem;
                    text-align: center;
                }

                .irita_title {
                    font-size: $fontSize24;
                    font-weight: $fontWeight500;
                    color: #000;
                    line-height: 2.6rem;
                    @media (max-width: 920px) {
                        text-align: center;
                    }
                }

                .desc_content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 0.4rem;
                    @media (max-width: 920px) {
                        justify-content: center;
                        margin-top: 1.6rem;
                    }

                    .desc {
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, 0.75);
                        line-height: 2.4rem;
                    }

                    .title_btn {
                        border: 0.1rem solid #0967E9;
                        @media (max-width: 920px) {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    .product_content {
        width: 100%;
        height: 60.2rem;

        .product_name_list {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            max-width: $contentWidth;
            height: 7rem;

            .name_item {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 20%;
                height: 100%;

                &:hover {
                    cursor: pointer;
                }

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
                border-bottom: 0.3rem solid #0967E9;
                border-radius: 0.4rem;
            }
        }

        .product_content_list {
            width: 100%;
            height: 53.2rem;
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

                    .product_list {
                        margin: 0 4.8rem;

                        .item {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            .left {
                                .name {
                                    font-size: $fontSize16;
                                    font-weight: $fontWeight600;
                                    color: #fff;
                                    line-height: 1.6rem;

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
                                    max-width: 27.2rem;
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
                                    max-width: 16.5rem;
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

                                img {
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .product_footer_content {
        width: 100%;
        height: 15.2rem;
        background: url('../../assets/home/zxyjsfw_bg.png') no-repeat center / cover;

        .footer_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 3.2rem 0;
            max-width: $contentWidth;
            height: 100%;

            .content {
                margin: 0 auto;
                max-width: 105.6rem;
                height: 100%;

                .title {
                    font-size: $fontSize20;
                    font-weight: $fontWeight500;
                    color: #fff;
                    line-height: 2rem;
                }

                .desc_content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 1.6rem;

                    .desc {
                        max-width: 37.2rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(255, 255, 255, 0.85);
                        line-height: 2.6rem;
                    }

                    .chat_btn {
                        border-radius: 0.2rem 0 0 0.2rem;
                        border: 0.1rem solid #fff;
                    }
                }
            }
        }
    }
}
</style>