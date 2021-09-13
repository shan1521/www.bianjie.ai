<template>
  <div class="app_title_container" :style="differentSceneBanner(appTitleContent.bg_banner)">
      <div class="app_title_content_container">
          <div class="app_title_content">
              <div class="app_title">{{appTitleContent.title}}</div>
              <div class="app_sub_title">{{appTitleContent.subTitle}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AppTitle',
    props: ['appTitleContent'],
    computed: {
        differentSceneBanner(){
            return function(imgName){
                return `background: url('/appscenes/banner/${imgName}') no-repeat center / cover;`;
            }
        }
    }
}
</script>

<style lang="stylus">
.app_title_container {
    width: 100%;
    height: 36rem;
    .app_title_content_container {
        box-sizing: border-box;
        padding: 10.4rem 0 0;
        margin: 0 auto;
        max-width: $contentWidth;
        .app_title_content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
            max-width: 99.2rem;
            .app_title {
                font-size: $fontSize40;
                font-weight: $fontWeight500;
                color: #191E3F;
                line-height: 5.6rem;
            }
            .app_sub_title {
                margin-top: 2.4rem;
                font-size: $fontSize20;
                font-weight: $fontWeight400;
                color: rgba(0,0,0,.75);
                line-height: 2.4rem;
            }
        }
    }
}
</style>