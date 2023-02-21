<template>
  <div class="honour_container">
      <AboutTitle :aboutTitle="aboutTitle"></AboutTitle>
      <AboutContent :aboutType="aboutType" :tab="2"></AboutContent>
      <CertiQuali :certiQualiContent="certiQualiContent"></CertiQuali>
      <HonourList :honourList="honourList"></HonourList>
      <OtherHonours :otherHonoursContent="otherHonoursContent"></OtherHonours>
  </div>
</template>

<script>
import AboutTitle from '@theme/components/Common/AboutTitle.vue';
import AboutContent from '@theme/components/About/AboutContent.vue';
import CertiQuali from '@theme/components/Honour/CertiQuali.vue';
import HonourList from '@theme/components/Honour/HonourList.vue';
import OtherHonours from '@theme/components/Honour/OtherHonours.vue';
import { getModuleContent } from '../../util';
export default {
    name: 'Honour',
    computed: {
        aboutTitle() {
            return getModuleContent(this, 'aboutTitle');
		},
        aboutType() {
            return getModuleContent(this, 'aboutType');
		},
        certiQualiContent() {
            return getModuleContent(this, 'certiQualiContent');
		},
        honourList() {
            return getModuleContent(this, 'honourList');
		},
        otherHonoursContent() {
            return getModuleContent(this, 'otherHonoursContent');
		},
    },
    components: {
        AboutTitle,
        AboutContent,
        CertiQuali,
        HonourList,
        OtherHonours
    }
}
</script>

<style lang="stylus">
.honour_container {
    width: 100%;
    height: 100%;
}
</style>