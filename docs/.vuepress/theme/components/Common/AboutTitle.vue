<template>
    <div class="about_title_container">
        <div class="about_title_content_container">
            <div class="about_title_content">
                <span class="title">{{ aboutTitle.title }}</span>
                <span class="sub_title">{{ aboutTitle.subTitle }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutTitle",
    props: ["aboutTitle"],
};
</script>

<style lang="stylus">
.about_title_container {
    width: 100%;
    height: 40.8rem;
    background: skyblue;

    .about_title_content_container {
        margin: 0 auto;
        max-width: $contentWidth;

        .about_title_content {
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            padding: 14.8rem 0 14.7rem;

            .title {
                font-size: $fontSize48;
                font-weight: $fontWeight500;
                color: #fff;
                line-height: 6.7rem;
            }
            .sub_title {
                margin-top: 1.8rem;
                font-size: $fontSize20;
                font-weight: $fontWeight400;
                color: #fff;
                line-height: 2.8rem;
            }
        }
    }
}
</style>