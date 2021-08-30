<template>
    <div class="iritahub_container">
        <TitleContent :titleContent="titleContent"></TitleContent>
    </div>
</template>

<script>
import TitleContent from "./TitleContent.vue";
export default {
    name: "IritaHub",
    computed: {
        titleContent() {
			return this.$frontmatter.titleContent;
		},
    },
    components: {
        TitleContent
    }
};
</script>

<style lang="stylus">
</style>