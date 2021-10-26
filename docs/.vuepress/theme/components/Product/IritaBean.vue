<template>
    <div class="iritabean_container">
        <Commingsoon :commingSoonContent="commingSoonContent"></Commingsoon>
    </div>
</template>

<script>
import Commingsoon from '@theme/components/Common/Commingsoon';
export default {
    name: 'IritaBean',
    computed: {
        commingSoonContent() {
            return this.$frontmatter.commingSoonContent;
        },
    },
    components: {
        Commingsoon
    }
}
</script>

<style lang="stylus">
.iritabean_container {
    width: 100%;
    height: 100%;
    background: #F5F6FB;
}
</style>