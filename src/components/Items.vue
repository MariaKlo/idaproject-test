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
  }
</style>
