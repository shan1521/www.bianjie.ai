<template>
    <div class="companyinfo_container">
        <div class="companyinfo_content_container">
            <div class="companyinfo_content">
                <div class="title">{{ companyInfo.title }}</div>
                <ul class="companyinfo_list">
                    <li
                        class="companyinfo_item"
                        v-for="(item, index) in companyInfo.infoList"
                    >
                        {{ item.paragraph }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompanyInfo",
    props: ["companyInfo"],
};
</script>

<style lang="stylus">
.companyinfo_container {
    width: 100%;
    min-height: 46.4rem;

    .companyinfo_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        .companyinfo_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 6.4rem 0 4.8rem;
            max-width: 111.2rem;
            height: 100%;
            @media (max-width: 1150px) {
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 400px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }

            .title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
                text-align: center;
            }

            .companyinfo_list {
                margin-top: 4rem;

                .companyinfo_item {
                    margin-top: 3.2rem;
                    font-size: $fontSize14;
                    font-weight: $fontWeight400;
                    color: rgba(0, 0, 0, 0.75);
                    line-height: 2.4rem;
                    &:first-child {
                        margin-top: 0;
                    }
                }
            }
        }
    }
}
</style>