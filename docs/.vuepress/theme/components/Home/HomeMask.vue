<template>
    <div class="mask_container" @click="changeShowMask">
        <div class="mask_content">
            <div class="mask_content_left">
                <div class="qr_code">
                    <img src="../../assets/home/qrcode_footer.png" alt="">
                </div>
                <span class="img_desc">微信公众号</span>
            </div>
            <div class="mask_content_right">
                <div class="email_img">
                    <img src="../../assets/home/email.png" alt="">
                </div>
                <span class="img_desc">contact@bianjie.ai</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeMask',
    props: ['showMask'],
    methods: {
        changeShowMask(){
            this.$emit('update:showMask', false);
        }
    }
}
</script>

<style lang="stylus">
.mask_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    .mask_content {
        display: flex;
        box-sizing: border-box;
        padding: 2.4rem 6rem;
        max-width: 58.7rem;
        background: #fff;
        border-radius: 0.4rem;
        @media (max-width: 500px) {
            flex-direction: column;
            align-items: center;
        }
        .mask_content_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .qr_code {
                max-width: 14.5rem;
                height: 14.5rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .img_desc {
                margin-top: 2.4rem;
                font-size: $fontSize14;
                font-weight: $fontWeight400;
                color: #000;
                line-height: 1.6rem;
            }
        }
        .mask_content_right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 8rem;
            @media (max-width: 500px) {
                margin-top: 2.4rem;
                margin-left: 0;
            }
            .email_img {
                width: 13.6rem;
                height: 14rem;
                img {
                    width: 100%;
                }
            }
            .img_desc {
                margin-top: 2.4rem;
                font-size: $fontSize14;
                font-weight: $fontWeight400;
                color: #000;
                line-height: 1.6rem;
            }
        }
    }
}
</style>