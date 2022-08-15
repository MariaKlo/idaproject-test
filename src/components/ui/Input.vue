<script>
export default {
  name: 'Input',
};
</script>

<template>
  <h4 class="cart__name">Наименование товара</h4>
  <input name='item' type='text' placeholder='Введите цену' class='cart__input'>
</template>

<style lang="scss">
  .cart__name {
    font-size: .625rem;
    margin-bottom: .875rem;
    position: relative;

    &::after {
      content: '';
      background-color: #FF8484;
      width: .25rem;
      height: .25rem;
      border-radius: 50%;
      position: absolute;
      top: 0.1rem;
      right: 10.95rem;
    }
  }
  .cart__input {
    width: 100%;
    padding: .625rem 0 .625rem 1rem;
    border: none;
    border-radius: .3125rem;
    -webkit-box-shadow: 0px 7px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 7px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 7px 10px 2px rgba(34, 60, 80, 0.2);
    margin-bottom: 1rem;

    &::placeholder {
      color: #B4B4B4;
    }
  }
</style>
