<template >
  <div :class="(!isDark)?'container':'container container--dark-theme'">
    <Header
      @toggle-theme='toggleTheme'
      :isDark=isDark
      :btnTag=btnTag
      :icon=icon
    />
    <SearchInputGroup
      @search-username='searchUsername'
    />
    <UserCard
      :user=user
      v-show='isloaded'
    />
    <Footer/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import SearchInputGroup from '@/components/SearchInputGroup.vue'
import UserCard from '@/components/UserCard.vue'
import Footer from '@/components/Footer.vue'

import moon from './assets/images/icon-moon.svg'
import sun from './assets/images/icon-sun.svg'

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
      username: 'octacat',
      errorMessage: '',
      btnTag: 'dark',
      icon: moon
    }
  },

  async mounted () {
    const res = await fetch('https://api.github.com/users/octacat')
    const data = await res.json()
    if (data.message == null || data.message === undefined) {
      this.user = data
      this.isloaded = res.ok
    } else { this.errorMessage = data.message }
  },

  methods: {
    async searchUsername (username) {
      const res = await fetch(`https://api.github.com/users/${username}`)
      const data = await res.json()
      if (data.message == null || data.message === undefined) {
        this.user = data
        this.isloaded = res.ok
      } else { this.errorMessage = data.message }
    },
    toggleTheme () {
      this.isDark = !this.isDark
      if (this.btnTag === 'dark') {
        this.btnTag = 'light'
        this.icon = sun
      } else {
        this.btnTag = 'dark'
        this.icon = moon
      }
    }
  }
}
</script>
