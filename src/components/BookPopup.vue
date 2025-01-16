<template>
  <div class="book-popup-wrapper">
    <div class="popup__overlay" @click="closeAddPopup" v-if="store.state.isAddPopupOpen"></div>
    <div class="popup__overlay" @click="closeEditPopup" v-else></div>
    <div class="book-popup">
      <div class="popup__header-wrapper">
        <div class="popup__header">
          <h1 class="header__title">{{ store.state.isAddPopupOpen ? "Добавить книгу" : "Редактирование" }}</h1>
          <p class="header__subtitle">{{ store.state.isAddPopupOpen ? "Заполните все поля и добавьте книгу в список" : "Внесите изменение в карточке" }}</p>
        </div>
        <button class="header__close-popup" @click="closeAddPopup" v-if="store.state.isAddPopupOpen">
          <img src="../assets/icons/close.svg">
        </button>
        <button class="header__close-popup" @click="closeEditPopup" v-else>
          <img src="../assets/icons/close.svg">
        </button>
      </div>
      <div class="popup__item">
        <label class="item__title">Название</label>
        <input type="text" class="item__input" :class="{ 'error__item-input': isSubmitted && errors.title }" placeholder="Название произведения" v-model="bookTitle">
        <p class="error__text" v-if="isSubmitted && errors.title">{{ errors.title }}</p>
      </div>
      <div class="popup__item">
        <label class="item__title">Автор</label>
        <input type="text" class="item__input" :class="{ 'error__item-input': isSubmitted && errors.author }" placeholder="Имя и фамилия автора" v-model="bookAuthor">
        <p class="error__text" v-if="isSubmitted && errors.author">{{ errors.author }}</p>
      </div>
      <div class="popup__item">
        <label class="item__title">Год</label>
        <input type="number" class="item__input" :class="{ 'error__item-input': isSubmitted && errors.year }" placeholder="Год выпуска" v-model="bookYear" @input="handleYearInput">
        <p class="error__text" v-if="isSubmitted && errors.year">{{ errors.year }}</p>
      </div>
      <div class="popup__item">
        <label class="item__title">Жанр</label>
        <input type="text" class="item__input" :class="{ 'error__item-input': isSubmitted && errors.genre }" placeholder="Добавьте жанр произведения" v-model="bookGenre">
        <p class="error__text" v-if="isSubmitted && errors.genre">{{ errors.genre }}</p>
      </div>
      <div class="popup__checkbox-item">
        <input type="checkbox" id="checkbox" class="checkbox" :class="{ 'error__checkbox': isSubmitted && errors.checkbox }" v-model="isCheckboxChecked">
        <label for="checkbox" class="checkbox__title">Я согласен с условиями <RouterLink to="#">Политики конфиденциальности</RouterLink></label>
      </div>
      <button class="popup__done" v-if="store.state.isAddPopupOpen" @click="addBook">
        <img src="../assets/icons/add.svg">
        Добавить
      </button>
      <div class="popup__buttons-wrapper" v-else>
        <button class="popup__done" @click="saveChanges">
          <img src="../assets/icons/add.svg">
          Сохранить
        </button>
        <button class="popup__delete" @click="openConfirmPopup">
          <img src="../assets/icons/trash.svg">
        </button>
      </div>
    </div>
    <ConfirmPopup v-if="store.state.isConfirmPopupOpen"/>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import store from '../store/index.js';
import ConfirmPopup from './ConfirmPopup.vue';
import yearMask from '../helpers/yearMask.js'

function closeAddPopup() {
  store.commit('closeAddPopup')
}
function closeEditPopup() {
  store.commit('closeEditPopup')
}
function openConfirmPopup() {
  store.commit('openConfirmPopup')
}

const bookTitle = ref('')
const bookAuthor = ref('')
const bookYear = ref('')
const bookGenre = ref('')
const isSubmitted = ref(false)
const isCheckboxChecked = ref(false)
const errors = ref({
  title: '',
  author: '',
  year: '',
  genre: '',
  checkbox: ''
})
function addBook() {
  isSubmitted.value = true;
  errors.value = {
    title: '',
    author: '',
    year: '',
    genre: ''
  }
  let isValid = true
  if (!bookTitle.value) {
    errors.value.title = 'Введите название книги'
    isValid = false
  }
  if (!bookAuthor.value) {
    errors.value.author = 'Введите автора книги'
    isValid = false
  }
  if (!bookYear.value) {
    errors.value.year = 'Введите год выпуска книги'
    isValid = false
  }
  if (!bookGenre.value) {
    errors.value.genre = 'Введите жанр книги'
    isValid = false
  }
  if (!isCheckboxChecked.value) {
    errors.value.checkbox = true
    isValid = false
  }
  if (!isValid) {
    return
  }
  const book = {
    id: store.state.books.length + 1,
    title: bookTitle.value,
    author: bookAuthor.value,
    year: bookYear.value,
    genre: bookGenre.value
  }
  store.commit('addBook', book)
  bookTitle.value = ''
  bookAuthor.value = ''
  bookYear.value = ''
  bookGenre.value = ''
  isSubmitted.value = false
  isCheckboxChecked.value = false
}

