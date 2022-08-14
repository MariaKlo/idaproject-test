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

<script>
import Item from './Item.vue';

export default {
  name: 'Items',
  components: { Item },
};
</script>
