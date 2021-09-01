<template>
    <div class="partnercontent_container">
        <div class="partnercontent_content_container">
            <div class="partnercontent_content">
                <ul class="partner_field">
                    <li
                        class="partner_item"
                        v-for="(item, index) in partnerList"
                        :key="index"
                    >
                        <div class="line">
                            <span class="title">{{ item.title }}</span>
                        </div>
                        <ul class="item_list">
                            <li
                                class="item"
                                v-for="(v, i) in item.list"
                                :key="i"
                                :class="
                                    v.relationship || v.link
                                        ? 'item_pointer'
                                        : ''
                                "
                            >
                                <!-- @mouseenter="visibleChange(i)" -->
                                <a
                                    class="img_wrap"
                                    :href="v.link"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img
                                        class="v_img"
                                        :src="v.imgName"
                                        alt=""
                                    />
                                    <div
                                        :class="
                                            v.relationship
                                                ? 'v_relationship'
                                                : ''
                                        "
                                    >
                                        <!-- :style="{display: v.relationship ? 'block' : 'none'}" -->
                                        <span class="relationship">
                                            {{ v.relationship }}
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PartnerContent",
    props: ["partnerList"],
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        visibleChange() {
            this.visible = true;
        },
    },
};
</script>

<style lang="stylus">
.partnercontent_container {
    width: 100%;

    // min-height: 142.1rem;
    .partnercontent_content_container {
        margin: 0 auto;
        max-width: $contentWidth;

        // height: 100%;
        .partnercontent_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 8rem 0 12rem;
            max-width: 100%;

            .partner_field {
                .partner_item {
                    margin-top: 6.5rem;

                    &:first-child {
                        margin-top: 0;
                    }

                    .line {
                        position: relative;
                        width: 100%;
                        height: 0.1rem;
                        background: #E1E5F4;

                        .title {
                            position: absolute;
                            top: -50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            box-sizing: border-box;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0 2.4rem;
                            height: 2.4rem;
                            font-size: $fontSize16;
                            font-weight: $fontWeight500;
                            color: #000;
                            line-height: 2.4rem;
                            text-align: center;
                            background: #fff;
                        }
                    }

                    .item_list {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-row-gap: 4rem;
                        grid-column-gap: 6rem;
                        margin-top: 4.8rem;

                        .item {
                            position: relative;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            max-width: 24rem;

                            &:hover {
                                .img_wrap {
                                    .v_relationship {
                                        display: block;
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        width: 100%;
                                        height: 100%;
                                        color: #0967E9;
                                        background: #E1E5F4;
                                    }
                                }
                            }

                            // height: 4.8rem;
                            .img_wrap {
                                widtgh: 100%;
                                height: 100%;

                                img {
                                    width: 100%;
                                    height: 100%;
                                }

                                .v_relationship {
                                    display: none;
                                }
                            }
                        }

                        .item_pointer {
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
}
</style>