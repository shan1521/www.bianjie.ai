<template>
    <div class="about_content_container">
        <div class="about_type_container">
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
            <IndustryAdv :industryAdvantage="industryAdvantage"></IndustryAdv>
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
import IndustryAdv from "./IndustryAdv.vue";
export default {
    name: "AboutContent",
    props: ["aboutType", "companyInfo","tab", "industryAdvantage"],
    computed: {
        currentTab(){
            return this.tab || 0;
        }
    },
    components: {
        CompanyInfo,
        IndustryAdv
    },
};
</script>

<style lang="stylus">
.about_content_container {
    width: 100%;
    background: #fff;

    .about_type_container {
        margin: 0 auto;
        // max-width: $contentWidth;
        height: 6rem;
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);

        .about_type {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            // max-width: 73.6rem;
            height: 100%;

            .about_type_item {
                text-align: center;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                margin: 1.8rem 0;
                padding: 0 0 0 6rem;
                height: 100%;

                &::after {
                    content: '';
                    display: inline-block;
                    margin-left: 6rem;
                    width: 0.1rem;
                    height: 4rem;
                    background: #EEEEEE;
                }

                &:last-child {
                    &::after {
                        content: '';
                        display: none;
                    }
                }

                .about_type {
                    font-size: $fontSize16;
                    font-weight: $fontWeight400;
                    color: rgba(0, 0, 0, 0.75);
                    line-height: 2.4rem;
                }

                .active {
                    color: #0967E9;
                }
            }
        }
    }

    .about_content {
        width: 100%;
    }
}
</style>