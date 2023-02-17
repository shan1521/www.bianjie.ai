<template>
    <div class="iritahub_title_container">
        <div class="iritahub_title_content_container">
            <div class="iritahub_title_content">
                <div class="title" :class="{title_en: isEn}">{{ titleContent.title }}</div>
                <div class="sub_title" :class="{sub_title_en: isEn}">{{ titleContent.subTitle }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { LANG_OPTIONS } from '../../constants';
export default {
    name: "IritaHubTitle",
    props: ["titleContent"],
    computed: {
        isEn() {
            return this.$store.state.currentLang === LANG_OPTIONS[0].value;
        }
    }
};
</script>

<style lang="stylus">
.iritahub_title_container {
    width: 100%;
    height: 36rem;
    background: url(../../assets/product/iritahub/iritahub_banner.png) no-repeat center / cover;
    @media (max-width: 768px) {
        background: url(../../assets/product/iritahub/iritahub_banner_pad.png) no-repeat center / cover;
    }
    @media (max-width: 420px) {
        height: 25rem;
        background: url(/banner_phone.png) no-repeat center / cover;
    }

    .iritahub_title_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        .iritahub_title_content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
            margin: 0 auto;
            max-width: 109.6rem;
            height: 100%;
            @media (max-width: 1200px) {
                box-sizing: border-box;
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 420px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }

            .title {
                font-size: $fontSize40;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 4.8rem;
                @media (max-width: 775px) {
                    font-size: $fontSize36;
                }
                @media (max-width: 420px) {
                    font-size: $fontSize22;
                    line-height: 3.2rem;
                    text-align: center;
                }
            }
            .title_en {
                max-width: 69rem;
                @media (max-width: 590px) {
                    font-size: $fontSize32;
                }
                @media (max-width: 460px) {
                    font-size: $fontSize24;
                }
            }
            .sub_title {
                margin-top: 2.4rem;
                font-size: $fontSize20;
                font-weight: $fontWeight400;
                color: rgba(0, 0, 0, 0.75);
                line-height: 2.4rem;
                @media (max-width: 420px) {
                    font-size: $fontSize16;
                    text-align: center;
                }
            }
            .sub_title_en {
                max-width: 69rem;
            }
        }
    }
}
</style>