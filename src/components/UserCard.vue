<template>
  <div class="user-card">
      <div class="user-card__user-id">
        <div class="user-card__user-id--img-container">
          <img src="../assets/images/octocat.png">
        </div>
        <ul class="user-card__user-id--user-info">
          <li id="name">The Octocat</li>
          <li id="username">@octocat</li>
          <li id="date">Joined 25 Jan 2011</li>
        </ul>
      </div>
      <p class="user-card__user-description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
      </p>
      <UserStats />
  </div>
</template>

<script>

import UserStats from './UserStats.vue'

export default {
  name: 'UserCard',
  components: {
    UserStats
  }
}
</script>
