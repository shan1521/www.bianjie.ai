<template>
    <div class="appscenes_container">
        <AppTitle v-if="appTitleContent" :appTitleContent="appTitleContent"></AppTitle>
        <SceneStatus v-if="sceneStatusContent" :sceneStatusContent="sceneStatusContent"></SceneStatus>
        <PlanAdvantage v-if="plansContent" :plansContent="plansContent"></PlanAdvantage>
        <ProcessArchi v-if="processContent" :processContent="processContent"></ProcessArchi>
        <CoreFunctions v-if="coreFunctions" :coreFunctions="coreFunctions"></CoreFunctions>
        <Example v-if="exampleContent" :exampleContent="exampleContent"></Example>
    </div>
</template>

<script>
import AppTitle from './AppTitle';
import SceneStatus from './SceneStatus';
import PlanAdvantage from './PlanAdvantage';
import ProcessArchi from './ProcessArchi';
import CoreFunctions from './CoreFunctions';
import Example from './Example';
export default {
    name: "AppScenes",
    computed: {
        appTitleContent() {
            return this.$frontmatter.appTitleContent;
        },
        sceneStatusContent() {
            return this.$frontmatter.sceneStatusContent;
        },
        plansContent() {
            return this.$frontmatter.plansContent;
        },
        processContent() {
            return this.$frontmatter.processContent;
        },
        coreFunctions() {
            return this.$frontmatter.coreFunctions;
        },
        exampleContent() {
            return this.$frontmatter.exampleContent;
        },
    },
    components: {
        AppTitle,
        SceneStatus,
        PlanAdvantage,
        ProcessArchi,
        CoreFunctions,
        Example
    }
};
</script>

<style lang="stylus">
.appscenes_container {
    margin-top: 4.8rem;
    width: 100%;
    height: 100%;
}
</style>