<script>
export default {
  name: 'Input',
  props: {
    text: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    typeInput: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <h4 class="cart__name">{{ text }}</h4>
  <input name='item' :type='typeInput' :placeholder='placeholder' class='cart__input' required>
</template>

<style lang="scss">
@import "../../styles/base/_mixins.scss";

  .cart__name {
    font-size: .625rem;
    margin-bottom: .875rem;
    position: relative;

    &:nth-child(1)::after {
      @include red-dot(0.1rem, 10.95rem);
    }

    &:nth-child(5)::after {
      @include red-dot(0.1rem, 8.2rem);
    }

    &:nth-child(7)::after {
      @include red-dot(0.1rem, 13.7rem);
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
    &:hover {
      border: 1px solid rgba(199, 199, 199, 0.5);
      color: rgba(199, 199, 199, 0.9);
    }
    &:focus-visible {
      outline: none;
      color: rgba(199, 199, 199, 0.9);
    }
    &:focus-within {
      color: rgba(199, 199, 199, 0.9);
    }
    &:focus {
      border: 1px solid rgba(199, 199, 199, 0.5);
      color: rgba(199, 199, 199, 0.9);
    }
    &:active {
      border: 1px solid rgba(199, 199, 199, 0.5);
      color: rgba(199, 199, 199, 0.9);
    }
  }
</style>
