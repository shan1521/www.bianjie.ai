<template>
    <ul class="product_list">
        <li
            class="item"
            v-for="(
                item, index
            ) in serviceContent.productContent"
            :key="index"
            v-if="index === currentTab"
        >
            <div class="left">
                <div class="name">{{ item.name }}</div>
                <div class="intro">{{ item.intro }}</div>
                <div class="desc">
                    {{ item.description }}
                </div>
                <a class="name_btn_git" v-if="item.link && index === 0" :href="item.link" target="_blank" rel="noopener noreferrer">
                    <span>{{item.moreText}}</span>
                </a>
                <router-link class="name_btn" v-if="item.route" :to="item.route">
                    <More
                        :text.sync="item.moreText"
                    ></More>
                </router-link>
            </div>
            <div class="right">
                <img :src="differentImg(item.imgName)" alt="" />
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SwiperProduct'
}
</script>

<style lang="stylus">

</style>