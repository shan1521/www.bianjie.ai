<template>
    <div class="irita_core">
        <div class="irita_core_content">
            <p class="irita_core_title">{{ advantageContent.text }}</p>
            <ul class="irita_core_list">
                <li class="irita_core_item_wrapper" v-for="(item,index) in advantageContent.advantageList"
                    :class="{irita_core_item_wrapper_en: isEn}"
                    :key="index">
                    <div class="irita_core_item" :class="{irita_core_item_en: isEn}" ref="advantageItem">
                        <img :src="$withBase(differentAdvantageImg(item.img))" alt="" class="advantage_img">
                        <p class="advantage_title">{{ item.advantageTitle }}</p>
                        <p class="description" :class="{description_en: isEn}" v-for="(dItem,dIndex) in item.description" :key="dIndex">
                            {{ dItem.paragraph }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { LANG_OPTIONS } from '../../../constants';
export default {
    name: 'IritaCore',
    props: ['advantageContent'],
    data() {
        return {
            currentLang: this.$store.state.currentLang
        }
    },
    computed: {
        isEn() {
            return this.currentLang === LANG_OPTIONS[0].value;
        }
    },
    methods: {
        differentAdvantageImg(imgName) {
            return `/product/irita/${imgName}`;
        }
    }
}

</script>

<style lang="stylus" scoped>
.irita_core {
    width: 100%;
    background: #fcfcfc;
    .irita_core_content {
        padding: 4.8rem;
        @media (max-width: 420px) {
            padding: 3.6rem 1.6rem;
        }
        .irita_core_title {
            font-size: $fontSize24;
            font-weight: $fontWeight600;
            color: #000;
            line-height: 2.8rem;
            text-align: center;
        }
        .irita_core_list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2.4rem 3.6rem;
            margin: 6.4rem auto 0;
            max-width: 96rem;
            @media (max-width: 1060px) {
                grid-template-columns: repeat(2, 1fr);
                max-width: 68.8rem;
            }
            @media (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
                max-width: 29.6rem;
            }
            .irita_core_item_wrapper {
                padding: 0.8rem;
                min-height: 33.2rem;
                background: #fff;
                border-radius: 4px;
                border: 0.1rem solid #E8EBF5;
                .irita_core_item {
                    padding: 0.7rem 1.6rem;
                    min-height: 31.6rem;
                    background: url('/product/irita/core_card_bg.png') no-repeat center / cover;

                    .advantage_img {
                        width: 7.2rem;
                        height: 8.1rem;
                    }
                    .advantage_title {
                        margin-top: 1.6rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        color: #000;
                        line-height: 2rem;
                    }
                    .description {
                        margin-top: 1.6rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0,0,0,0.75);
                        line-height: 2.8rem;
                    }
                    .description_en {
                        line-height: 2rem;
                    }
                }
                .irita_core_item_en {
                    min-height: 35.8rem;
                }
            }
            .irita_core_item_wrapper_en {
                min-height: 37.4rem;
                max-height: 37.4rem;
            }
        }
    }
}
</style>