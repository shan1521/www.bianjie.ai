import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import app from '@/components/app'
import Validators from '../components/Validators.vue';
import Home from '../home/Home'
Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/validators',
                name: 'validators',
                component: Validators
            },

            {
                path: '/app',
                name: 'app',
                component: app
            },
        ]
    })
}

