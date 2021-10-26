<template>
    <div class="iritaopb_container">
        <IritaOpbTitle :iritaopbTitleContent="iritaopbTitleContent"></IritaOpbTitle>
        <IritaOpbIntro :iritaopbIntroContent="iritaopbIntroContent"></IritaOpbIntro>
        <Feature :featuresContent="featuresContent"></Feature>
        <Process :processContent="processContent"></Process>
    </div>
</template>

<script>
import IritaOpbTitle from "./IritaOpbTitle.vue";
import IritaOpbIntro from "./IritaOpbIntro.vue";
import Feature from "./Feature.vue";
import Process from "./Process.vue";
export default {
    name: "IritaOpb",
    computed: {
        iritaopbTitleContent() {
			return this.$frontmatter.iritaopbTitleContent;
		},
        iritaopbIntroContent() {
			return this.$frontmatter.iritaopbIntroContent;
		},
        featuresContent() {
			return this.$frontmatter.featuresContent;
		},
        processContent() {
			return this.$frontmatter.processContent;
		},
    },
    components: {
        IritaOpbTitle,
        IritaOpbIntro,
        Feature,
        Process
    }
};
</script>

<style lang="stylus">
.iritaopb_container {
    margin-top: 4.8rem;
}
</style>