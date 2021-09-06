<template>
    <div class="nav_container">
        <div class="nav_content">
            <div class="nav_logo">
                <img
                    v-if="!flShowBoxShadow"
                    src="../assets/home/logo_white.png"
                    alt=""
                />
                <img
                    v-if="flShowBoxShadow"
                    src="../assets/home/logo_black.png"
                    alt=""
                />
            </div>
            <div class="nav_list_more">
                <ul class="nav_list">
                    <li
                        v-show="!item.isRight"
                        class="nav_list_item"
                        v-for="(item, index) in navigationList"
                        :key="index"
                        @click="changeIndex(index)"
                    >
                        <router-link
                            class="item"
                            :class="currentIndex === index ? 'active' : ''"
                            :to="item.link"
                        >
                            {{ item.text }}
                        </router-link>
                        <ul
                            v-show="item.items && item.items.length > 0"
                            class="sub_menu"
                        >
                            <li class="sub_menu_item" v-for="v in item.items">
                                <router-link
                                    class="link_item"
                                    @click.stop="toPage(v.link)"
                                    :to="v.link"
                                >
                                    <div>{{ v.text }}</div>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="more">
                    <i class="iconfont icon-a-learnmore"></i>
                    <router-link
                        class="nav_list_item"
                        :to="`/download`"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {{ download }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return {
            navigation: [],
            flShowBoxShadow: false,
            // isShowSubMenuText: "",
            // flShowMobileMenu: false,
            // flShowSunMenu: false,
        };
    },
    created() {
        this.navigation = this.$site.themeConfig.nav;
    },
    computed: {
        navigationList() {
            return this.navigation;
        },
        currentIndex() {
            return +this.$store.state.currentIndex;
        },
        download() {
            return (
                this.navigation &&
                this.navigation.length > 0 &&
                this.navigation[this.navigation.length - 1].text
            );
        },
    },
    methods: {
        changeIndex(index) {
            if (this.currentIndex !== index && index !== 6) {
                this.$store.commit("currentIndex", index);
                localStorage.setItem("currentIndex", JSON.stringify(index));
            }
        },
        // handleScroll(e) {
        //     this.scrollTop =
        //         window.pageYOffset ||
        //         document.documentElement.scrollTop ||
        //         document.body.scrollTop;

        //     if (this.scrollTop > 5) {
        //         this.flShowBoxShadow = true;
        //     } else {
        //         this.flShowBoxShadow = false;
        //     }
        // },
    },
    mounted() {
        // this.scrollTop =
        //     window.pageYOffset ||
        //     document.documentElement.scrollTop ||
        //     document.body.scrollTop;
        // console.log(this.scrollTop, "this.scrollTop");
        // if (this.scrollTop > 5) {
        //     this.flShowBoxShadow = true;
        // } else {
        //     this.flShowBoxShadow = false;
        // }
        // window.addEventListener("scroll", this.handleScroll, true);
    },
};
</script>

<style lang="stylus">
.nav_container {
    position: fixed;
    width: 100%;
    height: 4.8rem;
    z-index: 2;
    .window_scroll {
        background: #fff;
    }

    .nav_content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 0.8rem;
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;

        .nav_logo {
            width: 9.8rem;
            height: 3.2rem;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .nav_list_more {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            font-size: $fontSize14;
            font-weight: $fontWeight400;

            .nav_list {
                display: flex;
                height: 100%;

                .nav_list_item {
                    margin-left: 6rem;
                    height: 100%;
                    line-height: 4.8rem;
                    cursor: pointer;

                    &:hover {
                        .sub_menu {
                            display: block;
                        }
                    }

                    &:first-child {
                        margin-left: 0;
                    }

                    .item {
                        display: block;
                        height: 100%;
                        color: rgba(255, 255, 255, 0.75);
                    }

                    .active {
                        position: relative;
                        color: #fff;

                        &::after {
                            content: '';
                            display: block;
                            clear: both;
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                            height: 0.2rem;
                            background: #fff;
                        }
                    }

                    .sub_menu {
                        z-index: 100;
                        display: none;
                        position: absolute;
                        top: 4.8rem;
                        list-style: none;
                        background: $whiteColor;
                        box-sizing: border-box;
                        padding: 0.2rem 0;
                        border-radius: 0 0 0.2rem 0.2rem;
                        border: 0.1rem solid $grayColor;

                        .sub_menu_item {
                            line-height: 1;
                            padding: 1rem 1.2rem;
                            white-space: nowrap;

                            .link_item {
                                color: #000;
                            }
                        }
                    }
                }
            }

            .more {
                margin-left: 6rem;

                .iconfont {
                    display: inline-block;
                    margin-right: 0.2rem;
                    width: 1.6rem;
                    height: 1.6rem;
                    color: #fff;
                }

                .nav_list_item {
                    display: inline-block;
                    height: 100%;
                    color: #fff;
                }
            }
        }
    }
}
</style>