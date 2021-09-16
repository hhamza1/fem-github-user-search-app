<template>
  <form @submit='onSubmit' id='search-input-group'>
    <label for="username">
      <img src="../assets/images/icon-search.svg" alt="search icon">
    </label>
    <input
      type="text"
      class="searchInput"
      name='username'
      v-model='username'
      placeholder="Search GitHub username…"
    >
    <CustomBtn/>
  </form>
</template>

<script>

import CustomBtn from './CustomBtn.vue'

export default {
  name: 'SearchInputGroup',
  components: {
    CustomBtn
  },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.$emit('search-username', this.username)
    }
  }
}
</script>
