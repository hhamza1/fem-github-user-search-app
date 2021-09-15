<template>
  <Header v-model="isDark"/>
  <SearchInputGroup />
  <UserCard
    :user=user
  />
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
  },
  data () {
    return {
      user: [],
      isDark: false
    }
  },
  async mounted () {
    const res = await fetch('https://api.github.com/users/ocatcat')
    const data = await res.json()
    this.user = data
    console.log(this.user)
  }
}
</script>
