<template>
    <div class="home_container">
        <Swiper v-if="homeContent" :homeContent.sync="homeContent"></Swiper>
        <Wenchang v-if="wenchangchain" :wenchangchain.sync="wenchangchain"></Wenchang>
        <CaptionImgContent v-if="advantageContent" :captionContent.sync="advantageContent" :imgWidth="advImgWidth" :imgHeight="advImgHeight"></CaptionImgContent>
        <Product v-if="serviceContent" :serviceContent.sync="serviceContent"></Product>
        <Scenes v-if="scenesContent"  :scenesContent.sync="scenesContent"></Scenes>
        <Partner v-if="partnerContent" :partnerContent.sync="partnerContent"></Partner>
        <Dynamic v-if="dynamicContent" :dynamicContent.sync="dynamicContent"></Dynamic>
    </div>
</template>

<script>
import Swiper from '@theme/components/Home/Swiper.vue';
import Wenchang from '@theme/components/Home/Wenchang.vue';
import CaptionImgContent from '@theme/components/Common/CaptionImgContent.vue';
import Product from '@theme/components/Home/Product.vue';
import Scenes from '@theme/components/Home/Scenes.vue';
import Partner from '@theme/components/Home/Partner.vue';
import Dynamic from '@theme/components/Home/Dynamic.vue';
import { getModuleContent } from '../../util';
export default {
    name: "NewHome",
    data(){
        return {
            advImgWidth: 240,
            advImgHeight: 146
        }
    },
    computed: {
        homeContent() {
			return getModuleContent(this, 'homeContent')
		},
        wenchangchain() {
			return getModuleContent(this, 'wenchangchain')
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
		}
    },
    components: {
        Swiper,
        Wenchang,
        CaptionImgContent,
        Product,
        Scenes,
        Partner,
        Dynamic
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