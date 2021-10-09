<template>
    <div class="prev_btn_container">
        <div class="prev_content">
            <div class="prev"><i class="iconfont icon-jiantou_left"></i></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Prev",
};
</script>

<style lang="stylus">
.prev_btn_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.8rem;
    height: 4.8rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
    outline: none;

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