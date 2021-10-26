<template>
  <div class="about_container">
      <AboutTitle :aboutTitle="aboutTitle"></AboutTitle>
      <AboutContent :aboutType="aboutType" :companyInfo="companyInfo" :industryAdvantage="industryAdvantage"></AboutContent>
  </div>
</template>

<script>
import AboutTitle from '@theme/components/Common/AboutTitle.vue';
import AboutContent from '@theme/components/About/AboutContent.vue';
export default {
    name: 'About',
    computed: {
        aboutTitle() {
			return this.$frontmatter.aboutTitle;
		},
        aboutType() {
			return this.$frontmatter.aboutType;
		},
        companyInfo() {
			return this.$frontmatter.companyInfo;
		},
        industryAdvantage() {
			return this.$frontmatter.industryAdvantage;
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