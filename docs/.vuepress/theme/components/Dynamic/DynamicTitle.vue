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
    background: skyblue;

    .dynamic_title_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

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