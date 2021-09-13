<template>
  <Header />
  <SearchInputGroup />
</template>

<script>

import Header from '@/components/Header.vue'
import SearchInputGroup from '@/components/SearchInputGroup.vue'

export default {
  name: 'Home',
  components: {
    Header,
    SearchInputGroup
  }
}
</script>
