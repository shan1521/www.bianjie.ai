<template>
    <div class="img_content" :class="{ img_content_reverse: position === 1 }">
        <slot name="img"></slot>
        <div class="img_content_right">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImgContent',
    props: ['position']
}
</script>

<style lang="stylus" scoped>
.img_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.img_content_reverse {
    flex-direction: row-reverse;
}
</style>