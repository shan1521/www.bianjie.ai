<template>
    <div class="products_title">
        <div class="title_container">
            <div class="title_content">
                <span class="title">{{ titleContent.title }}</span>
                <span class="sub_title">{{ titleContent.subTitle }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductsTitle",
    props: ["titleContent"]
};
</script>

<style lang="stylus" scoped>
.products_title {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    min-height: 36rem;
    background: url(../../assets/product/irita/irita_banner.png) no-repeat center / cover;
    @media (max-width: 768px) {
        background: url(../../assets/product/irita/irita_banner_pad.png) no-repeat center / cover;
    }
    @media (max-width: 420px) {
        height: 25rem;
        background: url(/banner_phone.png) no-repeat center / cover;
    }

    .title_container {
        margin: 0 auto;
        padding-top: 11.2rem;
        width: 100%;
        max-width: $contentWidth;

        .title_content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
            margin: 0 auto;
            max-width: 109.6rem;
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
                font-weight: $fontWeight600;
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
                max-width: 60rem;
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