<template>
    <div class="partner_title_container">
        <div class="partner_title_content_container">
            <div class="partner_title_content">
                <div class="title">{{ partnerTitle.title }}</div>
                <div class="sub_title">{{ partnerTitle.subTitle }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "partnerTitle",
    props: ["partnerTitle"],
};
</script>

<style lang="stylus">
.partner_title_container {
    width: 100%;
    height: 40.8rem;
    background: skyblue;

    .partner_title_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        .partner_title_content {
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
            }
            .sub_title {
                margin-top: 1.6rem;
                font-size: $fontSize20;
                font-weight: $fontWeight400;
                color: #fff;
                line-height: 2.8rem;
            }
        }
    }
}
</style>