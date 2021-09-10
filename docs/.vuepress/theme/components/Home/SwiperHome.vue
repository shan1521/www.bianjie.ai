<template>
    <div class="swiper_home_container" :style="differentOpenImg(content.img)">
        <div class="swiper_home_content_container">
            <div class="swiper_home_content">
                <!-- <Prev @click.native="subCurrentSwiper"></Prev> -->
                <div class="title_container">
                    <span class="title">{{ content.title }}</span>
                    <span class="sub_title">{{ content.subTitle }}</span>
                </div>
                <!-- <Next @click.native="addCurrentSwiper"></Next> -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "SwiperHome",
    props: ["content", "currentSwiper"],
    computed: {
        homeContent() {
			return this.$frontmatter.homeContent;
		},
        differentOpenImg() {
            return function (imgName) {
                return `background:url(/home/${imgName}) no-repeat center / cover;`;
            };
        },
        currentSwiperIndex() {
            return function(newIndex) {
                return this.currentSwiper = newIndex;
            }
        }
    },
    methods: {
        subCurrentSwiper(){
            if(this.currentSwiperIndex > 0) {
                this.currentSwiperIndex -= 1;
            }
            if(this.currentSwiperIndex === 0) {
                this.currentSwiperIndex = 0;
            }
        },
        addCurrentSwiper(){
            if(this.currentSwiperIndex < this.homeContent.length - 1) {
                this.currentSwiperIndex += 1;
            }
            if(this.currentSwiperIndex === this.homeContent.length - 1) {
                this.currentSwiperIndex = this.homeContent.length - 1;
            }
        }
    },
};
</script>

<style lang="stylus">
.swiper_home_container {
    width: 100%;
    height: 100%;

    .swiper_home_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        .swiper_home_content {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            max-width: 116.8rem;
            height: 100%;
            .title_container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

        .title {
            font-size: $fontSize56;
            font-weight: $fontWeight500;
            color: #fff;
            line-height: 5.6rem;
        }

        .sub_title {
            margin-top: 4.3rem;
            font-size: $fontSize20;
            font-weight: $fontWeight400;
            color: #fff;
            line-height: 2rem;
        }
    }
}
</style>