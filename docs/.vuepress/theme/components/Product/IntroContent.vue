<template>
    <div class="intro_container">
        <div class="intro_content_container">
            <div class="intro_content">
                <div class="intro_content_left">
                    <img
                        src="../../assets/product/iritahub/iritahub_image.png"
                        alt=""
                    />
                </div>
                <div class="intro_content_right">
                    <div class="title">{{ introContent.title }}</div>
                    <p
                        class="desc_article"
                        v-for="(item, index) in introContent.description"
                        :key="index"
                    >
                        {{ item.paragraph }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IntroContent",
    props: ["introContent"],
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
                width: 60.2rem;
                @media (max-width: 1200px) {
                    display: none;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .intro_content_right {
                .title {
                    font-size: $fontSize24;
                    font-weight: $fontWeight500;
                    color: #000;
                    line-height: 2.4rem;
                    @media (max-width: 1200px) {
                        text-align: center;
                    }
                }
                .desc_article {
                    margin-top: 3.6rem;
                    font-size: $fontSize14;
                    font-weight: $fontWeight400;
                    color: rgba(0, 0, 0, 0.75);
                    line-height: 2.4rem;
                    word-break: break-all;
                    &:nth-of-type(1) {
                        margin-top: 4rem;
                    }
                }
            }
        }
    }
}
</style>