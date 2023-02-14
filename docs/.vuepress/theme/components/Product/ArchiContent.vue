<template>
    <div class="archi_container">
        <div class="archi_content_container">
            <div class="archi_content">
                <div class="title">{{ architectureContent.title }}</div>
                <div class="archi_img">
                    <img :src="$withBase(`/product/iritahub/${architectureContent.architectureDiagram}`)" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArchiContent",
    props: ["architectureContent"],
};
</script>

<style lang="stylus">
.archi_container {
    width: 100%;
    background: #FCFCFC;

    .archi_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        .archi_content {
            box-sizing: border-box;
            padding: 4.8rem 0 4.8rem;
            margin: 0 auto;
            max-width: 94.8rem;
            height: 100%;
            text-align: center;
            @media (max-width: 1000px) {
                padding-left: 3.2rem;
                padding-right: 3.2rem;
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
            }
            .archi_img {
                margin-top: 4rem;
                width: 100%;
                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>