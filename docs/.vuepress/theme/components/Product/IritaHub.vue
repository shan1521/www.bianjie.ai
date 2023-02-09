<template>
    <div class="iritahub_container">
        <IritaHubTitle :titleContent="titleContent"></IritaHubTitle>
        <IntroContent :introContent="introContent"></IntroContent>
        <ArchiContent :architectureContent="architectureContent"></ArchiContent>
        <Advantage :advantageContent="advantageContent"></Advantage>
    </div>
</template>

<script>
import IritaHubTitle from "./IritaHubTitle.vue";
import IntroContent from "./IntroContent.vue";
import ArchiContent from "./ArchiContent.vue";
import Advantage from "./Advantage.vue";
import { getModuleContent } from '../../util';

export default {
    name: "IritaHub",
    computed: {
        titleContent() {
            return getModuleContent(this, 'titleContent');
		},
        introContent() {
            return getModuleContent(this, 'introContent');
		},
        architectureContent() {
            return getModuleContent(this, 'architectureContent');
		},
        advantageContent() {
            return getModuleContent(this, 'advantageContent');
		},
    },
    components: {
        IritaHubTitle,
        IntroContent,
        ArchiContent,
        Advantage
    }
};
</script>

<style lang="stylus">
.iritahub_container {
    margin-top: 4.8rem;
}
</style>