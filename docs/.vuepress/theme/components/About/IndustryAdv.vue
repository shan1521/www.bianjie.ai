<template>
    <div class="industryadv_container">
        <div class="industryadv_content">
            <div class="title">
                {{ industryAdvantage.title }}
            </div>
            <el-carousel :interval="3000" type="card"
                v-if="industryAdvantage.industryAdvImg" class="industry_swiper"
            >
                <el-carousel-item v-for="(item, index) in industryAdvantage.industryAdvImg" :key="index">
                    <img :src="item.src" alt="">
                </el-carousel-item>
            </el-carousel>
            <div v-if="industryAdvantage.industryVideo" class="industry_video">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IndustryAdv",
    props: ["industryAdvantage"],
};
</script>

<style lang="stylus">
.industryadv_container {
    width: 100%;
    // height: 86.8rem;
    background: url(../../assets/about/global_banner.png) no-repeat center / cover;

    .industryadv_content {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 8rem 0 12rem;
        max-width: 155.2rem;
        height: 100%;

        .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: $fontSize32;
            font-weight: $fontWeight500;
            color: #000;
            line-height: 3.2rem;

            &::after {
                content: '';
                display: block;
                margin-top: 2.4rem;
                width: 16rem;
                height: 0.4rem;
                background: #0967E9;
            }
        }
        .industry_swiper {
            margin-top: 4.8rem;
            max-width: 155.2rem;
            height: 100%;
            text-align: center;

            .el-carousel__container {
                .el-carousel__arrow--left {
                    color: #0967E9;
                    background: rgba(255,255,255,0.59);
                    border: 0.2rem solid #0967E9;
                }
                .el-carousel__arrow--right {
                    color: #0967E9;
                    background: rgba(255,255,255,0.59);
                    border: 0.2rem solid #0967E9;
                }
                .el-carousel__item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 84rem;
                    .el-carousel__mask {
                        width: 100%;
                        height: 100%;
                        opacity: .6;
                    }
                }
            }
            .el-carousel__indicators {
                display: none;
            }
        }
    }
}
</style>