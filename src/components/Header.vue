<template>
  <div id="header">
    <h2 class="appName">devfinder {{isDark}}</h2>
    <ThemeButton @click="toggleTheme(isDark)" />
  </div>
</template>

<script>

import ThemeButton from './ThemeButton.vue'

export default {
  name: 'Header',
  components: {
    ThemeButton
  },
  props: ['isDark'],
  methods: {
    toggleTheme (isDark) {
      this.$emit('click', !isDark)
      console.log(isDark)
    }
  }
}
</script>
