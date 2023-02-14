<template>
    <div class="irita">
        <ProductsTitle :titleContent="titleContent"></ProductsTitle>
        <!-- todo shan 添加新增頁面 -->
    </div>
</template>

<script>
import ProductsTitle from './ProductsTitle.vue';
import { getModuleContent } from '../../util';
export default {
    name: 'Irita',
    computed: {
        titleContent() {
            return getModuleContent(this, 'titleContent');
		},
    },
    components: {
        ProductsTitle
    }
}
</script>

<style lang="stylus" scoped>
.irita {
    margin-top: 4.8rem;
}
</style>