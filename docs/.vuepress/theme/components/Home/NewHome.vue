<template>
    <div class="home_container">
        <Swiper :homeContent.sync="homeContent"></Swiper>
        <Advantage :advantageContent.sync="advantageContent"></Advantage>
        <Product :serviceContent.sync="serviceContent"></Product>
        <Scenes :scenesContent.sync="scenesContent"></Scenes>
    </div>
</template>

<script>
import Swiper from '@theme/components/Home/Swiper.vue';
import Advantage from '@theme/components/Home/Advantage.vue';
import Product from '@theme/components/Home/Product.vue';
import Scenes from '@theme/components/Home/Scenes.vue';
export default {
    name: "NewHome",
    computed: {
        homeContent() {
			return this.$frontmatter.homeContent;
		},
        advantageContent() {
			return this.$frontmatter.advantageContent;
		},
        serviceContent() {
			return this.$frontmatter.serviceContent;
		},
        scenesContent() {
			return this.$frontmatter.scenesContent;
		},
    },
    components: {
        Swiper,
        Advantage,
        Product,
        Scenes
    }
};
</script>

<style lang="stylus">
.home_container {
    // flex: 1 0;
}
</style>