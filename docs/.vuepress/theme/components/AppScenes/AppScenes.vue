<template>
    <div class="appscenes_container">
        <AppTitle v-if="appTitleContent" :appTitleContent="appTitleContent"></AppTitle>
        <SceneStatus v-if="sceneStatusContent" :sceneStatusContent="sceneStatusContent"></SceneStatus>
        <PlanAdvantage v-if="plansContent" :plansContent="plansContent"></PlanAdvantage>
        <ProcessArchi v-if="processContent" :processContent="processContent"></ProcessArchi>
        <CoreFunctions v-if="coreFunctions" :coreFunctions="coreFunctions"></CoreFunctions>
        <Example v-if="exampleContent" :exampleContent="exampleContent"></Example>
        <AppExample v-if="appExample" :appExample="appExample" />
    </div>
</template>

<script>
import AppTitle from './AppTitle';
import SceneStatus from './SceneStatus';
import PlanAdvantage from './PlanAdvantage';
import ProcessArchi from './ProcessArchi';
import CoreFunctions from './CoreFunctions';
import Example from './Example';
import AppExample from './AppExample';
import { getModuleContent } from '../../util';

export default {
    name: "AppScenes",
    computed: {
        appTitleContent() {
            return getModuleContent(this, 'appTitleContent');
        },
        sceneStatusContent() {
            return getModuleContent(this, 'sceneStatusContent');
        },
        plansContent() {
            return getModuleContent(this, 'plansContent');
        },
        processContent() {
            return getModuleContent(this, 'processContent');
        },
        coreFunctions() {
            return getModuleContent(this, 'coreFunctions');
        },
        exampleContent() {
            return getModuleContent(this, 'exampleContent');
        },
        appExample() {
            return getModuleContent(this, 'appExample')
        }
    },
    components: {
        AppTitle,
        SceneStatus,
        PlanAdvantage,
        ProcessArchi,
        CoreFunctions,
        Example,
        AppExample
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