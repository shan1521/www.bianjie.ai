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
    background: url(../../assets/about_banner.png) no-repeat center / cover;
    @media (max-width: 768px) {
        background: url(../../assets/about_banner_768.png) no-repeat center / cover;
    }
    @media (max-width: 400px) {
        height: 36rem;
        background: url(../../assets/other_banner.png) no-repeat center / cover;
    }

    .about_title_content_container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        .about_title_content {
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            // padding: 14.8rem 0 14.7rem;
            @media (max-width: 775px) {
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 400px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }
            .title {
                font-size: $fontSize48;
                font-weight: $fontWeight500;
                color: #fff;
                line-height: 6.7rem;
                text-align: center;
                @media (max-width: 400px) {
                    font-size: $fontSize22;
                    text-align: center;
                }
            }
            .sub_title {
                margin-top: 1.8rem;
                font-size: $fontSize20;
                font-weight: $fontWeight400;
                color: #fff;
                line-height: 2.8rem;
                text-align: center;
                @media (max-width: 400px) {
                    font-size: $fontSize16;
                }
            }
        }
    }
}
</style>