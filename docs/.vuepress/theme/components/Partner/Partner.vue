<template>
  <div class="partner_container_wrapper">
      <PartnerTitle :partnerTitle="partnerTitle"></PartnerTitle>
      <PartnerContent :partnerList="partnerList"></PartnerContent>
  </div>
</template>

<script>
import PartnerTitle from './PartnerTitle.vue';
import PartnerContent from './PartnerContent.vue';
import { getModuleContent } from '../../util';
export default {
    name: 'Partner',
    computed: {
        partnerTitle() {
			return getModuleContent(this, 'partnerTitle')
		},
        partnerList() {
			return getModuleContent(this, 'partnerList')
		},
    },
    components: {
        PartnerTitle,
        PartnerContent
    }
}
</script>

<style lang="stylus">
.partner_container_wrapper {
    width: 100%;
    // height: 100%;
}
</style>