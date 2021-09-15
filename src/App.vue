<template>
  <Header v-model='isDark'/>
  <SearchInputGroup @search-username='searchUsername'/>
  <UserCard
    :user=user
    v-show='isloaded'
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
      isDark: false,
      isloaded: false,
      username: '',
      errorMessage: ''
    }
  },
  methods: {
    async searchUsername (username) {
      const res = await fetch(`https://api.github.com/users/${username}`)
      const data = await res.json()
      if (data.message == null || data.message === undefined) {
        this.user = data
        this.isloaded = res.ok
      } else { this.errorMessage = data.message }
    }
  },
  async mounted () {
    const res = await fetch('https://api.github.com/users/octacat')
    const data = await res.json()
    if (data.message == null || data.message === undefined) {
      this.user = data
      this.isloaded = res.ok
    } else { this.errorMessage = data.message }
  }
}
</script>
