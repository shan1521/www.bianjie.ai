<template>
    <div class="scenes_container">
        <div class="scenes_content_container">
            <div class="scenes_content">
                <span class="title">{{ scenesContent.title }}</span>
                <ul class="scenes_list">
                    <li
                        class="scenes_item"
                        v-for="(item, index) in scenesContent.scenesList"
                        :key="index"
                    >
                        <div class="scenes_item_content">
                            <div class="scenes_item_show">
                                <div class="item_icon">
                                    <img
                                        :src="differentSceneImg(item.iconName)"
                                        alt=""
                                    />
                                </div>
                                <div class="title">{{ item.title }}</div>
                                <ul class="intro_list">
                                    <li
                                        class="intro_item"
                                        v-for="(v, i) in item.intro"
                                    >
                                        {{ v.text }}
                                    </li>
                                </ul>
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
                                <router-link :to="item.route">
                                    <Detail></Detail>
                                </router-link>
                            </div>
                        </div>
                    </li>
                </ul>
                <More class="scene_btn" :text="scenesContent.moreText" @click.native="goAppScenes"></More>
            </div>
        </div>
    </div>
</template>

<script>
import More from "@theme/components/Common/More.vue";
import Detail from "@theme/components/Common/Detail.vue";
export default {
    name: "Scenes",
    props: ["scenesContent"],
    computed: {
        differentSceneImg() {
            return function (imgName) {
                return `/home/scenes/${imgName}`;
            };
        },
    },
    methods: {
        goAppScenes(){
            this.$router.push('/applications/e-licence');
        }
    },
    components: {
        More,
        Detail
    },
};
</script>

<style lang="stylus">
.scenes_container {
    width: 100%;

    .scenes_content_container {
        box-sizing: border-box;
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

        .scenes_content {
            margin: 0 auto;
            max-width: 105.6rem;
            min-height: 100%;
            text-align: center;
            @media (max-width: 1110px) {
                max-width: 52.8rem;
            }
            @media (max-width: 768px) {
                margin-top: 2.4rem;
            }
            @media (max-width: 570px) {
                max-width: 24rem;
            }

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

                &::after {
                    content: '';
                    display: block;
                    margin-top: 2.4rem;
                    width: 8rem;
                    height: 0.4rem;
                    background: #0967E9;
                    @media (max-width: 400px) {
                        margin-top: 1.6rem;
                    }
                }
            }

            .scenes_list {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-row-gap: 2rem;
                grid-column-gap: 3.2rem;
                margin: 6rem auto 0;
                @media (max-width: 1110px) {
                    margin: 4.8rem auto 0;
                    grid-template-columns: repeat(2, 1fr);
                    grid-column-gap: 4.8rem;
                    grid-row-gap: 4.8rem;
                }
                @media (max-width: 570px) {
                    margin: 2.4rem auto 0;
                    grid-template-columns: repeat(1, 1fr);
                    grid-row-gap: 2.4rem;
                }

                .scenes_item {
                    position: relative;
                    max-width: 24rem;
                    min-height: 33.6rem;
                    .scenes_item_content {
                        position: relative;
                        &:hover {
                            .scenes_item_hide {
                                display: block;
                                -webkit-animation: transScale .3s ease-in-out;
                                animation: transScale .3s ease-in-out;
                                animation-fill-mode: forwards;
                            }
                        }
                        .scenes_item_show {
                            box-sizing: border-box;
                            padding: 4.4rem 1.6rem 3.6rem;
                            width: 24rem;
                            min-height: 33.6rem;
                            border: 0.1rem solid #E1E5F4;
                            border-radius: 0.4rem;
                            cursor: pointer;

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
                            border: 0.1rem solid #0967E9;
                            border-bottom: 0.6rem solid #0967E9;
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
                                color: #0967E9;

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
                }
            }

            .scene_btn {
                margin: 6rem auto 0;
                max-width: $contentWidth;
                border: 0.1rem solid #0967E9;
                border-radius: 0.2rem;

                &:hover {
                    cursor: pointer;
                }
            }
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