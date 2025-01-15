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
        <input type="text" class="item__input" placeholder="Название произведения" v-model="bookTitle">
      </div>
      <div class="popup__item">
        <label class="item__title">Автор</label>
        <input type="text" class="item__input" placeholder="Имя и фамилия автора" v-model="bookAuthor">
      </div>
      <div class="popup__item">
        <label class="item__title">Год</label>
        <input type="text" class="item__input" placeholder="Год выпуска" v-model="bookYear">
      </div>
      <div class="popup__item">
        <label class="item__title">Жанр</label>
        <input type="text" class="item__input" placeholder="Добавьте жанр произведения" v-model="bookGenre">
      </div>
      <div class="popup__checkbox-item">
        <input type="checkbox" id="checkbox" class="checkbox">
        <label for="checkbox" class="checkbox__title">Я согласен с условиями Политики конфиденциальности</label>
      </div>
      <button class="popup__done" v-if="store.state.isAddPopupOpen" @click="addBook">
        <img src="../assets/icons/add.svg">
        Добавить
      </button>
      <div class="popup__buttons-wrapper" v-else>
        <button class="popup__done">
          <img src="../assets/icons/add.svg">
          Сохранить
        </button>
        <button class="popup__delete">
          <img src="../assets/icons/trash.svg">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import store from '../store/index.js';

function closeAddPopup() {
  store.commit('closeAddPopup')
}
function closeEditPopup() {
  store.commit('closeEditPopup')
}

const bookTitle = ref('')
const bookAuthor = ref('')
const bookYear = ref('')
const bookGenre = ref('')
function addBook() {
  const book = {
    id: store.state.books.length + 1,
    title: bookTitle.value,
    author: bookAuthor.value,
    year: bookYear.value,
    genre: bookGenre.value
  }
  store.commit('addBook', book)
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
    z-index: 998;
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
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
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
        border: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0px;
        text-align: left;
        padding: 10px 12px;
        border-radius: 8px;
        background: rgb(245, 246, 246);
      
        &::placeholder {
          color: rgb(112, 119, 134);
        }
      }
    }

    .popup__checkbox-item {
      display: flex;
      align-items: center;
      gap: 10px;

      .checkbox {
        width: 15px;
        height: 15px;
      }

      .checkbox__title {
        cursor: pointer;
        color: rgb(112, 119, 134);
        font-size: 10px;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 0px;
        text-align: left;
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