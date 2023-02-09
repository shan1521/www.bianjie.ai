<template>
    <div class="dynamichome_container">
        <div class="dynamichome_content_container">
            <div class="dynamichome_content">
                <span class="title">{{ dynamicContent.title }}</span>
                <div class="content">
                    <div class="content_top">
                        <div class="important">
                            <div class="important_img">
                                <a
                                    v-if="
                                        !dynamicContent.mostImportant.route &&
                                        dynamicContent.mostImportant.link
                                    "
                                    :href="dynamicContent.mostImportant.link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="link_img"
                                >
                                    <img
                                        :src="dynamicContent.mostImportant.imgName"
                                        alt=""
                                    />
                                </a>
                                <router-link
                                    v-if="dynamicContent.mostImportant.route"
                                    :to="dynamicContent.mostImportant.route"
                                    class="link_img"
                                >
                                    <img
                                        :src="dynamicContent.mostImportant.imgName"
                                        alt=""
                                    />
                                </router-link>
                                
                            </div>
                            <div class="important_overview">
                                <div class="date">
                                    {{ dynamicContent.mostImportant.date }}
                                </div>
                                <a
                                    v-if="
                                        !dynamicContent.mostImportant.route &&
                                        dynamicContent.mostImportant.link
                                    "
                                    :href="dynamicContent.mostImportant.link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="link_title"
                                >
                                    {{ dynamicContent.mostImportant.title }}
                                </a>
                                <router-link
                                    v-if="dynamicContent.mostImportant.route"
                                    :to="dynamicContent.mostImportant.route"
                                    class="link_title"
                                >
                                    {{ dynamicContent.mostImportant.title }}
                                </router-link>
                                <div class="intro">
                                    {{ dynamicContent.mostImportant.intro }}
                                </div>
                            </div>
                        </div>
                        <div class="dynamic_list_container">
                            <ul class="dynamic_list">
                                <li
                                    class="dynamic_item"
                                    v-for="(
                                        item, index
                                    ) in dynamicContent.dynamicList"
                                    :key="index"
                                >
                                    <div class="item_top">
                                        <a
                                            v-if="!item.route && item.link"
                                            :href="item.link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="item_title"
                                        >
                                            {{ item.title }}
                                        </a>
                                        <router-link
                                            v-if="item.route"
                                            :to="item.route"
                                            class="item_title"
                                        >
                                            {{ item.title }}
                                        </router-link>
                                        <span class="date">{{ item.date }}</span>
                                    </div>
                                    <div class="intro">{{ item.intro }}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="content_bottom">
                        <router-link class="more" :to="`${$store.state.currentLang}news`">
                            <MoreBlue
                                :text="dynamicContent.moreText"
                                class="more_btn"
                            ></MoreBlue>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MoreBlue from "@theme/components/Common/MoreBlue.vue";
export default {
    name: "Dynamic",
    props: ["dynamicContent"],
    methods: {
        refreshTo(source) {
            if (source.route) {
                history.push(source.route);
            }
        },
    },
    components: {
        MoreBlue,
    },
};
</script>

