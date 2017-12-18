import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import news from '@/components/news'
import product from '@/components/product'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: index
      },
      {
          path: '/news',
          name: 'news',
          component: news
      },
      {
          path: '/product',
          name: 'product',
          component: product
      }
    ]
  })
}

