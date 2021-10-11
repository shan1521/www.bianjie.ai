<template>
    <div class="partner_container">
        <div class="partner_content_container">
            <div class="partner_content">
                <div class="title_container">
                    <span class="title">{{ partnerContent.title }}</span>
                    <span class="sub_title">{{ partnerContent.subTitle }}</span>
                </div>
                <div class="fields_list_wrap">
                    <ul class="fields_list_container">
                        <li
                            class="field_item"
                            v-for="(item, index) in partnerContent.fieldsList"
                            :class="currentTab === index ? 'active' : ''"
                            :key="index"
                            @click="changeTab(index)"
                        >
                            <span
                                class="field_name"
                                :class="currentTab === index ? 'activeName' : ''"
                                >{{ item.fieldName }}</span
                            >
                        </li>
                    </ul>
                </div>
                <ul class="partner_list_container" @touchmove="tabsMove($event)">
                    <li
                        class="partner_item"
                        v-for="(item, index) in partnerContent.fieldsList"
                        :key="index"
                        v-if="index === currentTab"
                    >
                        <div
                            class="item"
                            v-for="(partner, pIndex) in item.partnerList"
                        >
                            <img :src="partner.src" alt="" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Partner",
    props: ["partnerContent"],
    data() {
        let tabs = document.querySelectorAll('.partner_list_container .partner_item');
        return {
            currentTab: 0,
        };
    },
    methods: {
        changeTab(index) {
            this.currentTab = index;
            // this.tabSwiper.slideTo(index);
        },
        tabsMove($event) {
            console.log(111111);
        }
    },
};
</script>

<style lang="stylus">
.partner_container {
    width: 100%;
    min-height: 60.8rem;
    background: url('../../assets/hzhb_bg.png') no-repeat center / cover;
    @media (max-width: 768px) {
        min-height: 58.8rem;
    }
    @media (max-width: 375px) {
        min-height: 55.6rem;
    }

    .partner_content_container {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 8rem 0;
        max-width: $contentWidth;
        height: 100%;
        @media (max-width: 930px) {
            padding: 6rem 4.8rem;
            min-height: 58.8rem;
        }
        @media (max-width: 375px) {
            padding: 4rem 1.6rem;
            min-height: 55.6rem;
        }

        .partner_content {
            margin: 0 auto;
            max-width: 89.6rem;

            .title_container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .title {
                    font-size: $fontSize24;
                    font-weight: $fontWeight500;
                    color: #000;
                    line-height: 2.4rem;
                }

                .sub_title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-top: 1.6rem;
                    font-size: $fontSize14;
                    font-weight: $fontWeight400;
                    color: rgba(0, 0, 0, 0.75);
                    line-height: 2rem;
                    text-align: center;

                    &::after {
                        content: '';
                        display: block;
                        margin-top: 1.6rem;
                        width: 8rem;
                        height: 0.4rem;
                        background: #0967E9;
                    }
                }
            }

            .fields_list_wrap {
                @media (max-width: 673px) {
                    overflow-x: auto;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
                .fields_list_container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 4rem auto 0;
                    max-width: 73rem;
                    height: 3.6rem;
                    background: rgba(216, 216, 216, 0.25);
                    border-radius: 0.4rem;
                    @media (max-width: 673px) {
                        box-sizing: border-box;
                        white-space: nowrap;
                        width: 65.2rem;
                    }

                    .field_item {
                        box-sizing: border-box;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding-left: 2.4rem;
                        padding-right: 2.4rem;
                        height: 100%;
                        @media (max-width: 817px) {
                            padding-left: 1.6rem;
                            padding-right: 1.6rem;
                        }
                        @media (max-width: 721px) {
                            padding-left: 1.2rem;
                            padding-right: 1.2rem;
                        }

                        &:hover {
                            cursor: pointer;
                        }
                        .field_name {
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: rgba(0, 0, 0, 0.75);
                            line-height: 2rem;
                            @media (max-width: 817px) {
                                font-size: $fontSize14;
                                font-weight: $fontWeight500;
                            }
                        }
                    }

                    .active {
                        height: 100%;
                        background: #0967E9;
                        border-radius: 0.4rem;
                        .field_name {
                            color: #fff;
                        }
                    }
                }
            }

            .partner_list_container {
                margin: 3.2rem auto 0;
                @media (max-width: 930px) {
                    max-width: 66.4rem;
                }
                @media (max-width: 706px) {
                    max-width: 43.2rem;
                }
                @media (max-width: 520px) {
                    max-width: 20rem;
                }

                .partner_item {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-row-gap: 2.4rem;
                    grid-column-gap: 3.2rem;
                    justify-items: center;
                    @media (max-width: 930px) {
                        grid-template-columns: repeat(3, 1fr);
                        grid-row-gap: 1.6rem;
                    }
                    @media (max-width: 804px) {
                        grid-column-gap: 1.6rem;
                    }
                    @media (max-width: 706px) {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    @media (max-width: 520px) {
                        grid-template-columns: repeat(1, 1fr);
                    }

                    .item {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        max-width: 20rem;
                        height: 6.4rem;
                        background: #FFFFFF;
                        border: 0.1rem solid #E8EBF5;

                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>