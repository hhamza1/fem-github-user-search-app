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
              (user.joined==null?"Not Available":convertDate(user.joined))
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
  props: ['user']
}
</script>
