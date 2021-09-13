<template>
    <div class="advantage_container">
        <div class="advantage_content_container">
            <div class="advantage_content">
                <span class="title">{{ advantageContent.title }}</span>
                <ul class="adv_list">
                    <li
                        class="adv_list_item"
                        v-for="(item, index) in advantageContent.advList"
                        :key="index"
                    >
                        <div class="item_img">
                            <img
                                class="img"
                                :src="differentAdvantageImg(item.img)"
                                alt=""
                            />
                        </div>
                        <div class="item_intro">
                            <div class="intro_container">
                                <span class="intro">{{ item.intro }}</span>
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
    methods: {
    },
};
</script>

<style lang="stylus">
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

        .advantage_content {
            margin: 0 auto;
            max-width: 105.6rem;
            min-height: 100%;
            text-align: center;
            @media (max-width: 1056px) {
                max-width: 51.2rem;
            }
            @media (max-width: 512px) {
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

                &::after {
                    content: '';
                    display: block;
                    margin-top: 2.4rem;
                    width: 8rem;
                    height: 0.4rem;
                    background: #0967E9;
                }
            }

            .adv_list {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-row-gap: 2rem;
                grid-column-gap: 3.2rem;
                margin-top: 6rem;
                min-height: 26.4rem;
                @media (max-width: 1056px) {
                    grid-template-columns: repeat(2, 1fr);
                }
                @media (max-width: 512px) {
                    grid-template-columns: repeat(1, 1fr);
                }

                .adv_list_item {
                    position: relative;
                    box-sizing: border-box;
                    max-width: 24rem;
                    height: 100%;
                    border: 0.1rem solid #E1E5F4;
                    border-radius: 0.4rem;

                    .item_img {
                        width: 100%;
                        height: 17.6rem;
                        border-radius: 0.4rem 0.4rem 0 0;

                        .img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .item_intro {
                        box-sizing: border-box;
                        width: 100%;
                        height: 8.8rem;
                        overflow: hidden;

                        &:hover {
                            position: absolute;
                            bottom: 0rem;
                            height: 20.2rem;
                            background: #fff;
                            border: 0.1rem solid #0967E9;
                            border-top: 0;
                            border-bottom: 0.6rem solid #0967E9;
                            border-radius: 0 0 0.4rem 0.4rem;
                            cursor: pointer;
                            transition: height 0.2s linear;

                            .intro {
                                height: 8rem !important;
                            }

                            .desc {
                                z-index: 2;
                                display: block;
                                margin: 0 auto;
                                max-width: 20.8rem;
                                font-size: $fontSize14;
                                font-weight: $fontWeight400;
                                color: rgba(0, 0, 0, 0.75);
                                line-height: 2.6rem;
                                display: flex;
                                flex-direction: column;
                                align-items: center;

                                &::before {
                                    content: '';
                                    display: block;
                                    margin-bottom: 0.8rem;
                                    width: 12rem;
                                    height: 0.1rem;
                                    background: #EDEDED;
                                }
                            }
                        }

                        .intro_container {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            margin: 0 auto;
                            text-align: center;

                            .intro {
                                display: flex;
                                align-items: center;
                                max-width: 16.8rem;
                                height: 8.8rem;
                                font-size: $fontSize16;
                                font-weight: $fontWeight500;
                                color: #000000;
                                line-height: 2.4rem;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>