<template>
    <div class="partner_container">
        <div class="partner_content_container">
            <div class="partner_content">
                <div class="title_container">
                    <span class="title">{{ partnerContent.title }}</span>
                    <span class="sub_title">{{ partnerContent.subTitle }}</span>
                </div>
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
                <ul class="partner_list_container">
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
                            <img v-lazy="partner.src" alt="" />
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
        return {
            currentTab: 0,
        };
    },
    methods: {
        changeTab(index) {
            this.currentTab = index;
        },
    },
};
</script>

<style lang="stylus">
.partner_container {
    width: 100%;
    min-height: 60.8rem;
    background: url('../../assets/hzhb_bg.png') no-repeat center / cover;

    .partner_content_container {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 8rem 0;
        max-width: $contentWidth;
        height: 100%;

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

            .fields_list_container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 4rem auto 0;
                max-width: 70.8rem;
                height: 3.6rem;
                background: rgba(216, 216, 216, 0.25);
                border-radius: 0.4rem;

                .field_item {
                    box-sizing: border-box;
                    padding: 0.8rem 2.4rem;
                    height: 100%;

                    &:hover {
                        cursor: pointer;
                    }
                }

                .active {
                    height: 100%;
                    background: #0967E9;
                    border-radius: 0.4rem;
                    color: #fff;
                }
            }

            .partner_list_container {
                margin: 3.2rem auto 0;
                @media (max-width: 1000px) {
                    max-width: 66.4rem;
                }
                @media (max-width: 768px) {
                    max-width: 43.2rem;
                }
                @media (max-width: 500px) {
                    max-width: 20rem;
                }

                .partner_item {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-row-gap: 2.4rem;
                    grid-column-gap: 3.2rem;
                    @media (max-width: 1000px) {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    @media (max-width: 768px) {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    @media (max-width: 500px) {
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