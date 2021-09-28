<template>
    <div class="industryadv_container">
        <div class="industryadv_content">
            <div class="title">
                {{ industryAdvantage.title }}
            </div>
            <div class="swiper_container">
                <Prev class="prev_btn" @click.native="arrowClick('prev')"></Prev>
                <el-carousel
                    :interval="3000"
                    type="card"
                    v-if="industryAdvantage.industryAdvImg"
                    class="industry_swiper"
                    arrow="never"
                    ref="swiperRef"
                    height="560px"
                    :autoplay="false"
                >
                    <el-carousel-item
                        v-for="(
                            item, index
                        ) in industryAdvantage.industryAdvImg"
                        :key="index"
                    >
                        <img :src="item.src" alt="" />
                    </el-carousel-item>
                </el-carousel>
                <Next class="next_btn" @click.native="arrowClick('next')"></Next>
            </div>
            <div v-if="industryAdvantage.industryVideo" class="industry_video">
                <!-- <video-player
                    class="vjs-custom-skin"
                    ref="videoPlayer"
                    :options="playerOptions"
                    :playsinline="true"
                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)"
                    @ended="onPlayerEnded($event)"
                    @loadeddata="onPlayerLoadeddata($event)"
                    @waiting="onPlayerWaiting($event)"
                    @playing="onPlayerPlaying($event)"
                    @timeupdate="onPlayerTimeupdate($event)"
                    @canplay="onPlayerCanplay($event)"
                    @canplaythrough="onPlayerCanplaythrough($event)"
                    @ready="playerReadied"
                    @statechanged="playerStateChanged($event)"
                >
                </video-player> -->
            </div>
        </div>
    </div>
</template>

<script>
import Prev from "@theme/components/Common/Prev";
import Next from "@theme/components/Common/Next";
export default {
    name: "IndustryAdv",
    props: ["industryAdvantage"],
    // data() {
    //     return {
    //         playerOptions: {
    //             height: "360",
    //             autoplay: true,
    //             muted: true,
    //             language: "en",
    //             playbackRates: [0.7, 1.0, 1.5, 2.0],
    //             sources: [
    //                 {
    //                     type: "video/mp4",
    //                     // mp4
    //                     src: "http://vjs.zencdn.net/v/oceans.mp4",
    //                     // webm
    //                     // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
    //                 },
    //             ],
    //             poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
    //         },
    //     };
    // },
    // computed: {
    //     player() {
    //         return this.$refs.videoPlayer.player;
    //     },
    // },
    methods: {
        arrowClick(val) {
            if(val === 'next') {
                this.$refs.swiperRef.next();
            } else {
                this.$refs.swiperRef.prev();
            }
        }
        // // listen event
        // onPlayerPlay(player) {
        //     // console.log('player play!', player)
        // },
        // onPlayerPause(player) {
        //     // console.log('player pause!', player)
        // },
        // // ...player event

        // // or listen state event
        // playerStateChanged(playerCurrentState) {
        //     // console.log('player current update state', playerCurrentState)
        // },

        // // player is ready
        // playerReadied(player) {
        //     console.log("the player is readied", player);
        //     // you can use it to do something...
        //     // player.[methods]
        //     player.currentTime(0);
        // },
    },
    components: {
        Prev,
        Next,
    },
};
</script>

<style lang="stylus">
.industryadv_container {
    width: 100%;
    background: url('../../assets/about/global_banner.png') no-repeat center / cover;

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
            text-align: center;
            @media (max-width: 768px) {
                font-size: $fontSize24;
            }
            @media (max-width: 375px) {
                font-size: $fontSize20;
            }

            &::after {
                content: '';
                display: block;
                margin-top: 2.4rem;
                width: 16rem;
                height: 0.4rem;
                background: #0967E9;
            }
        }

        .swiper_container {
            position: relative;
            left: 50%;
            transform: translate(-50%);
            display: flex;
            align-items: center;
            margin-top: 4.8rem;
            max-width: 155.2rem;
            .prev_btn {
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -47rem;
                z-index: 9999;
                @media (max-width: 1400px) {
                    margin-left: -42rem;
                }
                @media (max-width: 1200px) {
                    margin-left: -38rem;
                }
                @media (max-width: 968px) {
                    display: none;
                }
            }
            .industry_swiper {
                margin: 0 4rem;
                width: 100%;
                text-align: center;

                .el-carousel__item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    img {
                        width: 100%;
                        // height: 100%;
                    }
                }
                // .el-carousel__item.is-animating {
                //     -webkit-transition: -webkit-transform 5s ease-in-out;
                //     transition: -webkit-transform 5s ease-in-out;
                //     transition: transform 5s ease-in-out;
                //     transition: transform 5s ease-in-out,-webkit-transform 5s ease-in-out;
                // }
                .el-carousel__indicators {
                    display: none;
                }
            }
            .next_btn {
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: 43rem;
                z-index: 9999;
                @media (max-width: 1400px) {
                    margin-left: 38rem;
                }
                @media (max-width: 1200px) {
                    margin-left: 33rem;
                }
                @media (max-width: 968px) {
                    display: none;
                }
            }
        }
    }
}
</style>