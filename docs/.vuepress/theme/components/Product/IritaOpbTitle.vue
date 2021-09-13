<template>
    <div class="iritaopb_title_container">
        <div class="iritaopb_title_content_container">
            <div class="iritaopb_title_content">
                <div class="title">{{ iritaopbTitleContent.title }}</div>
                <div class="sub_title">{{ iritaopbTitleContent.subTitle }}</div>
                <More class="more_btn" :text="iritaopbTitleContent.moreText" @click.native="goComming"></More>
            </div>
        </div>
    </div>
</template>

<script>
import More from "@theme/components/Common/More.vue";
export default {
    name: "IritaOpbTitle",
    props: ["iritaopbTitleContent"],
    methods: {
        goComming(){
            this.$router.push('/products/IRITAOPB-敬请期待');
        }
    },
    components: {
        More,
    }
};
</script>

<style lang="stylus">
.iritaopb_title_container {
    width: 100%;
    height: 36rem;
    background: url('../../assets/product/iritaopb/iritaopb_banner.png') no-repeat center / cover;

    .iritaopb_title_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        .iritaopb_title_content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
            margin: 0 auto;
            max-width: 109.6rem;
            height: 100%;

            .title {
                font-size: $fontSize40;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 4.8rem;
            }

            .sub_title {
                margin-top: 2.4rem;
                font-size: $fontSize20;
                font-weight: $fontWeight400;
                color: rgba(0, 0, 0, 0.75);
                line-height: 2.4rem;
            }

            .more_btn {
                margin-top: 4rem;
                border: 0.1rem solid #0967E9;
                border-radius: 0.2rem;
            }
        }
    }
}
</style>