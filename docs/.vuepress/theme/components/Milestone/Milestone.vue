<template>
  <div class="milestone_container">
      <AboutTitle :aboutTitle="aboutTitle"></AboutTitle>
      <AboutContent :aboutType="aboutType" :tab="1"></AboutContent>
      <MilestoneTime :timelineContent="timelineContent"></MilestoneTime>
  </div>
</template>

<script>
import AboutTitle from '@theme/components/Common/AboutTitle.vue';
import AboutContent from '@theme/components/About/AboutContent.vue';
import MilestoneTime from '@theme/components/Milestone/MilestoneTime.vue';
import { getModuleContent } from '../../util';

export default {
    name: 'Milestone',
    computed: {
        aboutTitle() {
            return getModuleContent(this, 'aboutTitle');
		},
        aboutType() {
            return getModuleContent(this, 'aboutType');
		},
        timelineContent() {
            return getModuleContent(this, 'timelineContent');
		},
    },
    components: {
        AboutTitle,
        AboutContent,
        MilestoneTime
    }
}
</script>

<style lang="stylus">
.milestone_container {
    width: 100%;
    height: 100%;
}
</style>