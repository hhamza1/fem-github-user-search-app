<template>
  <form id="search-input-group" @submit="handleSubmit">
    <label for="username">
      <img src="../assets/images/icon-search.svg" alt="search icon">
    </label>
    <Input />
    <CustomBtn />
  </form>
</template>

<script>

import Input from './Input.vue'
import CustomBtn from './CustomBtn.vue'

export default {
  name: 'SearchInputGroup',
  components: {
    Input,
    CustomBtn
  }
}
</script>
