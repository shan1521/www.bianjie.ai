<template>
    <div class="irita">
        <ProductsTitle :titleContent="titleContent"></ProductsTitle>
        <IritaIntro :iritaIntro="iritaIntro" />
        <IritaCore :advantageContent="advantageContent" />
        <IritaTech :techApplication="techApplication" />
    </div>
</template>

<script>
import ProductsTitle from '../ProductsTitle.vue';
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
        ProductsTitle,
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