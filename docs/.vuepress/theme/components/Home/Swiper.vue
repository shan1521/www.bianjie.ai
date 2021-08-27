<template>
    <!-- <div class="swiper_container" ref="mySwiper"> -->
    <swiper :options="swiperOption" v-if="homeContent">
        <swiper-slide>
            <swiper-home :content="homeContent[0]"></swiper-home>
        </swiper-slide>
        <swiper-slide>
            <swiper-home :content="homeContent[1]"></swiper-home>
        </swiper-slide>
        <swiper-slide>
            <swiper-home :content="homeContent[2]"></swiper-home>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div
            class="swiper-pagination swiper-pagination-bullets"
            slot="pagination"
        ></div>
    </swiper>
    <!-- </div> -->
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import SwiperHome from "./SwiperHome.vue";
export default {
    name: "Swiper",
    props: {
        homeContent: {
            type: Array,
        },
    },
    data() {
        return {
            swiperOption: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet(index, className) {
                        return `<span style="width: 48px; height: 4px; background: rgba(255, 255, 255, 1); border-radius: 3px; " class="${className} swiper-pagination-bullet-custom"></span>`;
                    },
                },
                // autoplay: {
                //     delay: 3000,
                //     disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。
                // },
                // loop: true
            },
        };
    },
    components: {
        swiper: Swiper,
        "swiper-slide": SwiperSlide,
        "swiper-home": SwiperHome,
    },
};
</script>

<style lang="stylus">
.swiper-container {
    width: 100%;
    height: 52.8rem;

    .swiper-wrapper {
        height: 100%;

        .swiper-slide {
            width: 100%;
            height: 100%;
        }
    }

    .swiper-pagination-bullets {
        bottom: 4.8rem;
    }
}
</style>