<template>
    <div class="dynamic_container">
        <div class="dynamic_content_container">
            <div class="dynamic_content">
                <span class="title">{{ dynamicContent.title }}</span>
                <div class="content">
                    <div class="important">
                        <div class="important_img">
                            <img
                                :src="dynamicContent.mostImportant.imgName"
                                alt=""
                            />
                        </div>
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
                        <router-link class="more" to="/dynamic">
                            <More
                                :text="dynamicContent.moreText"
                                class="more_btn"
                            ></More>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import More from "@theme/components/Common/More.vue";
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
        More,
    },
};
</script>

<style lang="stylus">
.dynamic_container {
    width: 100%;
    height: 68.4rem;

    .dynamic_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        .dynamic_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 8rem 0;
            max-width: 102.4rem;

            .title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;

                &::after {
                    content: '';
                    display: block;
                    margin-top: 2.4rem;
                    width: 8rem;
                    height: 0.4rem;
                    background: #0967E9;
                }
            }

            .content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 6rem;

                .important {
                    box-sizing: border-box;
                    padding-bottom: 2.4rem;
                    border: 0.1rem solid #E1E5F4;
                    border-radius: 0.4rem;
                    max-width: 44.8rem;

                    .important_img {
                        width: 100%;
                        height: 24.8rem;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .date {
                        box-sizing: border-box;
                        margin-top: 1.6rem;
                        margin-bottom: 0.8rem;
                        padding: 0 1.6rem;
                        font-size: $fontSize12;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, 0.75);
                        line-height: 1.6rem;
                    }

                    .link_title {
                        box-sizing: border-box;
                        margin-top: 0.8rem;
                        padding: 0 1.6rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight500;
                        color: #000;
                        line-height: 2.4rem;

                        &:hover {
                            color: #0967E9;
                            cursor: pointer;
                        }
                    }

                    .intro {
                        box-sizing: border-box;
                        margin-top: 0.8rem;
                        padding: 0 1.6rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, 0.75);
                        line-height: 2.4rem;
                    }
                }

                .dynamic_list_container {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    margin-left: 4.8rem;

                    .dynamic_list {
                        max-width: 52.8rem;

                        .dynamic_item {
                            box-sizing: border-box;
                            padding: 1.6rem 1.6rem 1.5rem;
                            border-bottom: 0.1rem solid #E1E5F4;
                            transition: all 0.3s linear;

                            &:hover {
                                background: url('../../assets/home/qydt_bg.png') no-repeat center / cover;

                                .item_top {
                                    .item_title {
                                        color: #0967E9;
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

                                .item_title {
                                    font-size: $fontSize16;
                                    font-weight: $fontWeight500;
                                    color: #000;
                                    line-height: 2.4rem;

                                    &:hover {
                                        color: #0967E9;
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
                                margin-top: 0.8rem;
                                font-size: $fontSize14;
                                font-weight: $fontWeight400;
                                color: rgba(0, 0, 0, 0.75);
                                line-height: 2.4rem;
                            }
                        }
                    }

                    .more {
                        .more_btn {
                            margin-top: 2.3rem;
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