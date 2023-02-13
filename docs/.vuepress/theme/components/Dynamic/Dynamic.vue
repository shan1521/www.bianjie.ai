<template>
  <div class="dynamic_container">
      <DynamicTitle :dynamicTitle="dynamicTitle"></DynamicTitle>
      <DynamicContent :dynamicList="dynamicList"></DynamicContent>
  </div>
</template>

<script>
import DynamicTitle from './DynamicTitle.vue';
import DynamicContent from './DynamicContent.vue';
import { getModuleContent } from '../../util';

export default {
    name: 'Dynamic',
    computed: {
        dynamicTitle() {
            return getModuleContent(this, 'dynamicTitle');
		},
        dynamicList() {
            return getModuleContent(this, 'dynamicList');
		}
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
    background: #F5F6FB;
}
</style>