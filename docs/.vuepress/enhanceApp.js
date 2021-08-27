import Vue from 'vue';
// import Vuex from 'vuex';
// import store from './store';
// import Element from 'element-ui';
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
	// Vue.use(Vuex)
    // Vue.use(Element);
	// Vue.mixin({ store: store });
	if(!isServer){
		// router.beforeEach((to, from,next) => {
		// 	if(to.path.includes('/blog') || to.path.includes('/article') || to.path.includes('/community')){
		// 		store.commit('currentIndex',2)
		// 		localStorage.setItem('currentIndex',2)
		// 	}else if (to.path.includes('/developer')){
		// 		store.commit('currentIndex',3)
		// 		localStorage.setItem('currentIndex',3)
		// 	}else {
		// 		localStorage.setItem('currentIndex',0)
		// 		store.commit('currentIndex',0)
		// 	}
		// 	window.scrollTo(0,0);
		// 	next()
		// })
		// await import("./public/iconfont/iconfont").then(module => {
		// })
		// await import('element-ui').then(module => {
		// 	Vue.use(module.default)
		// }).catch(e => {
		// 	console.log(e,'element-ui error ')
		// })
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
