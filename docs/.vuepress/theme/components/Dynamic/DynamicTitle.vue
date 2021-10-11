<template>
    <div class="dynamic_title_container">
        <div class="dynamic_title_content_container">
            <div class="dynamic_title_content">
                <div class="title">{{ dynamicTitle.title }}</div>
                <div class="sub_title">{{ dynamicTitle.subTitle }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DynamicTitle",
    props: ["dynamicTitle"],
};
</script>

<style lang="stylus">
.dynamic_title_container {
    width: 100%;
    height: 40.8rem;
    background: url(../../assets/news_banner.png) no-repeat center / cover;
    @media (max-width: 768px) {
        background: url(../../assets/news_banner_768.png) no-repeat center / cover;
    }
    @media (max-width: 400px) {
        height: 36rem;
        background: url(../../assets/other_banner.png) no-repeat center / cover;
    }

    .dynamic_title_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;
        @media (max-width: 400px) {
            box-sizing: border-box;
            padding-left: 1.6rem;
            padding-right: 1.6rem;
        }

        .dynamic_title_content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;

            .title {
                font-size: $fontSize48;
                font-weight: $fontWeight500;
                color: #fff;
                line-height: 6.7rem;
                @media (max-width: 400px) {
                    font-size: $fontSize22;
                    text-align: center;
                }
            }
            .sub_title {
                margin-top: 1.6rem;
                font-size: $fontSize20;
                font-weight: $fontWeight400;
                color: #fff;
                line-height: 2.8rem;
                @media (max-width: 400px) {
                    font-size: $fontSize16;
                    text-align: center;
                }
            }
        }
    }
}
</style>