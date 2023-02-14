<template>
    <div class="corefunc_container">
        <div class="corefunc_content_container">
            <div class="corefunc_content">
                <div class="corefunc_title">{{coreFunctions.title}}</div>
                <ul class="corefunc_list">
                    <li class="corefunc_item" v-for="(item,index) in coreFunctions.coreList" :key="index">
                        <div class="corefunc_img">
                            <img :src="differentIcon(item.iconName)" alt="" />
                        </div>
                        <div class="corefunc_right">
                            <div class="corefunc_text">{{item.text}}</div>
                            <div class="corefunc_desc">{{item.description}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoreFunctions',
    props: ['coreFunctions'],
    computed: {
        differentIcon(){
            return function(imgName){
                return `/appscenes/icon/${imgName}`;
            }
        }
    }
}
</script>

<style lang="stylus">
.corefunc_container {
    width: 100%;
    background: url(../../assets/hzhb_bg.png) no-repeat center / cover;
    .corefunc_content_container {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 4.8rem 0 6rem;
        max-width: $contentWidth;
        .corefunc_content {
            margin: 0 auto;
            max-width: 82.8rem;
            @media (max-width: 924px) {
                padding-left: 4.8rem;
                padding-right: 4.8rem;
                max-width: 46rem;
            }
            @media (max-width: 375px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }
            .corefunc_title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
                text-align: center;
            }
            .corefunc_list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 9.7rem;
                grid-row-gap: 6rem;
                margin: 4rem auto 0;
                @media (max-width: 924px) {
                    grid-template-columns: repeat(1, 1fr);
                    grid-row-gap: 3.6rem;
                }
                .corefunc_item {
                    display: flex;
                    align-items: center;
                    .corefunc_img {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 2.6rem;
                        width: 6.4rem;
                        height: 6.4rem;
                        img {
                            width: 100%;
                            &:nth-of-type(1) {
                                width: 5.6rem;
                            }
                            &:nth-of-type(2) {
                                width: 5.8rem;
                            }
                            &:nth-of-type(3) {
                                width: 5.6rem;
                            }
                            &:nth-of-type(4) {
                                width: 6.2rem;
                            }
                            &:nth-of-type(5) {
                                width: 6rem;
                            }
                            &:nth-of-type(6) {
                                width: 6rem;
                            }
                        }
                    }
                    .corefunc_right {
                        .corefunc_text {
                            font-size: $fontSize16;
                            font-weight: $fontWeight600;
                            color: #000;
                            line-height: 1.6rem;
                        }
                        .corefunc_desc {
                            margin-top: 0.8rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: rgba(0,0,0,0.75);
                            line-height: 2.4rem;
                        }
                    }
                }
            }
        }
    }
}
</style>