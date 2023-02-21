<template>
    <div class="nft_example">
        <div class="nft_example_content">
            <ul class="nft_example_list">
                <li class="nft_example_item"
                    v-for="(item, index) in nftList"
                    :key="index"
                    :style="differentNftBanner(item.banner)"
                >
                    <ImgContent>
                        <template #img>
                            <img :src="$withBase(`/product/nft/${item.logo}`)" alt="">
                        </template>
                        <template #content>
                            <div class="title">{{item.title}}</div>
                            <ul class="description_list">
                                <li class="description_item" :class="{description_item_en: isEn}"
                                    v-for="(desc, dIndex) in item.description"
                                    :key="dIndex"
                                >
                                    {{desc.paragraph}}
                                </li>
                            </ul>
                        </template>
                    </ImgContent>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { LANG_OPTIONS } from '../../../constants';
import ImgContent from '../../Common/ImgContent.vue';
export default {
    name: 'NftExample',
    props: ['nftList'],
    computed: {
        isEn() {
            return this.$store.state.currentLang === LANG_OPTIONS[0].value;
        }
    },
    methods: {
        differentNftBanner(banner){
            return `background: url('/product/nft/${banner}.png') no-repeat center / cover;`;
        }
    },
    components: {
        ImgContent
    }
}
</script>

<style lang="stylus" scoped>
.nft_example {
    width: 100%;
    .nft_example_content {
        margin: 0 auto;
        padding: 4.8rem 4.8rem 10rem;
        max-width: 106rem;
        @media (max-width: 680px) {
            padding: 3.6rem 1.6rem 6rem;
        }
        .nft_example_list {
            .nft_example_item {
                display: flex;
                align-items: center;
                box-sizing: border-box;
                margin-top: 3.2rem;
                min-height: 22.8rem;
                background: #fff;
                border-radius: 0.4rem;
                border: 0.1rem solid #E8EBF5;
                &:first-child {
                    margin-top: 0;
                }
                @media (max-width: 1050px) {
                    background-image: none !important;
                }
                .img_content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 3.2rem 4.8rem 3.2rem 11.7rem;
                    @media (max-width: 1150px) {
                        padding: 3.2rem 4.8rem;
                    }
                    @media (max-width: 680px) {
                        flex-direction: column;
                        justify-content: center;
                        padding: 3.2rem 1.6rem;
                    }
                    img {
                        margin-right: 16.5rem;
                        width: 13rem;
                        height: 13rem;
                        @media (max-width: 1050px) {
                            margin-right: 6rem;
                        }
                        @media (max-width: 768px) {
                            margin-right: 4rem;
                        }
                        @media (max-width: 680px) {
                            margin-right: 0;
                        }
                    }
                    .img_content_right {
                        .title {
                            font-size: $fontSize24;
                            font-weight: $fontWeight600;
                            color: #000;
                            line-height: 2.8rem;
                            @media (max-width: 680px) {
                                margin-top: 2.4rem;
                                text-align: center;
                            }
                        }
                        .description_list {
                            .description_item {
                                margin-top: 2.4rem;
                                font-size: $fontSize14;
                                font-weight: $fontWeight400;
                                color: rgba(0,0,0,0.65);
                                line-height: 2.8rem;
                                @media (max-width: 680px) {
                                    text-align: center;
                                }
                            }
                            .description_item_en {
                                line-height: 2rem;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>