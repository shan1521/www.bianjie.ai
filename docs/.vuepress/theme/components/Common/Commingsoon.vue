<template>
    <div class="commingsoon_container">
        <div class="commingsoon_content_container">
            <div class="commingsoon_content">
                <div class="commingsoon_left">
                    <img src="../../assets/comming.png" alt="" />
                </div>
                <div class="commingsoon_right">
                    <div class="title">敬请期待</div>
                    <div class="commingsoon_list">
                        <div class="commingsoon_item">
                            边界智能将会不定期上新更多产品和技术 DEMO，帮助独立开发者和企业快速开发部署区块链应用程序。
                        </div>
                        <div class="commingsoon_item">
                            感谢您的关注！
                        </div>
                    </div>
                    <!-- <div class="title">{{ commingSoonContent.title }}</div>
                    <ul class="commingsoon_list">
                        <li
                            class="commingsoon_item"
                            v-for="(item, index) in commingSoonContent.intro"
                            :key="index"
                        >
                            {{ item.paragraph }}
                        </li>
                    </ul> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Commingsoon",
    props: ["commingSoonContent"]
};
</script>

<style lang="stylus">
.commingsoon_container {
    margin-top: 4.8rem;
    width: 100%;
    height: 72rem;
    background: #F5F6FB;

    .commingsoon_content_container {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 8rem 0 10.4rem;
        max-width: $contentWidth;
        height: 100%;

        .commingsoon_content {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            max-width: 100rem;
            height: 100%;
            background: #fff;
            border-radius: 0.4rem;

            .commingsoon_left {
                margin-right: 9.2rem;
                max-width: 27.3rem;
                height: 30.3rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .commingsoon_right {
                .title {
                    font-size: $fontSize24;
                    font-weight: $fontWeight400;
                    color: #000;
                    line-height: 2.4rem;

                    &::before {
                        content: '';
                        display: block;
                        margin-bottom: 2.4rem;
                        width: 8rem;
                        height: 0.4rem;
                        background: #0967E9;
                    }

                    &::after {
                        content: '';
                        display: block;
                        margin-top: 2.1rem;
                        width: 32.8rem;
                        height: 0.1rem;
                        background: #E1E5F4;
                    }
                }

                .commingsoon_list {
                    margin-top: 1.4rem;

                    .commingsoon_item {
                        margin-top: 1.6rem;
                        max-width: 32.8rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, .75);
                        line-height: 2.4rem;

                        &:first-child {
                            margin-top: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>