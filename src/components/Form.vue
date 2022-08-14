<template>
    <form>
        <h1>Добавление товара</h1>
        <Input/>
        <Textarea/>
        <Input/>
        <Input/>
        <Button/>
    </form>
</template>

<script>
import Input from './ui/Input.vue';
import Textarea from './ui/Textarea.vue';
import Button from './ui/Button.vue';

export default {
  name: 'Form',
  components: { Input, Textarea, Button },
};
</script>
