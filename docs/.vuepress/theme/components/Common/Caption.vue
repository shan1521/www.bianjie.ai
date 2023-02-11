<template>
    <div class="caption">
        <div class="caption_container">
            <div class="caption_content">
                <span class="title">{{ title }}</span>
                <span v-if="subTitle" class="sub_title">{{ subTitle }}</span>
                <div class="line"></div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Caption',
    props: {
        title: {
            type: String
        },
        subTitle: {
            type: String
        }
    }
}

</script>

<style lang="stylus" scoped>
    .caption {
        width: 100%;
        min-height: 53.6rem;
        .caption_container {
            padding: 8rem 0;
            margin: 0 auto;
            max-width: $contentWidth;
            height: 100%;
            @media (max-width: 768px) {
                padding: 6rem 0;
            }

            @media (max-width: 375px) {
                padding: 4rem 0;
            }
            .caption_content {
                display: flex;
                flex-direction: column;
                align-items: center;
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: $fontSize24;
                    font-weight: $fontWeight500;
                    color: #000;
                    line-height: 2.4rem;

                    @media (max-width: 400px) {
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        line-height: 1.6rem;
                    }
                }
                .sub_title {
                    margin-top: 1.6rem;
                    width: 100%;
                    font-size: $fontSize14;
                    font-weight: $fontWeight400;
                    color: rgba(0, 0, 0, 0.75);
                    line-height: 2rem;
                }
                .line {
                    margin-top: 2.4rem;
                    width: 8rem;
                    height: 0.4rem;
                    background: $highlightDetailColor;
                    @media (max-width: 400px) {
                        margin-top: 1.6rem;
                    }
                }
            }
        }
    }
</style>