watch(() => store.state.selectedBook, (newBook) => {
  if (store.state.isEditPopupOpen && newBook) {
    bookTitle.value = newBook.title
    bookAuthor.value = newBook.author
    bookYear.value = newBook.year
    bookGenre.value = newBook.genre
  }
}, { immediate: true })

function saveChanges() {
  isSubmitted.value = true;
  errors.value = {
    title: '',
    author: '',
    year: '',
    genre: ''
  }
  let isValid = true
  if (!bookTitle.value) {
    errors.value.title = 'Введите название книги'
    isValid = false
  }
  if (!bookAuthor.value) {
    errors.value.author = 'Введите автора книги'
    isValid = false
  }
  if (!bookYear.value) {
    errors.value.year = 'Введите год выпуска книги'
    isValid = false
  }
  if (!bookGenre.value) {
    errors.value.genre = 'Введите жанр книги'
    isValid = false
  }
  if (!isCheckboxChecked.value) {
    errors.value.checkbox = true
    isValid = false
  }
  if (!isValid) {
    return
  }
  if (store.state.selectedBook) {
    const updatedBook = {
      id: store.state.selectedBook.id,
      title: bookTitle.value,
      author: bookAuthor.value,
      year: bookYear.value,
      genre: bookGenre.value
    }
    store.commit('updateBook', updatedBook)
  }
}

function handleYearInput(event) {
  yearMask(event)
  bookYear.value = event.target.value
}
</script>

<style lang="scss" scoped>
.book-popup-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .popup__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 996;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
  }

  .book-popup {
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 32px;
    width: 465px;
    z-index: 997;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid rgb(245, 246, 246);
    border-radius: 16px;
    background: rgb(255, 255, 255);
    gap: 15px;

    @media (max-width: 480px) {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 0;
    }

    .popup__header-wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;

      .popup__header {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .header__title {
          color: rgb(15, 23, 42);
          font-size: 20px;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: 0%;
          text-align: left;
        }

        .header__subtitle {
          color: rgb(112, 119, 134);
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: 0px;
          text-align: left;
        }
      }

      .header__close-popup {
        cursor: pointer;
        border: none;
        background: none;
      }
    }

    .popup__item {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 5px;

      .item__title {
        color: rgb(15, 23, 42);
        font-size: 14px;
        font-weight: 600;
        line-height: 150%;
        letter-spacing: 0%;
        text-align: left;
      }

      .item__input {
        width: 100%;
        border: 2px solid rgb(245, 246, 246);
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0px;
        text-align: left;
        padding: 10px 12px;
        border-radius: 8px;
        background: rgb(245, 246, 246);
        transition: .3s;

        @media (hover: hover) {
          &:hover {
            border: 2px solid rgb(28, 125, 65);
          }
        }
      
        &::placeholder {
          color: rgb(112, 119, 134);
        }

        &.error__item-input {border: 1px solid rgb(144, 11, 9);}
      }

      .error__text {
        position: absolute;
        color: rgb(144, 11, 9);
        font-size: 12px;
        bottom: -13px;
      }
    }

    .popup__checkbox-item {
      display: flex;
      align-items: center;
      gap: 10px;

      .checkbox {
        width: 15px;
        height: 15px;
        accent-color: rgb(28, 125, 65);

        &.error__checkbox {
          outline: 1px solid rgb(144, 11, 9);
          outline-offset: -1px;
        }
      }

      .checkbox__title {
        cursor: pointer;
        color: rgb(112, 119, 134);
        font-size: 10px;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 0px;
        text-align: left;

        a {
          color: rgb(112, 119, 134);
          text-underline-offset: 3px;
        }
      }
    }

    .popup__done {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 12px;
      border-radius: 8px;
      background: rgb(28, 125, 65);
      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0px;
      text-align: left;
      border: none;
      gap: 5px;
      width: max-content;
      margin-left: auto;

      @media (max-width: 480px) {
        width: 100%;
      }
    }

    .popup__delete {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border: none;
      background: rgb(245, 246, 246);
      border-radius: 8px;

      &:hover img {
        filter: brightness(0) saturate(100%) invert(15%) sepia(89%) saturate(2894%) hue-rotate(349deg) brightness(88%) contrast(109%);
      }
    }

    .popup__buttons-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-left: auto;
    }
  }
}
</style>