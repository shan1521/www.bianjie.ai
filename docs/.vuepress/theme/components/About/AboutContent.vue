<template>
    <div class="about_content_container">
        <div class="about_type_container" v-if="aboutType">
            <ul class="about_type">
                <li
                    class="about_type_item"
                    v-for="(item, index) in aboutType"
                    :key="index"
                >
                    <router-link
                        class="about_type"
                        :class="currentTab === index ? 'active' : ''"
                        :to="item.route"
                    >
                        {{ item.text }}
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 关于我们 -->
        <div class="about_content" v-if="currentTab === 0">
            <CompanyInfo :companyInfo="companyInfo"></CompanyInfo>
            <IndustryAdv v-if="!edition" :industryAdvantage="industryAdvantage"></IndustryAdv>
        </div>
        <!-- 发展历程 -->
        <div class="milestone_content" v-if="currentTab === 1"></div>
        <!-- 荣誉资质 -->
        <div class="honour_content" v-if="currentTab === 2"></div>
        <!-- 加入我们 -->
        <div class="join_content" v-if="currentTab === 3"></div>
    </div>
</template>

<script>
import CompanyInfo from "./CompanyInfo.vue";
import IndustryAdv from "@theme/components/About/IndustryAdv.vue";
import { getCurrentEdition } from '@theme/util';
export default {
    name: "AboutContent",
    props: ["aboutType", "companyInfo", "tab", "industryAdvantage"],
    data() {
        return {
            edition: getCurrentEdition()
        }
    },
    computed: {
        currentTab() {
            return this.tab ? this.tab : 0;
        },
    },
    components: {
        CompanyInfo,
        IndustryAdv,
    },
};
</script>

<style lang="stylus">
.about_content_container {
    width: 100%;
    background: #fff;
    border-bottom: 0.1rem solid #e9e9e9;

    .about_type_container {
        box-sizing: border-box;
        margin: 0 auto;
        width: 100%;
        height: 6rem;
        box-shadow: 0 0.4rem 1.6rem 0 rgba(0, 0, 0, 0.08);

        .about_type {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            // max-width: 73.6rem;
            height: 100%;

            .about_type_item {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 18.5rem;
                border-right: 0.1rem solid #eee;
                &:last-child {
                    border-right: 0;
                }

                .about_type {
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    font-size: $fontSize16;
                    font-weight: $fontWeight400;
                    color: rgba(0, 0, 0, 0.75);
                    line-height: 2.4rem;
                }

                .active {
                    color: $highlightDetailColor;
                }
            }
        }
    }

    .about_content {
        width: 100%;
    }
}
</style>