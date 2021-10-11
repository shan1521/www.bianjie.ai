<template>
    <div class="home_container">
        <Swiper :homeContent.sync="homeContent"></Swiper>
        <BSNWenchang :bsnWenchangchain.sync="bsnWenchangchain"></BSNWenchang>
        <Advantage :advantageContent.sync="advantageContent"></Advantage>
        <Product :serviceContent.sync="serviceContent"></Product>
        <Scenes :scenesContent.sync="scenesContent"></Scenes>
        <Partner :partnerContent.sync="partnerContent"></Partner>
        <Dynamic :dynamicContent.sync="dynamicContent" @updateShowMask.sync="updateShowMask($event)"></Dynamic>
    </div>
</template>

<script>
import Swiper from '@theme/components/Home/Swiper.vue';
import BSNWenchang from '@theme/components/Home/BSNWenchang.vue';
import Advantage from '@theme/components/Home/Advantage.vue';
import Product from '@theme/components/Home/Product.vue';
import Scenes from '@theme/components/Home/Scenes.vue';
import Partner from '@theme/components/Home/Partner.vue';
import Dynamic from '@theme/components/Home/Dynamic.vue';
export default {
    name: "NewHome",
    computed: {
        homeContent() {
			return this.$frontmatter.homeContent;
		},
        bsnWenchangchain() {
            return this.$frontmatter.bsnWenchangchain;
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
        partnerContent() {
			return this.$frontmatter.partnerContent;
		},
        dynamicContent() {
			return this.$frontmatter.dynamicContent;
		},
    },
    methods:{
        updateShowMask(val){
            console.log(val)
            this.showMask = val;
        },
    },
    components: {
        Swiper,
        BSNWenchang,
        Advantage,
        Product,
        Scenes,
        Partner,
        Dynamic,
    },
};
</script>

<style lang="stylus">
.home_container {
    // flex: 1 0;
    width: 100%;
    height: 100%;
}
</style>