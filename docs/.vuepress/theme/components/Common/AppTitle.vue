<template>
  <div class="app_title_container" :style="clientWidth > 420 ? differentBanner(appTitleContent.bg_banner) : 'background: url(/banner_phone.png) no-repeat center / cover;'">
      <div class="app_title_content_container">
          <div class="app_title_content">
              <div class="app_title">{{appTitleContent.title}}</div>
              <div class="app_sub_title" :class="{app_sub_title_en: isEn}">{{appTitleContent.subTitle}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import { LANG_OPTIONS } from '../../constants';
export default {
    name: 'AppTitle',
    props: ['appTitleContent'],
    data() {
        return {
            clientWidth: +document.body.clientWidth
        }
    },
    computed: {
        isEn() {
            return this.$store.state.currentLang === LANG_OPTIONS[0].value;
        }
    },
    methods: {
        differentSceneBanner(imgName){
            return `background: url('/banner/${imgName}.png') no-repeat center / cover;`;
        },
        differentSceneBannerPad(imgName){
            return `background: url('/banner/${imgName}_pad.png') no-repeat center / cover;`;
        },
        differentBanner(imgName) {
            if(this.clientWidth > 768) {
                return this.differentSceneBanner(imgName);
            } else if(this.clientWidth <= 768 && this.clientWidth > 420) {
                return this.differentSceneBannerPad(imgName);
            }
        }
    },
    mounted(){
        window.onresize = () => {
            return this.clientWidth = +document.body.clientWidth;
        }
    }
}
</script>

<style lang="stylus">
.app_title_container {
    width: 100%;
    height: 36rem;
    @media (max-width: 420px) {
        height: 25rem;
    }
    
    .app_title_content_container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 auto;
        max-width: 99.2rem;
        height: 100%;
        @media (max-width: 1200px) {
            box-sizing: border-box;
            padding-left: 4.8rem;
            padding-right: 4.8rem;
        }
        @media (max-width: 420px) {
            padding-left: 1.6rem;
            padding-right: 1.6rem;
        }
        .app_title_content {
            width: 100%;
            @media (max-width: 1200px) {
                box-sizing: border-box;
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }
            .app_title {
                font-size: $fontSize40;
                font-weight: $fontWeight500;
                color: #191E3F;
                line-height: 4.8rem;
                @media (max-width: 768px) {
                    font-size: $fontSize36;
                }
                @media (max-width: 420px) {
                    font-size: $fontSize22;
                    text-align: center;
                }
            }
            .app_sub_title {
                margin-top: 2.4rem;
                font-size: $fontSize20;
                font-weight: $fontWeight400;
                color: rgba(0,0,0,.75);
                line-height: 2.4rem;
                @media (max-width: 420px) {
                    font-size: $fontSize16;
                    text-align: center;
                }
            }
            .app_sub_title_en {
                max-width: 69rem;
            }
        }
    }
}
</style>