<template>
    <div class="feature_container">
        <div class="feature_content_container">
            <div class="feature__content">
                <div class="title">{{ featuresContent.title }}</div>
                <ul class="feature_list">
                    <li
                        class="feature_item"
                        v-for="(item, index) in featuresContent.featureList"
                        :key="index"
                    >
                        <div class="item_title_container">
                            <span class="item_title">{{ item.title }}</span>
                        </div>
                        <div class="item_desc_container">
                            <span class="item_desc">{{
                                item.description
                            }}</span>
                        </div>
                    </li>
                </ul>
                <div class="example_title">
                    {{ featuresContent.exampleTitle }}
                </div>
                <ul class="example_list">
                    <li
                        class="example_item"
                        v-for="(item, index) in featuresContent.exampleList"
                        :key="index"
                    >
                        <span class="item_content">
                            <img class="example_icon"
                                src="../../assets/product/iritaopb/example_icon.png"
                                alt=""
                            />
                        </span>
                        <div class="item_right">
                            <span class="item_title">{{ item.title }}</span>
                            <a class="item_detail" :href="item.link" target="_blank" rel="noopener noreferrer">
                                <Detail></Detail>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Detail from "@theme/components/Common/Detail.vue";
export default {
    name: "Feature",
    props: ["featuresContent"],
    components: {
        Detail,
    },
};
</script>

<style lang="stylus">
.feature_container {
    width: 100%;
    min-height: 77rem;
    background: #FCFCFC;

    .feature_content_container {
        margin: 0 auto;
        max-width: $contentWidth;

        .feature__content {
            box-sizing: border-box;
            padding: 4.8rem 0 5.4rem;
            margin: 0 auto;
            max-width: 113.6rem;

            .title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
                text-align: center;
            }

            .feature_list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-row-gap: 3.2rem;
                grid-column-gap: 3.2rem;
                margin: 4rem auto 0;
                max-width: 96rem;
                @media (max-width: 1056px) {
                    grid-template-columns: repeat(1, 1fr);
                    max-width: 46.4rem;
                }
                @media (max-width: 560px) {
                    box-sizing: border-box;
                    padding-left: 4.8rem;
                    padding-right: 4.8rem;
                }
                @media (max-width: 400px) {
                    padding-left: 1.6rem;
                    padding-right: 1.6rem;
                }

                .feature_item {
                    max-width: 46.4rem;
                    min-height: 19.2rem;
                    border: 0.05rem solid #E1E5F4;
                    border-radius: 0.4rem;

                    .item_title_container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 6.4rem;
                        background: url('../../assets/product/iritaopb/chanpintedian.png') no-repeat center / cover;

                        .item_title {
                            display: flex;
                            align-items: center;
                            font-size: $fontSize16;
                            font-weight: $fontWeight600;
                            color: rgba(0, 0, 0, 0.75);
                            line-height: 2.4rem;

                            &::before {
                                content: '';
                                display: inline-block;
                                margin-right: 0.8rem;
                                width: 0.4rem;
                                height: 1.6rem;
                                background: $highlightDetailColor;
                            }

                            &::after {
                                content: '';
                                display: inline-block;
                                margin-left: 0.8rem;
                                width: 0.4rem;
                                height: 1.6rem;
                                background: $highlightDetailColor;
                            }
                        }
                    }

                    .item_desc_container {
                        box-sizing: border-box;
                        padding: 1.5rem 6rem 4.1rem;
                        @media (max-width: 768px) {
                            padding-left: 4.8rem;
                            padding-right: 4.8rem;
                        }
                        @media (max-width: 400px) {
                            padding-left: 2.4rem;
                            padding-right: 2.4rem;
                        }

                        .item_desc {
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: rgba(0, 0, 0, 0.75);
                            line-height: 2.4rem;
                        }
                    }
                }
            }

            .example_title {
                margin-top: 4rem;
                font-size: $fontSize16;
                font-weight: $fontWeight600;
                color: #000;
                line-height: 2.4rem;
                text-align: center;

                &::after {
                    content: '';
                    display: block;
                    margin: 1.2rem auto 0;
                    max-width: 96rem;
                    height: 0.1rem;
                    background: #EDEDED;
                }
            }

            .example_list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-row-gap: 2rem;
                grid-column-gap: 3.2rem;
                margin: 1.5rem auto 0;
                max-width: 96rem;
                @media (max-width: 1056px) {
                    grid-template-columns: repeat(1, 1fr);
                    max-width: 46.4rem;
                }
                @media (max-width: 768px) {
                    box-sizing: border-box;
                    padding-left: 4.8rem;
                    padding-right: 4.8rem;
                }
                @media (max-width: 375px) {
                    padding-left: 1.6rem;
                    padding-right: 1.6rem;
                }

                .example_item {
                    display: flex;
                    align-items: center;
                    box-sizing: border-box;
                    padding: 0 2.4rem;
                    max-width: 46.4rem;
                    height: 9.6rem;
                    border: 0.1rem solid #E1E5F4;
                    border-radius: 0.4rem;
                    transition: all .2s linear;

                    &:hover {
                        background: url(../../assets/product/iritaopb/heyueshili.png) no-repeat center / cover;
                        border: 0.1rem solid $highlightDetailColor;
                    }
                    .item_right {
                        flex: 1 0;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-left: 1.6rem;
                        @media (max-width: 460px) {
                            flex-direction: column;
                            align-items: flex-start;
                        }
                        .item_title {
                            font-size: $fontSize14;
                        }
                        .item_detail {
                            display: inline-block;
                            @media (max-width: 460px) {
                                margin-top: 2rem;
                            }
                            .detail_container {
                                margin-top: 0;
                            }
                        }
                    }
                    .example_icon {
                        width: 50px;
                    }
                }
            }
        }
    }
}
</style>