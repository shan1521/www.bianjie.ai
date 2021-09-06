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
export default {
    name: 'Milestone',
    computed: {
        aboutTitle() {
			return this.$frontmatter.aboutTitle;
		},
        aboutType() {
			return this.$frontmatter.aboutType;
		},
        timelineContent() {
			return this.$frontmatter.timelineContent;
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