<template>
    <div class="swiper_home_container" :style="differentOpenImg(content.img)">
        <div class="swiper_home_content">
            <span class="title">{{ content.title }}</span>
            <span class="sub_title">{{ content.subTitle }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "SwiperHome",
    props: ["content"],
    computed: {
        differentOpenImg() {
            return function (imgName) {
                return `background:url(/home/${imgName}) no-repeat center / cover;`;
            };
        },
    },
};
</script>

<style lang="stylus">
.swiper_home_container {
    width: 100%;
    height: 100%;

    .swiper_home_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        .title {
            font-size: $fontSize56;
            font-weight: $fontWeight500;
            color: #fff;
            line-height: 5.6rem;
        }

        .sub_title {
            margin-top: 4.3rem;
            font-size: $fontSize20;
            font-weight: $fontWeight400;
            color: #fff;
            line-height: 2rem;
        }
    }
}
</style>