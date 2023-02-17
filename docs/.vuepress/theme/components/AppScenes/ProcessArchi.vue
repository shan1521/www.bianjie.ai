<template>
    <div class="processarchi_container">
        <div class="processarchi_content_container">
            <div class="processarchi_content">
                <div class="processarchi_title">{{processContent.title}}</div>
                <div class="processarchi_img">
                    <img :src="differentJiagou(processContent.src)" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProcessArchi',
    props: ['processContent'],
    computed: {
        differentJiagou() {
            return function(imgName) {
                return `/appscenes/process/${imgName}`;
            }
        }
    }
}
</script>

<style lang="stylus">
.processarchi_container {
    width: 100%;
    .processarchi_content_container {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 4.8rem 0 6rem;
        max-width: $contentWidth;
        height: 100%;
        .processarchi_content {
            margin: 0 auto;
            max-width: 100rem;
            @media (max-width: 1096px) {
                box-sizing: border-box;
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 375px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }
            .processarchi_title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
                text-align: center;
            }
            .processarchi_img {
                margin-top: 4.8rem;
                max-width: 100rem;
                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>