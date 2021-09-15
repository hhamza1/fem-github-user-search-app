<template>
  <div id="header">
    <h2 class="appName">devfinder</h2>
    <ThemeButton
      :isDark=isDark
      :btnTag=btnTag
      :icon=icon
      @click="toggleTheme()"
    />
  </div>
</template>

<script>

import ThemeButton from './ThemeButton.vue'

export default {
  name: 'Header',
  props: ['isDark', 'btnTag', 'icon'],
  components: {
    ThemeButton
  },
  methods: {
    toggleTheme (isDark) {
      this.$emit('toggle-theme', !isDark)
    }
  }
}
</script>
