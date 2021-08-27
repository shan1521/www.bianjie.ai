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
                    <i class="iconfont" :class="item.icon"></i>
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
                                    <More
                                        :text.sync="serviceContent.moreText"
                                        class="name_btn"
                                    ></More>
                                </div>
                                <div class="right">
                                    <img src="" alt="" />
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
                        ></More>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import More from "@theme/components/Common/More.vue";
import Prev from "@theme/components/Common/Prev.vue";
import Next from "@theme/components/Common/Next.vue";
export default {
    name: "Product",
    props: ["serviceContent"],
    data() {
        return {
            currentTab: 0,
        };
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
        }
    },
    components: {
        More,
        Prev,
        Next,
    },
};
</script>

<style lang="stylus">
.product_container {
    width: 100%;
    height: 103.7rem;

    .product_title_content {
        box-sizing: border-box;
        padding: 8rem 0 0;
        margin: 0 auto;
        max-width: $contentWidth;

        &::after {
            content: '';
            display: block;
            margin-top: 3.2rem;
            width: 100%;
            height: 0.2rem;
            background: #CCD5EF;
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
                font-weight: 500;
                color: #000;
                line-height: 2.4rem;

                &::after {
                    content: '';
                    display: block;
                    margin-top: 2.4rem;
                    width: 8rem;
                    height: 0.4rem;
                    background: #0967E9;
                }
            }

            .irita_content {
                margin-top: 6rem;

                .irita_title {
                    font-size: $fontSize24;
                    font-weight: $fontWeight500;
                    color: #000;
                    line-height: 2.4rem;
                }

                .desc_content {
                    margin-top: 0.4rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .desc {
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, 0.75);
                        line-height: 2rem;
                    }

                    .title_btn {
                        border: 0.1rem solid #0967E9;
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

                .iconfont {
                    display: inline-block;
                    font-size: $fontSize36;
                }

                .name {
                    margin-left: 1.2rem;
                    font-size: $fontSize16;
                    font-weight: 500;
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
                                    font-weight: 500;
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
                                    font-weight: 500;
                                    color: #fff;
                                    line-height: 1.6rem;
                                    letter-spacing: 0.1rem;
                                }

                                .desc {
                                    margin-top: 2.4rem;
                                    max-width: 27.2rem;
                                    font-size: $fontSize14;
                                    font-weight: 400;
                                    color: rgba(255, 255, 255, 0.75);
                                    line-height: 2.4rem;
                                }

                                .name_btn {
                                    margin-top: 4.8rem;
                                }
                            }

                            .right {
                                margin-left: 3.2rem;
                                width: 67.2rem;
                                height: 44.2rem;

                                img {
                                    width: 100%;
                                    height: 100%;
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
                    font-weight: 500;
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
                        font-weight: 400;
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