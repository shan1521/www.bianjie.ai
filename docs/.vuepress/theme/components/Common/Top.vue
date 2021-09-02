<template>
    <div class="top_container">
        <i class="iconfont icon-jiantou"></i>
    </div>
</template>

<script>
export default {
    name: "Top",
};
</script>

<style lang="stylus">
.top_container {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 2.4rem;
    height: 2.4rem;
    border: 0.2rem solid #0967E9;
    border-radius: 50%;

    .iconfont {
        font-size: $fontSize12;
        color: #0967E9;
    }
}
</style>