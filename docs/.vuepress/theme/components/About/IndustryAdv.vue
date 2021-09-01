<template>
    <div class="industryadv_container">
        <div class="industryadv_content">
            <div class="title">
                {{ industryAdvantage.title }}
            </div>
            <div class="industry_swiper">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IndustryAdv",
    props: ["industryAdvantage"],
};
</script>

<style lang="stylus">
.industryadv_container {
    width: 100%;
    height: 86.8rem;

    .industryadv_content {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 8rem 0 12rem;
        max-width: 155.2rem;
        height: 100%;

        .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: $fontSize32;
            font-weight: $fontWeight500;
            color: #000;
            line-height: 3.2rem;

            &::after {
                content: '';
                display: block;
                margin-top: 2.4rem;
                width: 16rem;
                height: 0.4rem;
                background: #0967E9;
            }
        }
        .industry_swiper {
            margin-top: 4.8rem;
        }
    }
}
</style>