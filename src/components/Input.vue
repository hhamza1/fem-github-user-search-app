<template>
  <input
    type="search"
    class="searchInput"
    v-model="username"
    id="username"
    placeholder="Search GitHub username…"
  >
</template>

<script>
export default {
  name: 'Input',
  methods: {
    handleSubmit () {
      console.log(this.username)
    }
  },
  data () {
    return {
      username: ''
    }
  },
  props: ['modelValue'],
  computed: {
    inputValue: {
      get () {
        return this.modelValue
      },
      set (value) {
        console.log(value)
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
