<template>
    <div class="iritahub_title_container">
        <div class="iritahub_title_content_container">
            <div class="iritahub_title_content">
                <div class="title">{{ titleContent.title }}</div>
                <div class="sub_title">{{ titleContent.subTitle }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IritaHubTitle",
    props: ["titleContent"],
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
                    text-align: center;
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
        }
    }
}
</style>