<template>
    <div class="detail_container">
        <span class="detail">查看详情</span>
        <i class="iconfont icon-jiantou"></i>
    </div>
</template>

<script>
export default {
    name: "Detail",
};
</script>

<style lang="stylus">
.detail_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.2rem;
    color: #0967E9;
    &:hover {
        cursor: pointer;
    }

    .detail {
        font-size: $fontSize14;
        font-weight: $fontWeight500;
        line-height: 2rem;
    }

    .iconfont {
        margin-left: 0.4rem;
        font-size: $fontSize14;
    }
}
</style>