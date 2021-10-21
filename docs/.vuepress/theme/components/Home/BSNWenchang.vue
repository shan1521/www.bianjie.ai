<template>
    <div class="bsnwenchang_container">
        <div class="bsnwenchang_content_container">
            <div class="bsnwenchang_content">
                <div class="bsn_wenchang_left">
                    <a class="bsn_logo" href="https://www.bsnbase.com/" target="_blank" rel="noopener noreferrer">
                        <img src="../../assets/home/bsn_logo.png" alt="">
                    </a>
                    <div class="logo" @click="goBsnWenchangchain">
                        <img src="../../assets/home/bsn-wenchang_logo.png" alt="">
                    </div>
                </div>
                <a class="bsn-wenchang_desc" href="https://bsn-wenchang.bianjie.ai/" target="_blank" rel="noopener noreferrer">{{bsnWenchangchain.description}}</a>
                <a class="go_chain" href="https://bsn-wenchang.bianjie.ai/" target="_blank" rel="noopener noreferrer">
                    <span class="text">{{bsnWenchangchain.moreText}}</span>
                    <i class="iconfont icon-jiantou"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BSNWenchang',
    props: ['bsnWenchangchain'],
    methods: {
        goBsnWenchangchain() {
            window.open('https://bsn-wenchang.bianjie.ai/');
        }
    }
}
</script>

<style lang="stylus">
.bsnwenchang_container {
    width: 100%;
    height: 7.2rem;
    @media (max-width: 870px) {
        height: auto;
    }
    .bsnwenchang_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;
        .bsnwenchang_content {
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
            @media (max-width: 870px) {
                flex-direction: column;
                padding-top: 1.6rem;
                padding-bottom: 1.6rem;
            }
            @media (max-width: 400px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }
            .bsn_wenchang_left {
                display: flex;
                align-items: center;
                .bsn_logo {
                    display: flex;
                    align-items: center;
                    height: 3.6rem;
                    &::after {
                        content: '';
                        display: block;
                        margin-left: 2rem;
                        margin-right: 2rem;
                        width: 0.2rem;
                        height: 80%;
                        background: #000000;
                        opacity: 0.25;
                    }
                    img {
                        height: 100%;
                    }
                }
                .line {
                    margin: 0 0.8rem;
                }
                .logo {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    img {
                        display: inline-block;
                        width: 3.8rem;
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
            .bsn-wenchang_desc {
                display: inline-block;
                font-size: $fontSize16;
                font-weight: $fontWeight400;
                color: rgba(0, 0, 0, 0.65);
                line-height: 1.6rem;
                @media (max-width: 870px) {
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
                color: #0967E9;
                line-height: 1.4rem;
                cursor: pointer;
                @media (max-width: 870px) {
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