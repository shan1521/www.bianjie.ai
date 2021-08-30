<template>
    <div class="adv_container">
        <div class="adv_content_container">
            <div class="adv_content">
                <div class="title">{{ advantageContent.title }}</div>
                <ul class="adv_list">
                    <li
                        class="adv_item"
                        v-for="(item, index) in advantageContent.advList"
                    >
                        <div class="item_img_container">
                            <div class="item_img">
                                <img
                                    class="img"
                                    :src="differentAdvantageImg(item.iconName)"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="item_title">{{ item.title }}</div>
                        <div class="item_desc">{{ item.description }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Advantage",
    props: ["advantageContent"],
    computed: {
        differentAdvantageImg() {
            return function (imgName) {
                return `/product/iritahub/${imgName}`;
            };
        },
    },
};
</script>

<style lang="stylus">
.adv_container {
    width: 100%;
    height: 55.2rem;

    .adv_content_container {
        margin: 0 auto;
        max-width: $contentWidth;

        .adv_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 4.8rem 0 10rem;
            max-width: 105.6rem;
            text-align: center;

            .title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
            }

            .adv_list {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                // grid-row-gap: 2rem;
                grid-column-gap: 3.2rem;
                margin-top: 4rem;

                .adv_item {
                    box-sizing: border-box;
                    padding: 4.5rem 2.4rem;
                    max-width: 24rem;
                    height: 36rem;
                    border: 0.1rem solid #EDEDED;
                    border-radius: 0.4rem;

                    .item_img_container {
                        margin: 0 auto;
                        max-width: 9.7rem;

                        .item_img {
                            width: 9.5rem;
                            height: 9.5rem;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }

                    .item_title {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-top: 3.6rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight500;
                        color: #000;
                        line-height: 2.4rem;

                        &::after {
                            margin-top: 0.8rem;
                            content: '';
                            display: block;
                            width: 12rem;
                            height: 0.1rem;
                            background: #EDEDED;
                        }
                    }

                    .item_desc {
                        margin-top: 1rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, 0.75);
                        line-height: 2.4rem;
                    }
                }
            }
        }
    }
}
</style>