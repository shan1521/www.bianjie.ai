<template>
  <div class="milestone_container">
      <AboutTitle :aboutTitle="aboutTitle"></AboutTitle>
      <AboutContent :aboutType="aboutType" :tab="1"></AboutContent>
  </div>
</template>

<script>
import AboutTitle from '@theme/components/Common/AboutTitle.vue';
import AboutContent from '@theme/components/About/AboutContent.vue';
export default {
    name: 'Milestone',
    computed: {
        aboutTitle() {
			return this.$frontmatter.aboutTitle;
		},
        aboutType() {
			return this.$frontmatter.aboutType;
		},
    },
    components: {
        AboutTitle,
        AboutContent
    }
}
</script>

<style lang="stylus">
.milestone_container {
    width: 100%;
    height: 100%;
}
</style>