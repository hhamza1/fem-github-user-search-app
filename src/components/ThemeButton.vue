<template>
  <a href="#" class="theme-btn">
    <span>
      {{btnTag}}
    </span>
    <img :src=icon>
  </a>
</template>

<script>
export default {
  name: 'ThemeButton',
  props: ['btnTag', 'isDark', 'icon']

}
</script>
