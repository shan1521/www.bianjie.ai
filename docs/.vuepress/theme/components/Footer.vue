<template>
    <div class="footer_container">
        <div class="footer_content_top">
            <div class="top_content">
                <div class="top_content_container">
                    <div class="content_left">
                        <div class="left_img">
                            <img
                                src="../assets/home/logo_footer.png"
                                alt=""
                                class="img"
                            />
                        </div>
                    </div>
                    <div class="content_right">
                        <div class="total">
                            <span class="total_title">公司</span>
                            <a
                                class="irita"
                                href="https://irita.bianjie.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                >IRITA 官网</a
                            >
                            <router-link class="dynamic" to="/news">企业动态</router-link>
                            <router-link class="about" to="/about">关于我们</router-link>
                        </div>
                        <div class="contact">
                            <span class="contact_title">联系我们</span>
                            <span class="email">contact@bianjie.ai</span>
                            <a
                                class="official"
                                href="https://www.bianjie.ai"
                                target="_self"
                                rel="noopener noreferrer"
                                >www.bianjie.ai</a
                            >
                        </div>
                        <div class="focus">
                            <div class="qr_code">
                                <img
                                    src="../assets/home/qrcode_footer.png"
                                    alt=""
                                    class="qr_code_img"
                                />
                            </div>
                            <span class="focus_title">· 扫码关注我们 ·</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_content_bottom">
            <div class="bottom_content">
                <div class="bottom_content_container">
                    <span class="copyright_content">{{
                        `版权所有©2016-${new Date().getFullYear()} 上海边界智能科技有限公司`
                    }}</span>
                    <a
                        href="https://beian.miit.gov.cn/#/Integrated/index"
                        target="_blank"
                        rel="noreferrer noopener"
                        >沪ICP备17020986号</a
                    >
                    <span class="police_content">
                        <a
                            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502009028"
                            target="_blank"
                            rel="noreferrer noopener"
                            >沪公网安备31011502009028号</a
                        >
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style lang='stylus'>
.footer_container {
    width: 100%;
    height: 31.2rem;
    flex: 0 0 31.2rem;

    .footer_content_top {
        width: 100%;
        background: #061939;

        @media (max-width: 768px) {
            height: auto;
            line-height: 2.4rem;
        }

        .top_content {
            box-sizing: border-box;
            padding: 4.8rem 0;
            margin: 0 auto;
            max-width: $contentWidth;
            height: 100%;

            .top_content_container {
                display: flex;
                justify-content: space-between;
                margin: 0 auto;
                max-width: 100rem;
                @media (max-width: 1096px) {
                    box-sizing: border-box;
                    padding-left: 4.8rem;
                    padding-right: 4.8rem;
                }

                @media (max-width: 768px) {
                    flex-direction: column;
                    align-items: center;
                }

                .content_left {
                    .left_img {
                        width: 17.9rem;
                        height: 6rem;

                        img {
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                .content_right {
                    display: flex;
                    font-size: $fontSize14;

                    @media (max-width: 768px) {
                        margin-top: 6rem;
                    }
                    @media (max-width: 575px) {
                        margin-top: 3.2rem;
                        justify-content: space-between;
                    }

                    .total {
                        display: flex;
                        flex-direction: column;

                        @media (max-width: 575px) {
                            margin-top: 2.4rem;
                            align-items: center;
                        }

                        .total_title {
                            font-size: $fontSize14;
                            font-weight: $fontWeight600;
                            color: #fff;
                            line-height: 2.4rem;
                            @media (max-width: 575px) {
                                text-align: center;
                            }

                            &::after {
                                content: '';
                                display: block;
                                margin-top: 0.8rem;
                                width: 5.6rem;
                                height: 0.1rem;
                                background: rgba(255, 255, 255, 0.4);
                            }
                        }

                        .irita {
                            display: inline-block;
                            margin-top: 1.5rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: $whiteColorOpacity;
                            text-align: center;
                            line-height: 2.4rem;
                            white-space: nowrap;
                        }

                        .dynamic {
                            margin-top: 1.2rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: $whiteColorOpacity;
                            line-height: 2.4rem;
                            cursor: pointer;
                        }

                        .about {
                            margin-top: 1.2rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: $whiteColorOpacity;
                            line-height: 2.4rem;
                            cursor: pointer;
                        }
                    }

                    .contact {
                        margin-left: 10rem;
                        display: flex;
                        flex-direction: column;
                        @media (max-width: 1096px) {
                            margin-left: 6rem;
                        }

                        @media (max-width: 575px) {
                            margin-top: 2.4rem;
                            margin-left: 4.8rem;
                            align-items: center;
                        }

                        .contact_title {
                            font-size: $fontSize14;
                            font-weight: $fontWeight600;
                            color: #fff;
                            line-height: 2.4rem;

                            &::after {
                                content: '';
                                display: block;
                                margin-top: 0.8rem;
                                width: 5.6rem;
                                height: 0.1rem;
                                background: rgba(255, 255, 255, 0.4);
                            }
                        }

                        .email {
                            margin-top: 1.5rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: $whiteColorOpacity;
                            line-height: 2.4rem;
                        }

                        .official {
                            margin-top: 1.2rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: $whiteColorOpacity;
                            line-height: 2.4rem;
                        }
                    }

                    .focus {
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
                            margin-top: 0.8rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: #fff;
                            line-height: 2.4rem;
                        }
                    }
                }
            }
        }
    }

    .footer_content_bottom {
        width: 100%;
        height: 4.8rem;
        color: rgba(255, 255, 255, 0.75);
        background: #1C2D49;
        font-size: $fontSize14;
        font-weight: $fontWeight400;

        @media (max-width: 1200px) {
            box-sizing: border-box;
            padding-left: 4.8rem;
            padding-right: 4.8rem;
        }

        @media (max-width: 768px) {
            height: auto;
            line-height: 3rem;
        }

        .bottom_content {
            margin: 0 auto;
            max-width: $contentWidth;
            height: 100%;

            .bottom_content_container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0 auto;
                max-width: 87.6rem;
                height: 100%;

                @media (max-width: 768px) {
                    flex-direction: column;
                    text-align: center;
                }

                a {
                    color: rgba(255, 255, 255, 0.75);
                    cursor: pointer;
                }
            }
        }
    }
}
</style>