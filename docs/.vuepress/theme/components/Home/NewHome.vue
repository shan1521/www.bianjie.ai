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
import { getModuleContent } from '../../util';
export default {
    name: "NewHome",
    computed: {
        homeContent() {
			return getModuleContent(this, 'homeContent')
		},
        bsnWenchangchain() {
			return getModuleContent(this, 'bsnWenchangchain')
        },
        advantageContent() {
			return getModuleContent(this, 'advantageContent')
		},
        serviceContent() {
			return getModuleContent(this, 'serviceContent')
		},
        scenesContent() {
			return getModuleContent(this, 'scenesContent')
		},
        partnerContent() {
			return getModuleContent(this, 'partnerContent')
		},
        dynamicContent() {
			return getModuleContent(this, 'dynamicContent')
		},
    },
    methods:{
        updateShowMask(val){
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
    flex: auto;
    width: 100%;
    height: 100%;
}
</style>