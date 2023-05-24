<template>
    <div class="wenchang_container">
        <div class="wenchang_content_container">
            <div class="wenchang_content">
                <div class="wenchang_left">
                    <div class="logo"
                        @click="gowenchangchain">
                        <img src="../../assets/home/wenchang_logo.png"
                            alt="" />
                    </div>
                </div>
                <a class="wenchang_desc"
                    href="https://wenchang.bianjie.ai/"
                    target="_blank"
                    rel="noopener noreferrer">{{wenchangchain.description}}</a>
                <a class="go_chain"
                    href="https://wenchang.bianjie.ai/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span class="text">{{wenchangchain.moreText}}</span>
                    <i class="iconfont icon-jiantou"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Wenchang",
    props: ["wenchangchain"],
    methods: {
        gowenchangchain() {
            window.open("https://wenchang.bianjie.ai/");
        },
    },
};
</script>

<style lang="stylus">
.wenchang_container {
    box-shadow: 0px 0px 12px 0px rgba(7, 24, 78, 0.08);
    width: 100%;
    height: 7.2rem;

    @media (max-width: 910px) {
        height: auto;
    }

    .wenchang_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        .wenchang_content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            max-width: 105.6rem;
            height: 100%;

            @media (max-width: 1240px) {
                box-sizing: border-box;
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }

            @media (max-width: 910px) {
                flex-direction: column;
                padding-top: 1.6rem;
                padding-bottom: 1.6rem;
            }

            @media (max-width: 400px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }

            .wenchang_left {
                display: flex;
                align-items: center;

                .logo {
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    img {
                        display: inline-block;
                        width: auto;
                        height: 3.6rem;
                    }

                    .logo_text {
                        margin-left: 0.8rem;
                        display: inline-block;
                        font-size: $fontSize16;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, 0.65);
                        line-height: 1.6rem;
                    }
                }
            }

            .wenchang_desc {
                display: inline-block;
                font-size: $fontSize16;
                font-weight: $fontWeight400;
                color: rgba(0, 0, 0, 0.65);
                line-height: 1.6rem;

                &:hover {
                    color: $highlightDetailColor;
                }

                @media (max-width: 910px) {
                    margin-top: 1.6rem;
                    text-align: center;
                    line-height: 2rem;
                }
            }

            .go_chain {
                display: flex;
                align-items: center;
                font-size: $fontSize14;
                font-weight: $fontWeight600;
                color: $highlightDetailColor;
                line-height: 1.4rem;
                cursor: pointer;

                @media (max-width: 910px) {
                    margin-top: 1.6rem;
                    text-align: center;
                }

                .text {
                    margin-right: 0.4rem;
                }
            }
        }
    }
}
</style>
