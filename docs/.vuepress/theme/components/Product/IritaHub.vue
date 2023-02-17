<template>
    <div class="iritahub_container">
        <IritaHubTitle :titleContent="titleContent"></IritaHubTitle>
        <IntroContent :introContent="introContent"></IntroContent>
        <ArchiContent :architectureContent="architectureContent"></ArchiContent>
        <CaptionImgContent :captionContent="advantageContent" :imgWidth="advImgWidth" :imgHeight="advImgHeight"></CaptionImgContent>
    </div>
</template>

<script>
import IritaHubTitle from "./IritaHubTitle.vue";
import IntroContent from "./IntroContent.vue";
import ArchiContent from "./ArchiContent.vue";
import CaptionImgContent from "../Common/CaptionImgContent.vue";
import { getModuleContent } from '../../util';

export default {
    name: "IritaHub",
    data(){
        return {
            advImgWidth: 95,
            advImgHeight: 95
        }
    },
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
        CaptionImgContent
    }
};
</script>

<style lang="stylus">
.iritahub_container {
    margin-top: 4.8rem;
    .caption {
        .caption_container {
            .caption_content {
                .line {
                    display: none;
                }
            }
        }
    }
}
</style>