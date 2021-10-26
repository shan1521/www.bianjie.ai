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
                            <li class="item" v-for="(partner,pIndex) in item.list" :key="pIndex">
                                <a :href="partner.link" class="img_wrap" target="_blank" rel="noreferrer noopener">
                                    <img class="partner_img" :src="partner.imgName" alt="" />
                                    <ul :class="partner.relationshipList.length ? 'relationship_list' : ''">
                                        <li v-if="partner.relationshipList.length" class="relationship_item" v-for="(relationshipItem, rIndex) in partner.relationshipList" :key="rIndex">
                                            {{ relationshipItem.relationship }}
                                        </li>
                                    </ul>
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
    .partnercontent_content_container {
        margin: 0 auto;
        max-width: $contentWidth;

        .partnercontent_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 8rem 0 12rem;
            max-width: 100%;
            @media (max-width: 1200px) {
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 400px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }

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
                            font-weight: $fontWeight600;
                            color: #000;
                            line-height: 2.4rem;
                            text-align: center;
                            background: #fff;
                            white-space: nowrap;
                        }
                    }

                    .item_list {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-row-gap: 4rem;
                        grid-column-gap: 6rem;
                        justify-items: center;
                        align-items: center;
                        margin: 4.8rem auto 0;
                        transition: all 0.3s linear;
                        @media (max-width: 1200px) {
                            grid-template-columns: repeat(3, 1fr);
                        }
                        @media (max-width: 935px) {
                            grid-template-columns: repeat(2, 1fr);
                        }
                        @media (max-width: 635px) {
                            grid-template-columns: repeat(1, 1fr);
                        }

                        .item {
                            position: relative;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            max-width: 24rem;
                            transition: all 0.3s linear;

                            &:hover {
                                .img_wrap {
                                    .relationship_list {
                                        display: flex;
                                        flex-direction: column;
                                        justify-content: center;
                                        align-items: center;
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        width: 100%;
                                        height: 100%;
                                        color: #fff;
                                        background: #0967e9;
                                    }
                                }
                            }

                            .img_wrap {
                                widtgh: 100%;
                                height: 100%;

                                img {
                                    width: 100%;
                                    height: 100%;
                                }

                                .relationship_list {
                                    display: none;
                                    transition: all 0.3s linear;
                                    .relationship_item {
                                        font-size: $fontSize14;
                                    }
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