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
import { getModuleContent } from '../../util';

export default {
    name: "IritaOpb",
    computed: {
        iritaopbTitleContent() {
            return getModuleContent(this, 'iritaopbTitleContent');
		},
        iritaopbIntroContent() {
            return getModuleContent(this, 'iritaopbIntroContent');
		},
        featuresContent() {
            return getModuleContent(this, 'featuresContent');
		},
        processContent() {
            return getModuleContent(this, 'processContent');
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