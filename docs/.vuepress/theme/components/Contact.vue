<template>
    <div class="focus">
        <div class="qr_code">
            <img src="../assets/home/qrcode_footer.png"
                alt=""
                class="qr_code_img" />
        </div>
        <span class="focus_title">· 扫码关注我们 ·</span>
    </div>
</template>

<style lang='stylus' scoped>
.focus {
    position: fixed;
    right: 4.8rem;
    bottom: 10rem;
    margin-left: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1096px) {
        margin-left: 6rem;
    }

    @media (max-width: 575px) {
        display: none;
    }

    .qr_code {
        width: 13.6rem;
        height: 13.6rem;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .focus_title {
        margin-top: 0.6rem;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        line-height: 24px;
    }
}
</style>