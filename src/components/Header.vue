<template>
  <div id="header">
    <h2 class="appName">devfinder</h2>
    <ThemeButton />
  </div>
</template>

<script>

import ThemeButton from './ThemeButton.vue'

export default {
  name: 'Header',
  components: {
    ThemeButton
  }
}
</script>
