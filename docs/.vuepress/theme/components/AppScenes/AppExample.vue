<template>
    <ul class="app_example_list">
        <li class="app_example_item" v-for="(item, index) in appExample" :key="index">
            <ImgContent class="app_example" :position="item.position">
                <template #img>
                    <img class="app_example_img"
                        :style="diffPosition(item.position)"
                        :src="$withBase(`/appscenes/${item.banner}`)" alt="" />
                </template>
                <template #content>
                    <div class="category" :class="{category_en: isEn}">
                        <i class="iconfont" :class="item.icon"></i>
                        <span class="category_text">{{ item.category }}</span>
                    </div>
                    <p class="app_example_title">{{ item.title }}</p>
                    <ul class="app_example_desc">
                        <li class="app_example_desc_item" v-for="(desc, dIndex) in item.description" :key="dIndex">
                            {{ desc.paragraph}}
                        </li>
                    </ul>
                </template>
            </ImgContent>
        </li>
    </ul>
</template>

<script>
import { LANG_OPTIONS } from '../../constants';
import ImgContent from '../Common/ImgContent.vue';
export default {
    name: 'AppExample',
    props: ['appExample'],
    data() {
        return {
            currentLang: this.$store.state.currentLang,
            space: 4.8
        }
    },
    computed: {
        isEn() {
            return this.currentLang === LANG_OPTIONS[0].value;
        }
    },
    methods: {
        diffPosition(position) {
            switch(position) {
                case 0:
                    return `margin-right: ${this.space}rem`;
                case 1:
                    return `margin-left: ${this.space}rem`;
            }
        }
    },
    components: {
        ImgContent
    }
}
</script>

<style lang="stylus" scoped>
.app_example_list {
    box-sizing: border-box;
    padding: 4.8rem 4.8rem 10rem;
    width: 100%;
    @media (max-width: 420px) {
        padding: 3.6rem 1.6rem 6rem;
    }
    .app_example_item {
        margin: 10rem auto 0;
        max-width: 108rem;
        &:first-child {
            margin-top: 0;
        }
        @media (max-width: 960px) {
            margin-top: 6rem;
        }
        .app_example {
            .app_example_img {
                width: 40.6rem;
                transform: translateY(3rem);
                @media (max-width: 960px) {
                    display: none;
                }
            }
            .img_content_right {
                margin-left: 4.8rem;
                .category {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0.2rem 0.8rem;
                    max-width: 8.2rem;
                    border-radius: 1.2rem;
                    border: 0.1rem solid #E8EBF5;
                    .iconfont {
                        font-size: $fontSize14;
                        color: $highlightDetailColor;
                    }
                    .category_text {
                        display: inline-block;
                        margin-left: 0.4rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0,0,0,0.65);
                    }
                }
                .category_en {
                    max-width: 16rem;
                }
                .app_example_title {
                    margin-top: 1.2rem;
                    font-size: $fontSize24;
                    font-weight: $fontWeight600;
                    color: #000;
                    line-height: 2.8rem;
                }
                .app_example_desc {
                    .app_example_desc_item {
                        margin-top: 2.4rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0,0,0,0.65);
                        line-height: 2.8rem;
                    }
                }
            }
        }
    }
}
</style>