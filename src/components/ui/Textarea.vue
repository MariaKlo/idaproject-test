<script>
export default {
  name: 'Textarea',
};
</script>

<template>
  <h4 class='cart__name'>Описание товара</h4>
  <textarea name='link' class='cart__textarea' placeholder='Введите описание товара'></textarea>
</template>

<style lang="scss">
  .cart__name {
    font-size: .625rem;
    margin-bottom: .875rem;
    position: relative;
  }
  .cart__textarea {
    width: 100%;
    height: 6.75rem;
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
