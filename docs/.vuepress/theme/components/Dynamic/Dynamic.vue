<template>
  <div class="dynamic_container">
      <DynamicTitle :dynamicTitle="dynamicTitle"></DynamicTitle>
      <DynamicContent :dynamicList="dynamicList"></DynamicContent>
  </div>
</template>

<script>
import DynamicTitle from './DynamicTitle.vue';
import DynamicContent from './DynamicContent.vue';
export default {
    name: 'Dynamic',
    computed: {
        dynamicTitle() {
			return this.$frontmatter.dynamicTitle;
		},
        dynamicList() {
			return this.$frontmatter.dynamicList;
		},
    },
    components: {
        DynamicTitle,
        DynamicContent
    }
}
</script>

<style lang="stylus">
.dynamic_container {
    width: 100%;
    height: 100%;
}
</style>