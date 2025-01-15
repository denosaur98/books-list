<template>
  <div class="book-item" v-for="book in props.searchItems" :key="book.id">
    <div class="item__header">
      <h1 class="header__title">{{ book.title }}</h1>
      <button class="header__edit" @click="openEditPopup">
        <img src="../assets/icons/edit.svg">
      </button>
    </div>
    <div class="item__info">
      <p class="info__element">{{ book.author }}</p>
      <p class="info__element">{{ book.year }}</p>
      <p class="info__element">{{ book.genre }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import store from '../store/index.js';

function openEditPopup() {
  store.commit('openEditPopup')
}

const props = defineProps({
  searchItems: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.book-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgb(245, 246, 246);
  border-radius: 16px;
  gap: 10px;
  padding: 15px;

  .item__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 600px) {
      align-items: flex-start;
    }

    .header__title {
      color: rgb(15, 23, 42);
      font-size: 16px;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0%;
      text-align: left;
    }

    .header__edit {
      cursor: pointer;
      border: none;
      background: none;
      margin-left: 10px;
    }
  }

  .item__info {
    display: flex;
    align-items: center;
    gap: 15px;

    .info__element {
      color: rgb(112, 119, 134);
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0px;
      text-align: left;
    }
  }
}
</style>