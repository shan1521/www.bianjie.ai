<template>
    <div class="prev_container">
        <div class="prev_content">
            <span class="prev"><i class="iconfont icon-jiantou_left"></i></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Prev",
};
</script>

<style lang="stylus">
.prev_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.8rem;
    height: 4.8rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    &:hover {
        cursor: pointer;
    }

    .prev_content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        border: 0.2rem solid #0967E9;
        border-radius: 50%;
        .prev {
            font-weight: $fontWeight500;
            color: #0967E9;
        }
    }
}
</style>