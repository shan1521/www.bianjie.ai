<template>
    <div class="iritaopb_intro_container">
        <div class="iritaopb_intro_content_container">
            <div class="iritaopb_intro_content">
                <div class="title">{{ iritaopbIntroContent.title }}</div>
                <p
                    class="desc_article"
                    v-for="(item, index) in iritaopbIntroContent.description"
                    :key="index"
                >
                    {{ item.paragraph }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IritaOpbIntro",
    props: ["iritaopbIntroContent"],
};
</script>

<style lang="stylus">
.iritaopb_intro_container {
    width: 100%;
    min-height: 34.4rem;

    .iritaopb_intro_content_container {
        margin: 0 auto;
        max-width: $contentWidth;

        .iritaopb_intro_content {
            box-sizing: border-box;
            padding: 6.4rem 0 4.8rem;
            margin: 0 auto;
            max-width: 113.6rem;
            @media (max-width: 1296px) {
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 375px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }

            .title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
                text-align: center;
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
            }
        }
    }
}
</style>