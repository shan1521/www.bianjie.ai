<template>
    <div class="nft">
        <AppTitle :appTitleContent="titleContent" />
        <NftExample :nftList="nftList" />
    </div>
</template>

<script>
import AppTitle from '../../Common/AppTitle.vue';
import NftExample from './NftExample.vue';
import { getModuleContent } from '../../../util';

export default {
    name: 'Nft',
    computed: {
        titleContent() {
            return getModuleContent(this, 'titleContent');
        },
        nftList() {
            return getModuleContent(this, 'nftList');
        }
    },
    components: {
        AppTitle,
        NftExample
    }
}
</script>

<style lang="stylus" scoped>
.nft {
    margin-top: 4.8rem;
}
</style>