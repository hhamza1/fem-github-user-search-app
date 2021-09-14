<template>
  <Header />
  <SearchInputGroup />
  <UserCard />
  <Footer/>
</template>

<script>

import Header from '@/components/Header.vue'
import SearchInputGroup from '@/components/SearchInputGroup.vue'
import UserCard from '@/components/UserCard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    SearchInputGroup,
    UserCard,
    Footer
  }
}
</script>
