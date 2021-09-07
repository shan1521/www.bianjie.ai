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
                <IritaHub v-if="$page.frontmatter.isIritaHub"></IritaHub>
                <IritaOpb v-if="$page.frontmatter.isIritaOpb"></IritaOpb>
                <Dynamic v-if="$page.frontmatter.isDynamic"></Dynamic>
                <Partner v-if="$page.frontmatter.isPartner"></Partner>
                <About v-if="$page.frontmatter.isAbout"></About>
                <Milestone v-if="$page.frontmatter.isMilestone"></Milestone>
                <Honour v-if="$page.frontmatter.isHonour"></Honour>
                <Join v-if="$page.frontmatter.isJoin"></Join>
                <Commingsoon
                    v-if="$page.frontmatter.isCommingsoon"
                ></Commingsoon>
                <AppScenes v-if="showApp"></AppScenes>
                <Markdown :showMd="showMd"></Markdown>
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
import IritaHub from "@theme/components/Product/IritaHub.vue";
import IritaOpb from "@theme/components/Product/IritaOpb.vue";
import Dynamic from "@theme/components/Dynamic/Dynamic.vue";
import Partner from "@theme/components/Partner/Partner.vue";
import About from "@theme/components/About/About.vue";
import Milestone from "@theme/components/Milestone/Milestone.vue";
import Honour from "@theme/components/Honour/Honour.vue";
import Join from "@theme/components/Join/Join.vue";
import Commingsoon from "@theme/components/Common/Commingsoon.vue";
import Markdown from "@theme/components/Common/Markdown.vue";
import AppScenes from "@theme/components/AppScenes/AppScenes.vue";
import Footer from "@theme/components/Footer.vue";

import { resolveSidebarItems } from "../util";
const nav = require("../../config.js");

export default {
    name: "Layout",
    data() {
        return {
            isSidebarOpen: false,
        };
    },
    computed: {
        showMd() {
            return Object.keys(this.$page.frontmatter).length === 0;
        },
        showApp(){
            if(this.$route.path === '/applications/government.html') {
                return '$page.frontmatter.isGovernment';
            }
            if(this.$route.path === '/applications/finance.html') {
                return '$page.frontmatter.isFinance';
            }
            if(this.$route.path === '/applications/carbonneutral.html') {
                return '$page.frontmatter.isCarbonneutral';
            }
            if(this.$route.path === '/applications/cultural.html') {
                return '$page.frontmatter.isCultural';
            }
            if(this.$route.path === '/applications/health.html') {
                return '$page.frontmatter.isHealth';
            }
            if(this.$route.path === '/applications/net.html') {
                return '$page.frontmatter.isNet';
            }
        },
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
    mounted() {
        this.$router.afterEach(() => {
            this.isSidebarOpen = false;
        });
    },
    watch: {
        $route: {
            handler(val, oldval) {
                nav.themeConfig.nav.forEach((item, index) => {
                    if (item.link === val.path) {
                        this.$store.commit("currentIndex", index);
                    }
                });
                // console.log(val);//新路由信息
            },
            immediate: true,
            // 深度观察监听
            deep: true,
        },
    },
    components: {
        Home,
        Page,
        Sidebar,
        Navbar,
        Navigation,
        NewHome,
        IritaHub,
        IritaOpb,
        Dynamic,
        Partner,
        About,
        Milestone,
        Honour,
        Join,
        Commingsoon,
        Markdown,
        AppScenes,
        Footer,
    },
};
</script>
<style lang='stylus'>
@import '../../public/iconfont/iconfont.css';

.theme-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>
