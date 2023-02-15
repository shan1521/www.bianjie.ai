<template>
    <div class="process_container">
        <div class="process_content_container">
            <div class="process_content">
                <div class="title">{{ processContent.title }}</div>
                <ul class="process_list">
                    <li
                        class="process_item"
                        v-for="(item, index) in processContent.processList"
                        :key="index"
                    >
                        <div class="item_left">
                            <div class="item_img">
                                <img
                                    :src="differentProcessImg(item.iconName)"
                                    alt=""
                                />
                            </div>
                            <div class="item_process">{{ item.process }}</div>
                            <div class="item_desc">{{ item.description }}</div>
                        </div>
                        <div class="item_right">
                            <img
                                src="../../assets/product/iritaopb/jiantou_icon.png"
                                alt=""
                            />
                        </div>
                    </li>
                </ul>
                <MoreBlue
                    class="control_btn"
                    :text="processContent.controlText"
                    @click.native="goComming"
                ></MoreBlue>
            </div>
        </div>
    </div>
</template>

<script>
import MoreBlue from "@theme/components/Common/MoreBlue.vue";
export default {
    name: "Process",
    props: ["processContent"],
    computed: {
        differentProcessImg() {
            return function (imgName) {
                return `/product/iritaopb/${imgName}`;
            };
        },
    },
    methods: {
        goComming(){
            this.$router.push('/products/IRITAOPB-敬请期待');
        }
    },
    components: {
        MoreBlue,
    },
};
</script>

<style lang="stylus">
.process_container {
    width: 100%;
    // height: 55.6rem;

    .process_content_container {
        margin: 0 auto;
        max-width: $contentWidth;

        .process_content {
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            margin: 0 auto;
            padding: 4.8rem 0 10rem;
            max-width: 96rem;
            text-align: center;

            .title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
                text-align: center;
            }

            .process_list {
                display: flex;
                margin-top: 4rem;
                @media (max-width: 1000px) {
                    flex-direction: column;
                    align-items: center;
                }

                .process_item {
                    display: flex;
                    justify-content: space-between;
                    @media (max-width: 1000px) {
                        flex-direction: column;
                        align-items: center;
                        margin-top:10rem;
                        &:first-child {
                            margin-top: 0;
                        }
                    }

                    &:last-child {
                        max-width: 24rem;
                        .item_right {
                            display: none;
                            max-width: 0;
                        }
                    }
                    .item_left {
                        max-width: 24rem;

                        .item_img {
                            margin: 0 auto;
                            width: 12rem;
                            height: 12rem;

                            img {
                                width: 100%;
                                // height: 100%;
                            }
                        }

                        .item_process {
                            margin-top: 2.4rem;
                            font-size: $fontSize16;
                            font-weight: $fontWeight600;
                            color: #000;
                            line-height: 2.4rem;
                        }

                        .item_desc {
                            margin-top: 1.9rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: rgba(0, 0, 0, 0.75);
                            line-height: 2.4rem;
                        }
                    }

                    .item_right {
                        position: relative;
                        top: 5rem;
                        // margin: 6rem 1.2rem 0;
                        max-width: 9.6rem;
                        height: 0.8rem;
                        text-align: center;
                        @media (max-width: 1000px) {
                            transform: rotate(90deg);
                        }

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }

            .control_btn {
                margin-top: 5.3rem;

                .text {
                    margin-left: 1.3rem;
                }
            }
        }
    }
}
</style>