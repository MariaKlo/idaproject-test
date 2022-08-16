<script>
export default {
  name: 'Item',
};
</script>

<template>
  <div class='cart__wrapper'>
    <img src='../assets/img/camera.jpeg' alt='товар' class='cart__item'>
    <div class='cart__description'>
      <h3 class='cart__title'>Наименование товара</h3>
      <p class='cart__text'>Довольно-таки интересное описание товара в несколько строк.
      Довольно-таки интересное описание товара в несколько строк</p>
      <p class='cart__price'>10 000 руб.</p>
    </div>
  </div>
</template>

<style lang="scss">
  .cart__wrapper {
    max-width: 20.75rem;
    min-height: 26.4375rem;
    background-color: #FFFEFB;
    border-radius: .3125rem;
    margin: 1rem;
    position: relative;

    &:hover::before {
      content: url('../assets/img/trash-can.png');
      display: block;
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      position: absolute;
      top: -1rem;
      right: -0.375rem;
      z-index: 1;
    }
  }
  .cart__trash-can {
    display: none;
  }
  .cart__description {
    padding: 1rem 1rem 1.5rem 1rem;
  }
  .cart__title {
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  .cart__text {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .cart__price {
    font-weight: 600;
    font-size: 1.5rem;
  }
</style>
