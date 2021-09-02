<template>
  <div class="honour_container">
      <AboutTitle :aboutTitle="aboutTitle"></AboutTitle>
      <AboutContent :aboutType="aboutType" :tab="2"></AboutContent>
  </div>
</template>

<script>
import AboutTitle from '@theme/components/Common/AboutTitle.vue';
import AboutContent from '@theme/components/About/AboutContent.vue';
export default {
    name: 'Honour',
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
.honour_container {
    width: 100%;
    height: 100%;
}
</style>