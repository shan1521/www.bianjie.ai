<template>
    <div
        class="theme-container"
        :class="pageClasses"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <ClientOnly>
            <Navigation></Navigation>
        </ClientOnly>
        <ClientOnly>
            <div class="main_container">
                <NewHome v-if="$page.frontmatter.isNewHome"></NewHome>
                <!--              <Developer v-if="$page.frontmatter.isDeveloper"></Developer>-->
                <!--              <Community v-if="$page.frontmatter.isCommunity" />-->
                <!--              <div class="md_container" v-if="showMd">-->
                <!--                  <div class="md_wrap">-->
                <!--                      <Content></Content>-->
                <!--                  </div>-->
                <!--              </div>-->
            </div>
        </ClientOnly>
        <ClientOnly>
            <Footer></Footer>
        </ClientOnly>
    </div>
</template>

<script>
import Home from "@theme/components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import Navigation from "@theme/components/Navigation.vue";
import NewHome from "@theme/components/Home/NewHome.vue";
import Footer from "@theme/components/Footer.vue";

import { resolveSidebarItems } from "../util";

export default {
    name: "Layout",

    components: {
        Home,
        Page,
        Sidebar,
        Navbar,
        Navigation,
        NewHome,
        Footer,
    },

    data() {
        return {
            isSidebarOpen: false,
        };
    },

    computed: {
        shouldShowNavbar() {
            const { themeConfig } = this.$site;
            const { frontmatter } = this.$page;
            if (frontmatter.navbar === false || themeConfig.navbar === false) {
                return false;
            }
            return (
                this.$title ||
                themeConfig.logo ||
                themeConfig.repo ||
                themeConfig.nav ||
                this.$themeLocaleConfig.nav
            );
        },

        shouldShowSidebar() {
            const { frontmatter } = this.$page;
            return (
                !frontmatter.home &&
                frontmatter.sidebar !== false &&
                this.sidebarItems.length
            );
        },

        sidebarItems() {
            return resolveSidebarItems(
                this.$page,
                this.$page.regularPath,
                this.$site,
                this.$localePath
            );
        },

        pageClasses() {
            const userPageClass = this.$page.frontmatter.pageClass;
            return [
                {
                    "no-navbar": !this.shouldShowNavbar,
                    "sidebar-open": this.isSidebarOpen,
                    "no-sidebar": !this.shouldShowSidebar,
                },
                userPageClass,
            ];
        },
    },

    mounted() {
        this.$router.afterEach(() => {
            this.isSidebarOpen = false;
        });
    },

    methods: {
        toggleSidebar(to) {
            this.isSidebarOpen =
                typeof to === "boolean" ? to : !this.isSidebarOpen;
            this.$emit("toggle-sidebar", this.isSidebarOpen);
        },

        // side swipe
        onTouchStart(e) {
            this.touchStart = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY,
            };
        },

        onTouchEnd(e) {
            const dx = e.changedTouches[0].clientX - this.touchStart.x;
            const dy = e.changedTouches[0].clientY - this.touchStart.y;
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                if (dx > 0 && this.touchStart.x <= 80) {
                    this.toggleSidebar(true);
                } else {
                    this.toggleSidebar(false);
                }
            }
        },
    },
};
</script>
<style lang='stylus'>
.theme-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>
