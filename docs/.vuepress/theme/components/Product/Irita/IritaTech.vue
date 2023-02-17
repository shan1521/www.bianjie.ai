<template>
    <div class="irita_tech">
        <div class="irita_tech_content">
            <span class="irita_tech_title">{{ techApplication.text }}</span>
            <div class="irita_tech_bottom">
                <div class="irita_tech_wenchang">
                    <div class="wenchang_title">
                        <div class="wenchang_logo">
                            <img src="../../../assets/home/bsn-wenchang_logo.png" alt="" />
                        </div>
                        <span class="wenchang_text">{{ techApplication.wenchang.text}}</span>
                    </div>
                    <ul class="wenchang_desc_list">
                        <li class="wenchang_desc_item" :class="{wenchang_desc_item_en: isEn}"
                            v-for="(item, index) in techApplication.wenchang.description" :key="index"
                        >
                            {{ item.paragraph }}
                        </li>
                    </ul>
                </div>
                <img class="wenchang_banner" :src="$withBase(`/product/irita/${techApplication.banner}`)" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import { LANG_OPTIONS } from '../../../constants';
export default {
    name: 'IritaTech',
    props: ['techApplication'],
    computed: {
        isEn() {
            return this.$store.state.currentLang === LANG_OPTIONS[0].value;
        }
    }
}
</script>

<style lang="stylus" scoped>
.irita_tech {
    width: 100%;
    .irita_tech_content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 4.8rem 4.8rem 9.6rem;
        max-width: 90.2rem;
        @media (max-width: 420px) {
            padding: 3.6rem 1.6rem 6rem;
        }
        .irita_tech_title {
            font-size: $fontSize24;
            font-weight: $fontWeight600;
            color: #000;
            line-height: 2.8rem;
        }
        .irita_tech_bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 4.8rem;
            .irita_tech_wenchang {
                .wenchang_title {
                    display: flex;
                    align-items: center;
                    .wenchang_logo {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 0.6rem;
                        width: 5rem;
                        height: 4.8rem;
                        background: rgba(224,224,255,0.3);
                        border-radius: 50%;
                        img {
                            width: 3.8rem;
                            height: 3.6rem;
                        }
                    }
                    .wenchang_text {
                        display: inline-block;
                        margin-left: 0.8rem;
                        font-size: $fontSize20;
                        font-weight: $fontWeight600;
                        color: #000;
                        line-height: 2.4rem;
                    }
                }
                .wenchang_desc_list {
                    margin-top: 1.6rem;
                    .wenchang_desc_item {
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0,0,0,0.75);
                        line-height: 2.4rem;
                    }
                    .wenchang_desc_item_en {
                        margin-top: 2rem;
                        &:first-child {
                            margin-top: 0;
                        }
                    }
                }
            }
            .wenchang_banner {
                margin-left: 4.8rem;
                width: 32.6rem;
                height: 30.1rem;
                @media (max-width: 960px) {
                    display: none;
                }
            }
        }
    }
}
</style>