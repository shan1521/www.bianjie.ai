<template>

    <div class="focus"
        @mouseover="show"
        @mouseout="show">

        <!-- 二维码图标 -->
        <div class="qr_div"
            v-show="isShow">
            <div class="qr_code">
                <img src="../assets/home/qrcode_footer.png"
                    alt=""
                    class="qr_code_img" />
            </div>
            <div class="focus_title">· 扫码关注我们 ·</div>
            <div class="border"></div>
            <!-- 邮箱小图标 -->
            <div class="yx">
                <span class="yx_img"><img src="../assets/icon_yx.png"
                        alt=""></span>
                <span class="yx_text">contact@bianjie.ai</span>
            </div>
        </div>

        <!-- 联系我们图标 -->
        <div class="contact_img">
            <img src="../assets/contact.png"
                alt="">
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        show() {
            this.isShow = !this.isShow;
        },
    },
};
</script>
<style lang='stylus' scoped>
.focus {
    z-index: 10;
    height: 28.8rem;
    position: fixed;
    right: 4.8rem;
    bottom: 13.2rem;
    margin-left: 10rem;
    display: flex;
    // flex-direction: column;
    align-items: center;

    @media (max-width: 1096px) {
        margin-left: 6rem;
    }

    @media (max-width: 575px) {
        display: none;
    }

    .qr_div {
        // z-index: 100;
        // position: fixed;
        // right: 10rem;
        // bottom: 4.5rem;
        margin-right: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 21rem;
        height: 28.8rem;
        background: #FFFFFF;
        box-shadow: 0px 0px 12px 0px rgba(7, 24, 78, 0.08);
        border-radius: 4px;
        border: 1px solid #E1E5F4;

        @media (max-width: 768px) {
            right: 8.4rem;
        }

        @media (max-width: 400px) {
            right: 7.2rem;
        }

        .border {
            width: 12rem;
            height: 0.1rem;
            background: #000000;
            opacity: 0.1;
            // margin-top: 1.2rem;
        }

        .focus_title {
            align-self: center;
            height: 2.4rem;
            font-size: 1.4rem;
            font-weight: 400;
            color: #000000;
            line-height: 2.4rem;
        }

        .yx {
            .yx_img img {
                margin-right: 0.6rem;
                width: 1.7rem;
                height: 1.2rem;
            }

            .yx_text {
                height: 2.4rem;
                font-size: 1.4rem;
                font-weight: 400;
                color: #000000;
                line-height: 2.4rem;
            }
        }

        .qr_code {
            width: 17rem;
            height: 17rem;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .contact_img img {
        // z-index: 100;
        // position: fixed;
        // right: 4.8rem;
        // bottom: 13.2rem;
        align-self: center;
        width: 4rem;
        height: 13rem;
        border-radius: 0.4rem;

        @media (max-width: 768px) {
            right: 3.2rem;
        }

        @media (max-width: 400px) {
            right: 2rem;
        }
    }
}
</style>