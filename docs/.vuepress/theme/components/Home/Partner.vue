<template>
    <Caption class="partner" :title="partnerContent.title" :subTitle="partnerContent.subTitle">
        <div v-if="!edition" class="fields_list_wrap">
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
        <ul class="partner_list_container">
            <li
                class="partner_item"
                v-for="(item, index) in partnerContent.fieldsList"
                :key="index"
                v-show="index === currentTab"
            >
                <div
                    class="item"
                    v-for="(partner, pIndex) in item.partnerList"
                    :key="pIndex"
                >
                    <img :src="partner.src" alt="" />
                </div>
            </li>
        </ul>
    </Caption>
</template>

<script>
import Caption from '@theme/components/Common/Caption.vue';
import { getCurrentEdition } from '../../util';
export default {
    name: "Partner",
    props: ["partnerContent"],
    data() {
        return {
            currentTab: 0,
            edition: getCurrentEdition()
        };
    },
    methods: {
        changeTab(index) {
            this.currentTab = index;
        },
    },
    components: {
        Caption
    }
};
</script>

<style lang="stylus">

.partner {
    min-height: 60.8rem;
    background: url('../../assets/hzhb_bg.png') no-repeat center / cover;

    @media (max-width: 768px) {
        min-height: 58.8rem;
    }

    @media (max-width: 375px) {
        min-height: 55.6rem;
    }

    .caption_container {
        padding-left: 4.8rem !important;
        padding-right: 4.8rem !important;
    }

    .fields_list_wrap {
        @media (max-width: 730px) {
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
            @media (max-width: 730px) {
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
                @media (max-width: 834px) {
                    padding-left: 1.6rem;
                    padding-right: 1.6rem;
                }
                @media (max-width: 730px) {
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
                    white-space: nowrap;
                    @media (max-width: 818px) {
                        font-weight: $fontWeight500;
                    }
                }
            }

            .active {
                height: 100%;
                background: $highlightDetailColor;
                border-radius: 0.4rem;
                .field_name {
                    color: #fff;
                }
            }
        }
    }

    .partner_list_container {
        margin: 3.2rem auto 0;
        max-width: 89.6rem;
        @media (max-width: 930px) {
            max-width: 66.4rem;
        }
        @media (max-width: 730px) {
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
</style>