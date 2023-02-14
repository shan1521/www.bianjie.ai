<template>
    <div class="irita_intro">
        <div class="irita_intro_content" :class="{irita_intro_content_en: isEn}">
            <img src="/product/irita/irita.png" alt="" class="irita" />
            <div class="irita_description">
                <p class="title">{{ iritaIntro.title }}</p>
                <div class="characteristic" :class="{characteristic_en: isEn}">
                    <span class="characteristic_item" v-for="(item,index) in iritaIntro.characteristic"
                            :key="index">{{ item.text }}</span>
                </div>
                <div class="description">
                    <p class="description_article" v-for="(item,index) in iritaIntro.descriptionArticle"
                    :key="index">{{ item.paragraph }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { LANG_OPTIONS } from '../../../constants';
export default {
    name: 'IritaIntro',
    props: ['iritaIntro'],
    data(){
        return {
            currentLang: this.$store.state.currentLang
        }
    },
    computed: {
        isEn() {
            return this.currentLang === LANG_OPTIONS[0].value;
        }
    }
}

</script>

<style lang="stylus" scoped>
.irita_intro {
    .irita_intro_content {
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 4.8rem;
        max-width: 109.6rem;
        @media (max-width: 420px) {
            padding: 3.6rem 1.6rem;
        }
        
        .irita {
            margin-right: 10rem;
            width: 34rem;
            height: 34.8rem;
            @media (max-width: 1200px) {
                margin-right: 6rem;
            }
            @media (max-width: 960px) {
                display: none;
            }
        }
        .irita_description {
            .title {
                font-size: $fontSize24;
                font-weight: $fontWeight600;
                color: #000;
                line-height: 28px;
            }
            .characteristic {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                margin-top: 0.8rem;
                .characteristic_item {
                    display: flex;
                    align-items: center;
                    margin-top: 2.4rem;
                    font-size: $fontSize20;
                    font-weight: $fontWeight600;
                    color: #000;
                    line-height: 2.4rem;
                    white-space: nowrap;

                    &::before {
                        margin-right: 0.8rem;
                        content: '';
                        width: 0.4rem;
                        height: 2rem;
                        line-height: 2.4rem;
                        background: $highlightDetailColor;
                    }
                    @media (max-width: 420px) {
                        font-size: $fontSize16;
                    }
                }
            }
            .characteristic_en {
                grid-template-columns: repeat(2, 1fr);
                gap: 0 4.8rem;
            }
            .description {
                margin-top: 3.2rem;
                .description_article {
                    font-size: $fontSize14;
                    font-weight: $fontWeight400;
                    color: rgba(0,0,0,0.65);
                    line-height: 2.4rem;
                }
            }
        }
    }
    .irita_intro_content_en {
        .irita {
            @media (max-width: 1130px) {
                display: none;
            }
        }
        .irita_description {
            .characteristic_en {
                @media (max-width: 1130px) {
                    grid-template-columns: repeat(3, 1fr);
                }
                @media (max-width: 930px) {
                    grid-template-columns: repeat(2, 1fr);
                }
                @media (max-width: 730px) {
                    grid-template-columns: repeat(1, 1fr);
                }
            }
        }
    }
}
</style>