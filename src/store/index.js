import { createStore } from 'vuex'

const booksArray = [
	{
		id: 1,
		title: 'Как разговаривать с кем угодно, когда угодно, где угодно',
		author: 'Ларри Кинг',
		year: '2011',
		genre: 'Научпоп',
	},
	{
		id: 2,
		title: 'Больше, чем просто красивая. 12 тайных сил женщины, перед которой невозможно устоять',
		author: 'Кара Кинг',
		year: '2020',
		genre: 'Научпоп',
	},
	{
		id: 3,
		title: 'Чистый код: создание, анализ и рефакторинг',
		author: 'Роберт Мартин',
		year: '2008',
		genre: '',
	},
]
function loadBooks() {
	const books = localStorage.getItem('book')
	return books ? JSON.parse(books) : booksArray
}

export default createStore({
	state() {
		return {
			isAddPopupOpen: false,
			isEditPopupOpen: false,
			isConfirmPopupOpen: false,
			selectedBook: null,
			books: loadBooks(),
		}
	},
	mutations: {
		openAddPopup(state) {
			state.isAddPopupOpen = true
		},
		closeAddPopup(state) {
			state.isAddPopupOpen = false
		},
		openEditPopup(state, id) {
			state.selectedBook = state.books.find(book => book.id === id)
			state.isEditPopupOpen = true
		},
		closeEditPopup(state) {
			state.isEditPopupOpen = false
		},
		openConfirmPopup(state) {
			state.isConfirmPopupOpen = true
		},
		closeConfirmPopup(state) {
			state.isConfirmPopupOpen = false
		},
		addBook(state, newBook) {
			state.books.push(newBook)
			state.isAddPopupOpen = false
			saveBooks(state.books)
		},
		updateBook(state, updatedBook) {
			const index = state.books.findIndex(book => book.id === updatedBook.id)
			if (index !== -1) {
				state.books.splice(index, 1, updatedBook)
			}
			state.isEditPopupOpen = false
			saveBooks(state.books)
		},
		removeBook(state, removedBook) {
			const index = state.books.findIndex(book => book.id === removedBook.id)
			if (index !== -1) {
				state.books.splice(index, 1)
			}
			state.isEditPopupOpen = false
			state.isConfirmPopupOpen = false
			saveBooks(state.books)
		},
	},
})

function saveBooks(books) {
	localStorage.setItem('book', JSON.stringify(books))
}
