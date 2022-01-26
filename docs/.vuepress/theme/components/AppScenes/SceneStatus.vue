<template>
    <div class="scenestatus_container">
        <div class="scenestatus_content_container">
            <div v-if="sceneStatusContent.choose === 1" class="scenestatus_content_first">
                <div class="scenestatus_title">{{sceneStatusContent.title}}</div>
                <ul class="scenestatus_list">
                    <li class="scenestatus_item" v-for="(item,index) in sceneStatusContent.sceneStatusList" :key="index">
                        <div class="item_title_wrap">
                            <span class="item_title">{{item.text}}</span>
                        </div>
                        <div class="item_desc"> {{item.description}} </div>
                    </li>
                </ul>
            </div>
            <div v-if="sceneStatusContent.choose === 2" class="scenestatus_content_second">
                <div class="scenestatus_title">{{sceneStatusContent.title}}</div>
                <ul class="scenestatus_list">
                    <li class="scenestatus_item" v-for="(item,index) in sceneStatusContent.sceneStatusList" :key="index">
                        <div class="item_title_wrap">
                            <span class="item_title">{{item.text}}</span>
                        </div>
                        <div class="item_desc"> {{item.description}} </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SceneStatus',
    props: ['sceneStatusContent']
}
</script>

<style lang="stylus">
.scenestatus_container {
    width: 100%;
    .scenestatus_content_container {
        box-sizing: border-box;
        padding: 4.8rem 0 6rem;
        margin: 0 auto;
        max-width: $contentWidth;
        .scenestatus_content_first {
            margin: 0 auto;
            max-width: 93.6rem;
            @media (max-width: 1032px) {
                max-width: 38.4rem;
            }
            @media (max-width: 375px) {
                max-width: 32rem;
            }
            .scenestatus_title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
                text-align: center;
            }
            .scenestatus_list {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-column-gap: 3.6rem;
                grid-row-gap: 2.4rem;
                margin: 4rem auto 0;
                @media (max-width: 1032px) {
                    box-sizing: border-box;
                    grid-template-columns: repeat(1, 1fr);
                    padding-left: 4.8rem;
                    padding-right: 4.8rem;
                }
                @media (max-width: 375px) {
                    padding-left: 1.6rem;
                    padding-right: 1.6rem;
                }
                .scenestatus_item {
                    max-width: 28.8rem;
                    min-height: 24rem;
                    border: 0.05rem solid #EDEDED;
                    border-radius: 0.4rem;
                    .item_title_wrap {
                        width: 100%;
                        height: 8rem;
                        background: url(../../assets/appscenes/thir_bg.png) no-repeat center / cover;
                        
                        .item_title {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                            height: 100%;
                            font-size: $fontSize16;
                            font-weight: $fontWeight600;
                            color: #000;
                            line-height: 1.6rem;

                            &::before {
                                content: '';
                                display: inline-block;
                                margin-right: 0.8rem;
                                width: 0.4rem;
                                height: 1.6rem;
                                background: $highlightDetailColor;
                            }

                            &::after {
                                content: '';
                                display: inline-block;
                                margin-left: 0.8rem;
                                width: 0.4rem;
                                height: 1.6rem;
                                background: $highlightDetailColor;
                            }
                        }
                    }
                    .item_desc {
                        box-sizing: border-box;
                        padding: 1.3rem 3.2rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, 0.75);
                        line-height: 2.4rem;
                    }
                }
            }
        }
        .scenestatus_content_second {
            margin: 0 auto;
            max-width: 95.2rem;
            @media (max-width: 1056px) {
                max-width: 56rem;
            }
            .scenestatus_title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
                text-align: center;
            }
            .scenestatus_list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 2.4rem;
                grid-row-gap: 2.4rem;
                margin: 4rem auto 0;
                @media (max-width: 1056px) {
                    box-sizing: border-box;
                    grid-template-columns: repeat(1, 1fr);
                    padding-left: 4.8rem;
                    padding-right: 4.8rem;
                }
                @media (max-width: 430px) {
                    padding-left: 1.6rem;
                    padding-right: 1.6rem;
                }
                .scenestatus_item {
                    max-width: 46.4rem;
                    min-height: 21.8rem;
                    border: 0.05rem solid #EDEDED;
                    border-radius: 0.4rem;
                    .item_title_wrap {
                        width: 100%;
                        height: 8rem;
                        background: url(../../assets/appscenes/for_bg.png) no-repeat center / cover;
                        .item_title {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                            height: 100%;
                            font-size: $fontSize16;
                            font-weight: $fontWeight600;
                            color: #000;
                            line-height: 1.6rem;
                            text-align: center;
                            @media (max-width: 350px){
                                box-sizing: border-box;
                                padding-left: 0.8rem;
                                padding-right: 0.8rem;
                            }

                            &::before {
                                content: '';
                                display: inline-block;
                                margin-right: 0.8rem;
                                width: 0.4rem;
                                height: 1.6rem;
                                background: $highlightDetailColor;
                            }

                            &::after {
                                content: '';
                                display: inline-block;
                                margin-left: 0.8rem;
                                width: 0.4rem;
                                height: 1.6rem;
                                background: $highlightDetailColor;
                            }
                        }
                    }
                    .item_desc {
                        box-sizing: border-box;
                        padding: 1.6rem 2.4rem;
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