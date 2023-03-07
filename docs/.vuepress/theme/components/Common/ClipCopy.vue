<template>
    <div id="clip_copy" class="clip" :data-clipboard-text="copyText">
        <div class="copy_text" @click="handleCopy">{{ copyText }}</div>
        <div v-if="showCopyText" class="copy_sign" :style="{left: edition ? '15rem' : '12.4rem'}">
            <SvgIcon class="svg_icon" iconName="icon-success_copied" />
            <p class="sign">{{ copySign }}</p>
        </div>
    </div>
</template>

<script>
import Clipboard from 'clipboard';
import SvgIcon from "@theme/components/Common/SvgIcon.vue";
import { getCurrentEdition, clearTimer } from '@theme/util';
export default {
    name: 'ClipCopy',
    props: ['copyText', 'copySign'],
    data() {
        return {
            edition: getCurrentEdition(),
            showCopyText: false,
            copyTimer: null
        }
    },
    methods: {
        handleCopy() {
            if(this.showCopyText) return;
            clearTimer(this.copyTimer);
            const clipboard = new Clipboard('#clip_copy');
            clipboard.on('success', () => {
                // 释放内存
                this.showCopyText = true;
                clipboard.destroy();
                this.copyTimer = setTimeout(() => {
                    this.showCopyText = false;
                }, 3000)
            });
            clipboard.on('error', () => {
                // 不支持复制
                // 释放内存
                this.showCopyText = false;
                clipboard.destroy();
            });
        }
    },
    beforeDestroy() {
        clearTimer(this.copyTimer);
    },
    components: {
        SvgIcon
    }
}
</script>

<style lang="stylus" scoped>
.clip {
    position: relative;
    display: flex;
    align-items: center;
    
    .copy_text {
        cursor: pointer;
    }
    .copy_sign {
        position: absolute;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        margin-left: 0.8rem;
        padding: 0.3rem 0.4rem;
        border: 0.1rem solid rgba(9,103,233,0.35);
        border-radius: 0.4rem;
        @media (max-width: 500px) {
            top: 2.6rem;
            left: 50% !important;
            margin-left: 0;
            transform: translateX(-50%); 
        }
        .svg_icon {
            width: 1.2rem;
            height: 1.2rem;
        }
        .sign {
            margin-left: 0.4rem;
            font-size: $fontSize12;
            font-weight: $fontWeight400;
            color: #fff;
            line-height: 1.4rem;
        }
    }
}
</style>