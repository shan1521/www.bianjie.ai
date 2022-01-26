<template>
    <div class="advantage_container">
        <div class="advantage_content_container">
            <div class="advantage_content">
                <span class="title">{{ advantageContent.title }}</span>
                <ul class="advantage_list">
                    <li class="adv_list_item"
                        v-for="(item, index) in advantageContent.advList"
                        :key="index">
                        <div class="list_item_top">
                            <img class="img"
                                :src="differentAdvantageImg(item.img)"
                                alt="" />
                        </div>
                        <div class="list_item_bottom">
                            <div class="list_item_bottom_intro">
                                <span class="intro">{{ item.intro }}</span>
                            </div>
                            <div class="list_item_bottom_desc">
                                <span class="desc">{{ item.description }}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Advantage",
    props: ["advantageContent"],
    computed: {
        differentAdvantageImg() {
            return function (imgName) {
                return `/home/${imgName}`;
            };
        },
    },
    methods: {},
};
</script>

<style lang="stylus" scoped>
.advantage_container {
    width: 100%;
    min-height: 53.6rem;
    background: url('../../assets/home/hxnlyys_bg.png') no-repeat center / cover;

    .advantage_content_container {
        box-sizing: border-box;
        padding: 8rem 0;
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        @media (max-width: 768px) {
            padding: 6rem 0;
        }

        @media (max-width: 375px) {
            padding: 4rem 0;
        }

        .advantage_content {
            margin: 0 auto;
            max-width: 105.6rem;
            text-align: center;

            @media (max-width: 1075px) {
                max-width: 51.2rem;
            }

            @media (max-width: 608px) {
                max-width: 24rem;
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
                    background: $highlightDetailColor;

                    @media (max-width: 400px) {
                        margin-top: 1.6rem;
                    }
                }
            }

            .advantage_list {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-column-gap: 3.2rem;
                margin: 6rem auto 0;
                min-height: 26.4rem;

                @media (max-width: 1075px) {
                    margin: 4.8rem auto 0;
                    grid-template-columns: repeat(2, 1fr);
                    grid-row-gap: 3.2rem;
                }

                @media (max-width: 608px) {
                    grid-template-columns: repeat(1, 1fr);
                    grid-row-gap: 1.6rem;
                }

                @media (max-width: 375px) {
                    margin-top: 1.6rem;
                }

                .adv_list_item {
                    box-sizing: border-box;
                    width: 24rem;
                    min-height: 35.6rem;
                    border: 0.1rem solid #E1E5F4;
                    border-radius: 0.4rem;
                    .list_item_top {
                        width: 100%;
                        height: 14.6rem;
                        img {
                            width: 100%;
                            border-radius: 0.4rem 0.4rem 0 0;
                        }
                    }

                    .list_item_bottom {
                        box-sizing: border-box;
                        padding: 1.6rem;
                        min-height: 21rem;
                        background: #fff;

                        .list_item_bottom_intro {
                            .intro {
                                font-size: $fontSize16;
                                font-weight: $fontWeight600;
                                color: #000;
                                line-height: 2.4rem;
                                letter-spacing: 0.1rem;
                            }
                        }

                        .list_item_bottom_desc {
                            margin-top: 1.6rem;
                            &::before {
                                content: '';
                                display: block;
                                margin: 0 auto 0.8rem;
                                width: 12rem;
                                height: 0.1rem;
                                background: #EDEDED;
                            }

                            .desc {
                                font-size: $fontSize14;
                                font-weight: $fontWeight400;
                                color: #000000;
                                line-height: 2.6rem;
                            }
                        }
                    }
                }
            }
        }
    }
}

@keyframes bottomToTop {
    0% {
        bottom: -21.2rem;
    }

    100% {
        bottom: 0;
    }
}

@keyframes bottomToTop {
    0% {
        bottom: -21.2rem;
    }

    100% {
        bottom: 0;
    }
}
</style>