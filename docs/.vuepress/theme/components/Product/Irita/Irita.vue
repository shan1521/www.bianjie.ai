<template>
    <div class="irita">
        <AppTitle :appTitleContent="titleContent" />
        <IritaIntro :iritaIntro="iritaIntro" />
        <IritaCore :advantageContent="advantageContent" />
        <IritaTech :techApplication="techApplication" />
    </div>
</template>

<script>
import AppTitle from '../../Common/AppTitle.vue';
import IritaIntro from './IritaIntro.vue';
import IritaCore from './IritaCore.vue';
import IritaTech from './IritaTech.vue';
import { getModuleContent } from '../../../util';
export default {
    name: 'Irita',
    computed: {
        titleContent() {
            return getModuleContent(this, 'titleContent');
        },
        iritaIntro() {
            return getModuleContent(this, 'iritaIntro');
        },
        advantageContent() {
            return getModuleContent(this, 'advantageContent');
        },
        techApplication() {
            return getModuleContent(this, 'techApplication');
        }
    },
    components: {
        AppTitle,
        IritaIntro,
        IritaCore,
        IritaTech
    }
}
</script>

<style lang="stylus" scoped>
.irita {
    margin-top: 4.8rem;
}
</style>