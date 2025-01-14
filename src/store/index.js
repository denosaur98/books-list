import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			isPopupOpen: false,
		}
	},
	mutations: {
		openPopup(state) {
			state.isPopupOpen = true
		},
		closePopup(state) {
			state.isPopupOpen = false
		},
	},
	actions: {},
})
