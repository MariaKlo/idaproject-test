<script>
import Items from './components/Items.vue';
import Form from './components/Form.vue';

export default {
  name: 'App',
  components: { Items, Form },
};
</script>

<template>
  <section class='cart'>
    <div class='container'>
      <div class='cart__wrap'>
        <Form/>
        <Items/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .cart {
    padding-top: 2rem;

    &__wrap {
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 47.3125rem) {
    .cart__wrap {
      display: inherit;
    }
  }

</style>
