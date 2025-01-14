<template>
  <div class="books-list">
    <div class="list__header-wrapper">
      <div class="header__search-wrapper">
        <img src="../assets/icons/logo.svg" class="search__logo">
        <div class="search__item-wrapper">
          <img src="../assets/icons/search.svg" class="item__icon">
          <input type="text" placeholder="Найти ту самую книгу" class="search__item">
        </div>
      </div>
      <div class="header__info-wrapper">
        <h1 class="info__title">
          Книги в каталоге
          <span class="info__count">3</span>
        </h1>
        <button class="info__add-book">
          <img src="../assets/icons/add.svg">
          Добавить книгу
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.books-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 40px;
  background: rgb(245, 246, 246);

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

          &::placeholder {color: rgb(112, 119, 134);}
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
      }
    }
  }
}
</style>