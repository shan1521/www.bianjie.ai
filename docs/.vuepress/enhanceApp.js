import Vuex from 'vuex';
import store from './store';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './public/iconfont/iconfont.js';
import { LANG_OPTIONS } from './theme/constants';
import { getCurrentEdition } from './theme/util';

// import 'video.js/dist/video-js.css';
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
		const edition = getCurrentEdition();
		if(edition) {
			// 国内版不应从 localStorage 中读取语言配置
			let urlLang = '';
			if(localStorage.getItem('currentLang')){
				urlLang = localStorage.getItem('currentLang');
			} else {
				urlLang = edition ? LANG_OPTIONS[1].value : LANG_OPTIONS[2].value;
				localStorage.setItem('currentLang', urlLang);
			}
			store.commit('currentLang', urlLang);
		} else {
			store.commit('currentLang', LANG_OPTIONS[2].value);
		}
		router.beforeEach((to, from, next) => {
			if(to.path.toLowerCase().includes('/products')){
				store.commit('currentIndex',1)
				localStorage.setItem('currentIndex',1)
			}else if (to.path.toLowerCase().includes('/applications')){
				store.commit('currentIndex',2)
				localStorage.setItem('currentIndex',2)
			}else if (to.path.toLowerCase().includes('/news') || to.path.toLowerCase().includes('/companynews')){
				store.commit('currentIndex',3)
				localStorage.setItem('currentIndex',3)
			}else if (to.path.toLowerCase().includes('/partners')){
				store.commit('currentIndex',4)
				localStorage.setItem('currentIndex',4)
			}else if (to.path.toLowerCase().includes('/about') || to.path.toLowerCase().includes('/milestone') || to.path.toLowerCase().includes('/honour') || to.path.toLowerCase().includes('/join')){
				store.commit('currentIndex',5)
				localStorage.setItem('currentIndex',5)
			}else {
				store.commit('currentIndex',0)
				localStorage.setItem('currentIndex',0)
			}
			if (to?.path === '/') next(`${store.state.currentLang}`);
			else next();
		})
		await import("./public/iconfont/iconfont").then(module => {
		})
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
	}
}
