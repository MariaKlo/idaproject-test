<script>
import Input from './ui/Input.vue';
import Textarea from './ui/Textarea.vue';
import Button from './ui/Button.vue';

export default {
  name: 'Form',
  components: { Input, Textarea, Button },
};
</script>

<template>
  <div class="cart__wrapper">
    <h1 class="cart__header">Добавление товара</h1>
    <form class="cart__form">
      <Input
      :text="'Наименование товара'"
      :type-input="'text'"
      :placeholder="'Введите наименование товара'"/>
      <Textarea/>
      <Input
      :text="'Ссылка на изображение товара'"
      :type-input="'text'"
      :placeholder="'Введите ссылку'"/>
      <Input
      :text="'Цена товара'"
      :type-input="'number'"
      :placeholder="'Введите цену'"/>
      <Button/>
    </form>
  </div>
</template>

<style lang="scss">
  .cart__header {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .cart__form {
    width: 20.75rem;
    height: 32.5rem;
    background-color: #FFFEFB;
    padding: 1.5rem;
    border-radius: .3125rem;
  }
</style>
