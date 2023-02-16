<template>
    <Caption class="adv" :title="captionContent.title">
        <ul class="adv_list">
            <li class="adv_list_item"
                v-for="(item, index) in advList"
                :key="index">
                <div class="list_item_top">
                    <img class="img"
                        :src="differentAdvantageImg(item.img)"
                        alt="" />
                </div>
                <div class="list_item_middle_bottom">
                    <div class="list_item_middle">
                        <span class="intro">{{ item.intro }}</span>
                    </div>
                    <div class="list_item_bottom">
                        <span class="list_item_bottom_desc" :class="{ list_item_bottom_desc_en: isEn }">{{ item.description }}</span>
                    </div>
                </div>
                <div v-if="item.showShadow" class="list_item_shadow"></div>
            </li>
        </ul>
    </Caption>
</template>

<script>
import Caption from '@theme/components/Common/Caption.vue';
import { LANG_OPTIONS, ADVANTAGES_WIDTH, ADVANTAGES_HEIGHT } from '../../constants';
import { getTextWidth } from '../../util';
export default {
    name: "CaptionImgContent",
    props: ["captionContent"],
    computed: {
        advList() {
            const list = this.captionContent.advList;
            list?.forEach(item => {
                const contentRealWidth = getTextWidth(item.description);
                const contentHeight = Math.ceil(contentRealWidth / ADVANTAGES_WIDTH) * ADVANTAGES_HEIGHT;
                if(contentHeight > 140) {
                    item.showShadow = true;
                }
            })
            return list;
        },
        differentAdvantageImg() {
            return function (imgName) {
                return `/home/${imgName}`;
            };
        },
        isEn() {
            return this.$store.state.currentLang === '/en/';
        }
    },
    components: {
        Caption
    }
};
</script>

<style lang="stylus" scoped>
.adv {
    .adv_list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 3.2rem;
        margin: 6rem auto 0;
        max-width: 105.6rem;
        min-height: 26.4rem;

        @media (max-width: 1075px) {
            grid-template-columns: repeat(2, 1fr);
            grid-row-gap: 3.2rem;
            margin: 4.8rem auto 0;
            max-width: 51.2rem;
        }

        @media (max-width: 608px) {
            grid-template-columns: repeat(1, 1fr);
            grid-row-gap: 1.6rem;
            max-width: 24rem;
        }

        @media (max-width: 375px) {
            margin-top: 1.6rem;
        }
        .adv_list_item {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
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
            .list_item_middle_bottom {
                padding: 0 1.1rem 0.8rem;

                .list_item_middle {
                    .intro {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 1.6rem 0 0.8rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        color: #000;
                        line-height: 2rem;
                        text-align: center;
                        letter-spacing: 0.1rem;
                        &::after {
                            content: '';
                            display: block;
                            margin: 1.6rem auto 0;
                            width: 12rem;
                            height: 0.1rem;
                            background: #EDEDED;
                        }
                    }
                }
                .list_item_bottom {
                    box-sizing: border-box;
                    margin-bottom: 0.5rem;
                    max-height: 15.6rem;
                    min-height: 15.6rem;
                    overflow-y: auto;
                    &::-webkit-scrollbar {
                        width: 0;
                    }
                    .list_item_bottom_desc {
                        display: inline-block;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, 0.75);
                        line-height: 2.6rem;
                        text-align: center;
                    }
                    .list_item_bottom_desc_en {
                        line-height: 2rem;
                    }
                }
            }

            .list_item_shadow {
                position: absolute;
                bottom: 0.8rem;
                width: 90%;
                height: 1.6rem;
                background: linear-gradient(0deg, rgba(225,229,244,0.5) 0%, rgba(225,229,244,0) 100%);
            }
        }
    }
}
</style>