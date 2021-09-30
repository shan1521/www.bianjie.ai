<template>
    <div class="bsnwenchang_container">
        <div class="bsnwenchang_content_container">
            <div class="bsnwenchang_content">
                <div class="logo">
                    <img src="../../assets/home/bsn-wenchang_logo.png" alt="">
                    <span class="logo_text">文昌链</span>
                </div>
                <div class="bsn-wenchang_desc">边界智能基于 IRITA 打造，并成为首批在 BSN 环境上线的开放联盟链</div>
                <a class="go_chain" href="https://bsn-wenchang.bianjie.ai/" target="_blank" rel="noopener noreferrer">
                    <span class="text">前往上链</span>
                    <i class="iconfont icon-jiantou"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BSNWenchang',
    // methods: {
    //     goChain() {
    //         window.open()
    //     }
    // }
}
</script>

<style lang="stylus">
.bsnwenchang_container {
    width: 100%;
    height: 7.2rem;
    @media (max-width: 800px) {
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
            max-width: 104rem;
            height: 100%;
            @media (max-width: 1075px) {
                box-sizing: border-box;
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 800px) {
                flex-direction: column;
                padding-top: 1.6rem;
                padding-bottom: 1.6rem;
            }
            @media (max-width: 400px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }
            .logo {
                display: flex;
                align-items: center;
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
            .bsn-wenchang_desc {
                font-size: $fontSize16;
                font-weight: $fontWeight400;
                color: rgba(0, 0, 0, 0.65);
                line-height: 1.6rem;
                @media (max-width: 800px) {
                    margin-top: 1.6rem;
                    text-align: center;
                    line-height: 2rem;
                }
            }
            .go_chain {
                font-size: $fontSize14;
                font-weight: $fontWeight600;
                color: #0967E9;
                line-height: 1.4rem;
                cursor: pointer;
                @media (max-width: 800px) {
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