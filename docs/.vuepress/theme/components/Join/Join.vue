<template>
  <div class="join_container">
      <AboutTitle :aboutTitle="aboutTitle"></AboutTitle>
      <AboutContent :aboutType="aboutType" :tab="3"></AboutContent>
      <Jobs :hotJobs="hotJobs"></Jobs>
  </div>
</template>

<script>
import AboutTitle from '@theme/components/Common/AboutTitle.vue';
import AboutContent from '@theme/components/About/AboutContent.vue';
import Jobs from '@theme/components/Join/Jobs.vue';
import { getModuleContent } from '../../util';

export default {
    name: 'Join',
    computed: {
        aboutTitle() {
            return getModuleContent(this, 'aboutTitle');
		},
        aboutType() {
            return getModuleContent(this, 'aboutType');
		},
        hotJobs() {
            return getModuleContent(this, 'hotJobs');
		},
    },
    components: {
        AboutTitle,
        AboutContent,
        Jobs
    }
}
</script>

<style lang="stylus">
.join_container {
    width: 100%;
    height: 100%;
}
</style>