<template>
  <div class="more_container">
      <div class="text">{{text}}</div>
  </div>
</template>

<script>
export default {
    name: 'More',
    props: ['text'],
}
</script>

<style lang="stylus">
.more_container {
    display: flex;
    align-items: center;
    width: 12.4rem;
    height: 3.2rem;
    background: url(../../assets/home/without_outline_icon.png) no-repeat center / cover;
    border-radius: 0.2rem;
    &:hover {
        cursor: pointer;
    }
    .text {
        margin-left: 2rem;
        font-size: $fontSize14;
        font-weight: $fontWeight400;
        color: #fff;
        line-height: 1.4rem;
    }
}
</style>