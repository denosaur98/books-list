<template>
  <div class="confirm-popup-wrapper">
    <div class="popup__overlay" @click="closeConfirmPopup"></div>
    <div class="confirm-popup">
      <button class="confirm__popup-button" @click="removeBook">Да</button>
      <button class="confirm__popup-button" @click="closeConfirmPopup">Нет</button>
    </div>
  </div>
</template>

<script setup>
import store from '../store/index';

function closeConfirmPopup() {
  store.commit('closeConfirmPopup')
}
function removeBook() {
  store.commit('removeBook', store.state.selectedBook)
}
</script>

<style lang="scss" scoped>
.confirm-popup-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .popup__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 998;
    background: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
  }

  .confirm-popup {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 150px;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid rgb(245, 246, 246);
    border-radius: 16px;
    background: rgb(255, 255, 255);

    .confirm__popup-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 12px;
      color: rgb(255, 255, 255);
      border-radius: 8px;
      font-size: 14px;
      border: none;
      background: rgb(28, 125, 65);
      width: 50px;
    }
  }
}
</style>