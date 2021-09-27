import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		currentIndex: 0,
        currentTab: 0,
        subMenu: 0
	},
	mutations: {
		currentIndex(state,currentIndex){
			state.currentIndex = currentIndex;
		},
		currentTab(state,currentTab){
			state.currentTab = currentTab;
		},
		subMenu(state,subMenu){
			state.subMenu = subMenu;
		}
	}
})
