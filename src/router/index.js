import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home/Home'
import Production from "../components/Production"
import ProductionBsnIritaHub from "../components/ProductionBsnIritaHub"
import ProductionIrita from "../components/ProductionIrita"
import Applications from "../components/Applications"
import ApplicationFinance from "../components/ApplicationFinance"
import ApplicationCooperation from "../components/ApplicationCooperation"
import ApplicationTrust from "../components/ApplicationMultiTrust"
import Partners from "../components/Partners"
import News from "../components/Information"
import About from "../components/About"
import Download from "../components/Download"
Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name:Home,
                component: Home
            },
            {
                path: '/home',
                name:Home,
                component: Home
            },
            {
                path: '/products/iritahub',
                name:ProductionBsnIritaHub,
                component: ProductionBsnIritaHub
            },
            {
                path: '/products/irita',
                name:ProductionIrita,
                component: ProductionIrita
            },
            {
                path: '/application/digital-asset',
                name:Applications,
                component: Applications
            },
            {
                path: '/application/finance',
                name:ApplicationFinance,
                component: ApplicationFinance
            },
            {
                path: '/application/cooperation',
                name:ApplicationCooperation,
                component: ApplicationCooperation
            },
            {
                path: '/application/multi-trust',
                name:ApplicationTrust,
                component: ApplicationTrust
            },
            {
                path: '/partners',
                name:Partners,
                component: Partners
            },
            {
                path: '/news',
                name:News,
                component: News
            },
            {
                path: '/about',
                name:About,
                component: About
            },
            {
                path: '/download',
                name:Download,
                component: Download
            },
        ]
    })
}