<style lang="stylus">
.dynamichome_container {
    width: 100%;

    .dynamichome_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        .dynamichome_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 8rem 0 10rem;
            max-width: 102.4rem;
            @media (max-width: 500px) {
                margin: 0;
                padding: 4rem 1.6rem 6rem;
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
                @media (max-width: 500px) {
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
                    background: $highlightDetailColor;
                    @media (max-width: 500px) {
                        margin-top: 1.6rem;
                    }
                }
            }
            .content {
                margin: 6rem auto 0;
                .content_top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    @media (max-width: 1050px) {
                        justify-content: center;
                    }
                    @media (max-width: 968px) {
                        flex-direction: column;
                        align-items: center;
                    }
                    @media (max-width: 768px) {
                        margin: 4.8rem auto 0;
                    }
                    @media (max-width: 500px) {
                        margin: 2.4rem auto 0;
                    }
                    .important {
                        box-sizing: border-box;
                        max-width: 44.8rem;
                        font-size: 0;
                        border-color: transparent;
                        border-radius: 0.4rem;
                        .important_img {
                            width: 100%;
                            .link_img {
                                width: 100%;
                                img {
                                    width: 100%;
                                    border-radius: 0.4rem 0.4rem 0 0;
                                }
                            }
                        }
                        .important_overview {
                            box-sizing: border-box;
                            padding: 1.2rem 1.6rem 1.6rem;
                            border: 0.1rem solid #E1E5F4;
                            border-top: 0;
                            .date {
                                font-size: $fontSize12;
                                font-weight: $fontWeight400;
                                color: rgba(0, 0, 0, 0.75);
                                line-height: 1.6rem;
                                white-space: nowrap;
                            }
                            .link_title {
                                display: block;
                                margin-top: 0.8rem;
                                font-size: $fontSize16;
                                font-weight: $fontWeight600;
                                color: #000;
                                line-height: 2.4rem;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                word-break: break-all;
                                @media (max-width: 500px) {
                                    white-space: normal;
                                }
                                &:hover {
                                    color: $highlightDetailColor;
                                    cursor: pointer;
                                }
                            }
                            .intro {
                                box-sizing: border-box;
                                margin-top: 0.8rem;
                                font-size: $fontSize14;
                                font-weight: $fontWeight400;
                                color: rgba(0, 0, 0, 0.75);
                                line-height: 2.4rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 3;
                                word-break: break-all;
                            }
                        }
                    }
                    .dynamic_list_container {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        margin-left: 4.8rem;
                        @media (max-width: 1050px) {
                            margin-left: 1.6rem;
                        }
                        @media (max-width: 968px) {
                            align-items: center;
                            margin-top: 4rem;
                            margin-left: 0;
                        }
                        .dynamic_list {
                            max-width: 52.8rem;
                            @media (max-width: 1050px) {
                                max-width: 45rem;
                            }

                            .dynamic_item {
                                box-sizing: border-box;
                                padding: 1.6rem 1.6rem 1.6rem;
                                border-bottom: 0.1rem solid #E1E5F4;
                                transition: all 0.3s linear;

                                @media (any-hover: hover) {
                                    &:hover {
                                        background: url('../../assets/home/qydt_bg.png') no-repeat center / cover;

                                        .item_top {
                                            .item_title {
                                                color: $highlightDetailColor;
                                            }
                                        }
                                    }
                                }

                                &:nth-of-type(1) {
                                    border-top: 0.1rem solid #E1E5F4;
                                }

                                .item_top {
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    @media (max-width: 1050px) {
                                        flex-direction: column-reverse;
                                        align-items: flex-start;
                                    }

                                    .item_title {
                                        display: inline-block;
                                        max-width: 42.9rem;
                                        font-size: $fontSize16;
                                        font-weight: $fontWeight600;
                                        color: #000;
                                        line-height: 2.4rem;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        word-break: break-all;
                                        @media (max-width: 1050px) {
                                            max-width: 100%;
                                            white-space: normal;
                                        }

                                        &:hover {
                                            color: $highlightDetailColor;
                                            cursor: pointer;
                                        }
                                    }

                                    .date {
                                        font-size: $fontSize12;
                                        font-weight: $fontWeight400;
                                        color: rgba(0, 0, 0, 0.75);
                                        line-height: 1.6rem;
                                    }
                                }

                                .intro {
                                    margin-top: 1.3rem;
                                    font-size: $fontSize14;
                                    font-weight: $fontWeight400;
                                    color: rgba(0, 0, 0, 0.75);
                                    line-height: 2.4rem;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 3;
                                    word-break: break-all;
                                }
                            }
                        }
                    }
                }
                .content_bottom {
                    display: flex;
                    justify-content: center;
                    margin-top: 3.2rem;
                }
            }
        }
    }
}
</style>