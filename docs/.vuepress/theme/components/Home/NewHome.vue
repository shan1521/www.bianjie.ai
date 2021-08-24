<template>
    <div class="home_container">
        <Swiper></Swiper>
    </div>
</template>

<script>
import Swiper from '@theme/components/Home/Swiper.vue';
export default {
    name: "NewHome",
    components: {
        Swiper
    }
};
</script>

<style lang="stylus">
.home_container {
    // flex: 1 0;
}
</style>