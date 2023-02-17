<template>
    <div class="intro_container">
        <div class="intro_content_container">
            <div class="intro_content">
                <img
                    class="intro_content_left"
                    src="../../assets/product/iritahub/iritahub_image.png"
                    alt=""
                />
                <div class="intro_content_right">
                    <div class="title">{{ introContent.title }}</div>
                    <p
                        class="desc_article"
                        :class="{desc_article_en: isEn}"
                        v-for="(item, index) in introContent.description"
                        :key="index"
                        v-html="item.paragraph"
                    >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { LANG_OPTIONS } from '../../constants';
export default {
    name: "IntroContent",
    props: ["introContent"],
    computed: {
        isEn() {
            return this.$store.state.currentLang === LANG_OPTIONS[0].value;
        }
    }
};
</script>

<style lang="stylus">
.intro_container {
    width: 100%;
    min-height: 48.8rem;

    .intro_content_container {
        margin: 0 auto;
        max-width: $contentWidth;

        .intro_content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 6.4rem 0 4.8rem;
            margin: 0 auto;
            max-width: 113.6rem;
            @media (max-width: 1200px) {
                padding-left: 4.8rem;
                padding-right: 4.8rem;
                max-width: 111.2rem;
            }
            @media (max-width: 375px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }
            .intro_content_left {
                margin-right: 5.7rem;
                width: 30.1rem;
                height: 28.7rem;
                @media (max-width: 960px) {
                    display: none;
                }
            }
            .intro_content_right {
                .title {
                    font-size: $fontSize24;
                    font-weight: $fontWeight500;
                    color: #000;
                    line-height: 2.4rem;
                    @media (max-width: 960px) {
                        text-align: center;
                    }
                }
                .desc_article {
                    margin-top: 3.6rem;
                    font-size: $fontSize14;
                    font-weight: $fontWeight400;
                    color: rgba(0, 0, 0, 0.75);
                    line-height: 2.4rem;
                    &:nth-of-type(1) {
                        margin-top: 4rem;
                    }
                    a {
                        color: $highlightDetailColor;
                    }
                }
                .desc_article_en {
                    margin-top: 2rem;
                }
            }
        }
    }
}
</style>