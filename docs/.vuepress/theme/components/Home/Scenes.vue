<template>
    <Caption class="scenes" :title="scenesContent.title">
        <ul class="scenes_list">
            <li
                class="scenes_item"
                v-for="(item, index) in scenesContent.scenesList"
                :key="index"
            >
                <div class="scenes_item_content" :class="{scenes_item_content_inter: edition}">
                    <div class="scenes_item_show" :class="{scenes_item_show_en: isEn}">
                        <div class="item_icon">
                            <img
                                :src="differentSceneImg(item.iconName)"
                                alt=""
                            />
                        </div>
                        <div class="title">{{ item.title }}</div>
                        <ul v-if="!isEn" class="intro_list">
                            <li
                                class="intro_item"
                                v-for="(v, i) in item.intro"
                                :key="i"
                            >
                                {{ v.text }}
                            </li>
                        </ul>
                        <p v-else class="intro_list_en">{{ item.introEn }}</p>
                    </div>
                    <div class="scenes_item_hide">
                        <div class="item_icon">
                            <img
                                :src="differentSceneImg(item.iconName)"
                                alt=""
                            />
                        </div>
                        <div class="title">{{ item.title }}</div>
                        <div class="desc">{{ item.description }}</div>
                        <router-link v-if="!edition" :to="item.route">
                            <Detail></Detail>
                        </router-link>
                    </div>
                </div>
            </li>
        </ul>
        <MoreBlue v-if="!edition" class="scene_btn" :text="scenesContent.moreText" @click.native="goAppScenes"></MoreBlue>
    </Caption>
</template>

<script>
import MoreBlue from "@theme/components/Common/MoreBlue.vue";
import Detail from "@theme/components/Common/Detail.vue";
import Caption from "@theme/components/Common/Caption.vue";
import { getCurrentEdition } from '@theme/util';
import { LANG_OPTIONS } from '@theme/constants';
export default {
    name: "Scenes",
    props: ["scenesContent"],
    data() {
        return {
            edition: getCurrentEdition()
        }
    },
    computed: {
        differentSceneImg() {
            return function (imgName) {
                return `/home/scenes/${imgName}`;
            };
        },
        isEn() {
            return this.$store.state.currentLang === '/en/';
        }
    },
    methods: {
        goAppScenes(){
            this.$router.push(`${this.$store.state.currentLang}applications/e-licence`);
        }
    },
    components: {
        MoreBlue,
        Detail,
        Caption
    },
};
</script>

<style lang="stylus">
.scenes {
    .scenes_list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3.2rem;
        margin: 6rem auto 0;
        max-width: 105.6rem;

        @media (max-width: 1110px) {
            margin: 4.8rem auto 0;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 4.8rem;
            grid-row-gap: 4.8rem;
            max-width: 51.2rem;
        }

        @media (max-width: 608px) {
            grid-template-columns: repeat(1, 1fr);
            grid-row-gap: 2.4rem;
            max-width: 24rem;
        }

        @media (max-width: 570px) {
            margin: 2.4rem auto 0;
            grid-row-gap: 1.6rem;
        }

        .scenes_item {
            position: relative;
            max-width: 24rem;
            min-height: 33.8rem;
            .scenes_item_content {
                position: relative;
                &:hover {
                    .scenes_item_hide {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        -webkit-animation: transScale .3s ease-in-out;
                        animation: transScale .3s ease-in-out;
                        animation-fill-mode: forwards;
                    }
                }
                .scenes_item_show {
                    box-sizing: border-box;
                    padding: 4.4rem 1.6rem 2.4rem;
                    width: 24rem;
                    min-height: 33.6rem;
                    border: 0.1rem solid #E1E5F4;
                    border-radius: 0.4rem;
                    text-align: center;
                    cursor: pointer;

                    .item_icon {
                        height: 10rem;

                        img {
                            height: 100%;
                        }
                    }

                    .title {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-top: 3.2rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        color: #000;
                        line-height: 2.4rem;

                        &::after {
                            content: '';
                            display: block;
                            margin-top: 0.8rem;
                            width: 12rem;
                            height: 0.1rem;
                            background: #e9e9e9;
                        }
                    }

                    .intro_list {
                        margin: 1.5rem auto 0;

                        .intro_item {
                            margin-top: 0.8rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: rgba(0, 0, 0, 0.75);
                            line-height: 2rem;

                            &:first-child {
                                margin-top: 0;
                            }
                        }
                    }
                    .intro_list_en {
                        margin-top: 1.5rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, 0.75);
                        line-height: 1.5rem;
                    }
                }
                .scenes_item_show_en {
                    min-height: 38rem;
                    max-height: 38rem;
                }
                .scenes_item_hide {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    box-sizing: border-box;
                    padding: 4.4rem 1.6rem 3.6rem;
                    width: 28.8rem;
                    min-height: 41.2rem;
                    border: 0.1rem solid #E1E5F4;
                    border-radius: 0.4rem;
                    cursor: pointer;
                    background: #fff;
                    z-index: 2;
                    border: 0.1rem solid $highlightDetailColor;
                    border-bottom: 0.6rem solid $highlightDetailColor;
                    border-radius: 0.4rem;
                    display: none;
                    .item_icon {
                        height: 10rem;

                        img {
                            height: 100%;
                        }
                    }

                    .title {
                        margin-top: 3.2rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        color: #000;
                        line-height: 2.4rem;
                        text-align: center;

                        &::after {
                            content: '';
                            display: block;
                            margin-top: 0.8rem;
                            width: 12rem;
                            height: 0.1rem;
                            background: #e9e9e9;
                        }
                    }
                    .desc {
                        display: block;
                        margin: 1.1rem auto 0;
                        max-width: 25.6rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, 0.75);
                        line-height: 2.4rem;
                    }

                    .detail_container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 1.2rem;
                        color: $highlightDetailColor;

                        .detail {
                            font-size: $fontSize14;
                            font-weight: $fontWeight500;
                            line-height: 2rem;
                        }

                        .iconfont {
                            margin-left: 0.4rem;
                            font-size: $fontSize14;
                        }
                    }
                }
            }
            .scenes_item_content_inter {
                .scenes_item_show {
                    cursor: default;
                }
                &:hover {
                    .scenes_item_hide {
                        display: none;
                    }
                }
            }
        }
    }

    .scene_btn {
        margin: 6rem auto 0;
        max-width: $contentWidth;

        &:hover {
            cursor: pointer;
        }
    }
}

@keyframes transScale {
    0% {
        transform: translate(-50%,-50%);
    }
    100% {
        transform: translate(-50%,-50%);
    }
}
@-webkit-keyframes transScale {
    0% {
        transform: translate(-50%,-50%);
    }
    100% {
        transform: translate(-50%,-50%);
    }
}
</style>