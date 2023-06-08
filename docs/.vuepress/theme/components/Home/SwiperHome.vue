<template>
    <div class="swiper_home_container" :style="differentOpenImg(content.img)">
        <div class="swiper_home_content_container">
            <div class="swiper_home_content">
                <div class="title_container">
                    <span class="title" :class="{title_edition: edition && content.title.length <= 6 }">{{ content.title }}</span>
                    <span class="sub_title">
                        <span v-html="content.subTitle"></span>
                    </span>
                </div>
                <a class="more" v-if="content.moreText" href="https://irita.bianjie.ai/" target="_blank" rel="noopener noreferrer">
                    <span class="text">{{content.moreText}}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { getCurrentEdition } from '../../util';

export default {
    name: "SwiperHome",
    props: ["content", "currentSwiper"],
    data() {
        return {
            edition: getCurrentEdition()
        }
    },
    computed: {
        homeContent() {
			return this.$frontmatter.homeContent;
		},
        differentOpenImg() {
            return function (imgName) {
                return `background:url(/home/${imgName}) no-repeat center / cover;`;
            };
        },
        currentSwiperIndex() {
            return function(newIndex) {
                return this.currentSwiper = newIndex;
            }
        }
    },
};
</script>

<style lang="stylus">
.swiper_home_container {
    width: 100%;
    height: 100%;

    .swiper_home_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        .swiper_home_content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            max-width: 116.8rem;
            height: 100%;
            .title_container {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0 1.6rem;
            }
            .more {
                display: inline-block;
                margin-top: 3.6rem;
                display: flex;
                align-items: center;
                width: 12.4rem;
                height: 3.2rem;
                background: url(../../assets/home/white_outline_icon.png) no-repeat center / cover;
                border-radius: 0.2rem;
                .text {
                    margin-left: 2rem;
                    font-size: $fontSize14;
                    font-weight: $fontWeight400;
                    color: #fff;
                    line-height: 1.4rem;
                }
                @media (max-width: 400px) {
                    margin-top: 1.6rem;
                }
            }
        }

        .title {
            font-size: $fontSize56;
            font-weight: $fontWeight500;
            color: #fff;
            line-height: 5.6rem;
            text-align: center;
            letter-spacing: -0.2rem;

            @media (max-width: 968px) {
                font-size: $fontSize48;
                line-height: 4.8rem;
            }
            @media (max-width: 678px) {
                font-size: $fontSize36;
                line-height: 3.6rem;
            }
            @media (max-width: 516px) {
                font-size: $fontSize30;
                line-height: 3rem;
            }
            @media (max-width: 430px) {
                font-size: $fontSize22;
                line-height: 2.2rem;
            }
        }

        .title_edition {
            margin-right: -2.4rem;
            letter-spacing: 2.4rem;
        }

        .sub_title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 4.3rem;
            max-width: 100rem;
            font-size: $fontSize20;
            font-weight: $fontWeight400;
            color: #fff;
            line-height: 3.2rem;
            text-align: center;
            @media (max-width: 968px) {
                margin-top: 4rem;
            }
            @media (max-width: 768px) {
                margin-top: 2.4rem;
                font-size: $fontSize16;
            }
            @media (max-width: 400px) {
                font-size: $fontSize14;
                line-height: 2rem;
            }

            .sub_title_wrap {
                display: block;
                @media (max-width: 600px) {
                    display: inline;
                }
            }
        }
    }
}
</style>