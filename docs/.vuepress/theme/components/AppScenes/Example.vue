<template>
    <div class="example_container">
        <div class="example_content_container">
            <div class="example_content">
                <div class="example_title">{{exampleContent.title}}</div>
                <div class="example">
                    <div class="example_img">
                        <img :src="exampleContent.example.imgName" alt="">
                    </div>
                    <div class="example_right">
                        <div class="example_text">{{exampleContent.example.text}}</div>
                        <div class="example_desc">{{exampleContent.example.intro}}</div>
                        <a class="example_link" v-if="!exampleContent.example.route && exampleContent.example.link" :href="exampleContent.example.link">
                            <More class="more_btn" :text="exampleContent.example.moreText"></More>
                        </a>
                        <router-link class="example_link" v-if="exampleContent.example.route" :to="exampleContent.example.route">
                            <More class="more_btn" :text="exampleContent.moreText"></More>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import More from '@theme/components/Common/More';
export default {
    name: 'Example',
    props: ['exampleContent'],
    components: {
        More
    }
}
</script>

<style lang="stylus">
.example_container {
    width: 100%;
    min-height: 44.8rem;
    .example_content_container {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 6rem 0 12rem;
        max-width: $contentWidth;
        .example_content {
            margin: 0 auto;
            max-width: 100rem;
            height: 31.2rem;
            .example_title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
                text-align: center;
            }
            .example {
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 4rem;
                padding-right: 6rem;
                height: 100%;
                border: 0.1rem solid #E1E5F4;
                .example_img {
                    margin-right: 6rem;
                    max-width: 36rem;
                    height: 100%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .example_right {
                    max-width: 52rem;
                    .example_text {
                        font-size: $fontSize16;
                        font-weight: $fontWeight500;
                        color: #000;
                        line-height: 2.4rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .example_desc {
                        margin-top: 1.6rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0,0,0,0.74);
                        line-height: 2.4rem;
                    }
                    .example_link {
                        display: block;
                        margin-top: 2.4rem;
                        .more_btn {
                            border: 0.1rem solid #0967E9;
                            border-radius: 0.2rem;
                        }
                    }
                }
            }
        }
    }
}
</style>