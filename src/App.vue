<template>
    <div id="app">
        <Header></Header>
        <router-view :key="key"/>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../src/components/Header";
    import Footer from "../src/components/Footer";
    import $ from 'jquery'
    export default {
        name: 'app',
        components: {Footer, Header},
        watch:{
          $route(){
              $('body,html').scrollTop(0)
          }
        },
        data(){
            return {
                key: new Date().getTime()
            }
        }
  /*
        methods: {
          /!*
            resize(_this) {
                _this.is = $(window).width() >= 900
                if (_this.is) {
                    _this.toggleSwitchHome()
                } else {
                    _this.toggleSwitchMobileHome()
                    window.onload=function () {
                        document.addEventListener('touchstart',function (event) {
                            if(event.touches.length>1){
                                event.preventDefault();
                            }
                        })
                        var lastTouchEnd=0;
                        document.addEventListener('touchend',function (event) {
                            var now=(new Date()).getTime();
                            if(now-lastTouchEnd<=300){
                                event.preventDefault();
                            }
                            lastTouchEnd=now;
                        },false)
                    }
                }
            },*!/
            toggleSwitchHome(){
                if(this.$route.path === '/cosmos'){
                    this.$router.replace('/cosmos');
                }else {
                    this.$router.replace('/');
                }
            },
            toggleSwitchMobileHome(){
                if(this.$route.path === '/cosmos'){
                    this.$router.replace('/cosmos');
                }else {
                    this.$router.replace('/app');
                }
            },
        },

        created() {
           /!* if (process.env.VUE_ENV === 'client') {
                let _this = this;
                _this.resize(_this)
                window.onresize = function () {
                    _this.resize(_this)
                }
            }*!/
        }*/
    }
</script>
<style lang="less">
    @font-face {
        font-family: "SourceHanSansCN-Medium";
        src: url("assets/font/SourceHanSansCN-Medium.otf"),
        url("assets/font/SourceHanSansCN-Medium.ttf"),
        url("assets/font/SourceHanSansCN-Medium.woff")
        url("assets/font/SourceHanSansCN-Medium.eot");

        font-style: normal;
        font-weight: normal;
    }
    
    html{
        font-size:625%;
        width:100%;
        height:100%;
    }
    *{
        font-family: SourceHanSansCN-Medium;
    }
    body{
        font-size:16px;
        width:100%;
        height:100%;
        overflow: hidden;
        overflow-y: auto;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
    }
    #app{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .swiper-pagination-bullet{
            width: 0.04rem !important;
            height: 0.04rem !important;
            margin: 0.01rem !important;
        }
    }

</style>

