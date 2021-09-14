<template>
  <div id="search-input-group">
    <label for="username">
      <img src="../assets/images/icon-search.svg" alt="search icon">
    </label>
    <Input />
    <CustomBtn />
  </div>
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
