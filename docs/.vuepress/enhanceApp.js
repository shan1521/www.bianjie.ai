import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.prototype.$bus = new Vue();
export default async ({
    Vue,
	options,
	router,
	siteData,
	isServer,
}) => {
    // 解决  Uncaught (in promise) Error: Redirected when going from "/xxx/xxx.html" to "/xxx/xxx" via a navigation guard 警告
	const originalPush = router.push
	router.push = function push(location, onResolve, onReject) {
        if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
		return originalPush.call(this, location).catch(err => {err})
	}
    
	Vue.use(router)
	Vue.use(Vuex)
    Vue.use(Element);
	Vue.mixin({ store: store });
	if(!isServer){
		router.beforeEach((to, from,next) => {
			if(to.path.includes('/products/iritahub') || to.path.includes('/products/iritaopb')){
				store.commit('currentIndex',1)
				localStorage.setItem('currentIndex',1)
			}else if (to.path.includes('/applications')){
				store.commit('currentIndex',2)
				localStorage.setItem('currentIndex',2)
			}else if (to.path.includes('/news')){
				store.commit('currentIndex',3)
				localStorage.setItem('currentIndex',3)
			}else if (to.path.includes('/partners')){
				store.commit('currentIndex',4)
				localStorage.setItem('currentIndex',4)
			}else if (to.path.includes('/about') || to.path.includes('/milestone') || to.path.includes('/honour') || to.path.includes('/join')){
				store.commit('currentIndex',5)
				localStorage.setItem('currentIndex',5)
			}else {
				localStorage.setItem('currentIndex',0)
				store.commit('currentIndex',0)
			}
			window.scrollTo(0,0);
			next()
		})
		// await import("./public/iconfont/iconfont").then(module => {
		// })
		await import('element-ui').then(module => {
			Vue.use(module.default)
		}).catch(e => {
			console.log(e,'element-ui error ')
		})
		await import('vue-awesome-swiper').then( module => {
			Vue.use(module.default)
		}).catch(e => {
			console.log(e,'vue-awesome-swiper error')
		})
		// await import('vue-line-clamp').then(module => {
		// 	Vue.use(module)
		// }).catch(e => {
		// 	console.log(e,'vue-line-clamp error')
		// })
		// await import('overlayscrollbars-vue').then(module => {
		// 	Vue.use(module.OverlayScrollbarsPlugin)
		// }).catch(e => {
		// 	console.log(e,'overlayscrollbars-vue error')
		// })
	}
}
