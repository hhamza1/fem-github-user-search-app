<template>
  <Header />
  <SearchInputGroup />
  <UserCard />
</template>

<script>

import Header from '@/components/Header.vue'
import SearchInputGroup from '@/components/SearchInputGroup.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'Home',
  components: {
    Header,
    SearchInputGroup,
    UserCard
  }
}
</script>
