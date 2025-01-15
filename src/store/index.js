import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			isPopupOpen: false,
			books: [
				{
					id: 1,
					title: 'Как разговаривать с кем угодно, когда угодно, где угодно',
					keywords: ['Ларри Кинг', '2011', 'Научпоп'],
				},
				{
					id: 2,
					title: 'Больше, чем просто красивая. 12 тайных сил женщины, перед которой невозможно устоять',
					keywords: ['Кара Кинг', '2020', 'Научпоп'],
				},
				{
					id: 3,
					title: 'Чистый код: создание, анализ и рефакторинг',
					keywords: ['Роберт Мартин', '2008'],
				},
			],
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
