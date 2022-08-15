<script>
export default {
  name: 'Button',
};
</script>

<template>
  <button type="submit" class='form__button' disabled>Добавить товар</button>
</template>

<style lang="scss">
  .form__button {
    width: 100%;
    border: none;
    border-radius: .625rem;
    background-color: #EEEEEE;
    padding: .625rem 0;
    text-align: center;
    font-size: .75rem;
    font-weight: 600;
    margin-top: 1.5rem;
  }
</style>
