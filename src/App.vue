<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods: {
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
            },
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
            if (process.env.VUE_ENV === 'client') {
                let _this = this;
                _this.resize(_this)
                window.onresize = function () {
                    _this.resize(_this)
                }
                console.log(this.$router)
            }
        }
    }
</script>
<style lang="less">
    html{
        font-size:625%;
        width:100%;
        height:100%;
        overflow: hidden;
        overflow-y: auto;
    }
    *{
        font-family: "PingFang SC Regular",'Microsoft YaHei','微软雅黑';
    }
    body{
        font-size:16px;
        width:100%;
        height:100%;
    }
</style>

