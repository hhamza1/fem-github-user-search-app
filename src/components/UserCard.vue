/* eslint-disable indent */
<template>
  <div class="user-card">
      <div class="user-card__user-id">
        <div class="user-card__user-id--img-container">
        <img :src=user.avatar_url>
        </div>
        <ul class="user-card__user-id--user-info">
          <li id="name">
            {{
              (user.name==null?"Not Available":user.name)
            }}
          </li>
          <li id="username">
            {{
              (user.login==null?"Not Available":`@${user.login}`)
            }}
          </li>
          <li id="date">
            {{
              (user.created_at==null?"Not Available":`Joined ${dateConverter(user.created_at)}`)
            }}
          </li>
        </ul>
      </div>
      <p class="user-card__user-description">
        {{
          (user.bio==null?"Not Available":user.bio)
        }}
      </p>
      <UserStats
        :repos = user.public_repos
        :followers = user.followers
        :following = user.following
      />
      <UserDetails
        :company=user.company
        :twitter=user.twitter_username
        :location=user.location
        :website="user.blog"
      />
  </div>
</template>

<script>

import UserStats from './UserStats.vue'
import UserDetails from './UserDetails.vue'

export default {
  name: 'UserCard',
  components: {
    UserStats,
    UserDetails
  },
  props: ['user'],
  methods: {
    dateConverter (date) {
      if (date) {
        var newDate = new Date(date)
        return newDate.toDateString().slice(4)
      } else {
        return 'No Date Available'
      }
    }
  }
}
</script>
