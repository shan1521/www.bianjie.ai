<template>
  <div class="about_container">
      <AboutTitle :aboutTitle="aboutTitle"></AboutTitle>
      <AboutContent :aboutType="aboutType" :companyInfo="companyInfo" :industryAdvantage="industryAdvantage"></AboutContent>
  </div>
</template>

<script>
import AboutTitle from '@theme/components/Common/AboutTitle.vue';
import AboutContent from '@theme/components/About/AboutContent.vue';
import { getModuleContent } from '../../util';

export default {
    name: 'About',
    computed: {
        aboutTitle() {
            return getModuleContent(this, 'aboutTitle');
		},
        aboutType() {
            return getModuleContent(this, 'aboutType');
		},
        companyInfo() {
            return getModuleContent(this, 'companyInfo');
		},
        industryAdvantage() {
            return getModuleContent(this, 'industryAdvantage');
		},
    },
    components: {
        AboutTitle,
        AboutContent
    }
}
</script>

<style lang="stylus">
.about_container {
    width: 100%;
    height: 100%;
}
</style>