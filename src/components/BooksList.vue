<template>
  <div class="books-list-wrapper">
    <div class="books-list">
      <div class="list__header-wrapper">
        <div class="header__search-wrapper">
          <img src="../assets/icons/logo.svg" class="search__logo">
          <div class="search__item-wrapper">
            <img src="../assets/icons/search.svg" class="item__icon" v-if="searchValue === ''">
            <button class="item__clean-button" @click="clearSearch" v-else>
              <img src="../assets/icons/close.svg">
            </button>
            <input type="text" placeholder="Найти ту самую книгу" class="search__item" v-model="searchValue">
          </div>
        </div>
        <div class="header__info-wrapper">
          <h1 class="info__title">
            {{ wordDeclination(store.state.books.length, "книга") }} в каталоге
            <span class="info__count">{{ store.state.books.length }}</span>
          </h1>
          <button class="info__add-book" @click="openAddPopup">
            <img src="../assets/icons/add.svg">
            Добавить книгу
          </button>
        </div>
      </div>
    </div>
    <div class="list__place">
      <p class="place__no-results" v-if="searchItems.length === 0 && searchValue !== ''">По вашему запросу ничего не найдено.</p>
      <BookItem :searchItems="searchItems"/>
    </div>
    <BookPopup v-if="store.state.isAddPopupOpen || store.state.isEditPopupOpen"/>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import store from '../store/index.js';
import BookItem from './BookItem';
import BookPopup from './BookPopup';
import wordDeclination from '../helpers/wordDeclination.js';

function openAddPopup() {
  store.commit('openAddPopup')
}

const searchValue = ref('')
const searchItems = computed(() => {
  return store.state.books.filter(book => {
    return book.title.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})
function clearSearch() {
  searchValue.value = ''
}
</script>

<style lang="scss" scoped>
.books-list-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;

  .books-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px 40px;
    background: rgb(245, 246, 246);

    @media (max-width: 480px) {
      padding: 30px;
    }

    .list__header-wrapper {
      display: flex;
      flex-direction: column;
      gap: 30px;
      width: 100%;

      .header__search-wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 25px;

        .search__logo {
          width: auto;
          height: auto;
        }

        .search__item-wrapper {
          display: flex;
          align-items: center;
          width: 100%;
          background: #fff;
          border-radius: 8px;

          .item__icon {
            margin: 0 0 0 12px;
          }

          .item__clean-button {
            cursor: pointer;
            border: none;
            background: none;
            margin: 3px 0 0 12px;
          }

          .search__item {
            width: 100%;
            border: none;
            font-size: 14px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0px;
            text-align: left;
            padding: 10px 12px;
            border-radius: 8px;

            &::placeholder {
              color: rgb(112, 119, 134);
            }
          }
        }
      }

      .header__info-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .info__title {
          color: rgb(15, 23, 42);
          font-size: 20px;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: 0%;
          text-align: left;

          .info__count {
            color: rgb(112, 119, 134);
            margin-left: 10px;
          }
        }

        .info__add-book {
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

          @media (max-width: 480px) {
            position: absolute;
            bottom: 15px;
            width: 90%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 997;
          }
        }
      }
    }
  }

  .list__place {
    display: flex;
    flex-direction: column;
    padding: 15px 40px;
    gap: 15px;

    .place__no-results {
      color: rgb(112, 119, 134);
      font-size: 16px;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0%;
      text-align: left;
    }

    @media (max-width: 480px) {
      padding: 30px;
    }
  }
}
</style>