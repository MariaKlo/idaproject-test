<script>
import Item from './Item.vue';

export default {
  name: 'Items',
  components: { Item },
};
</script>

<template>
  <div class='cart__items'>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
  </div>
</template>

<style lang="scss">
  .cart__items {
    display: flex;
    flex-wrap: wrap;
    padding-top: 2.75rem;
  }
  @media screen and (max-width: 47.3125rem) {
    .cart__items {
      display: inherit;
    }
  }
</style>
