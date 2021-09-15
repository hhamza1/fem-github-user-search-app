<template>
  <div class="user-stats">
    <table>
      <tr>
        <th>Repos</th>
        <th>Followers</th>
        <th>Following</th>
      </tr>
      <tr>
        <td>{{repos}}</td>
        <td>{{followers}}</td>
        <td>{{following}}</td>
      </tr>
    </table>
  </div>
</template>
<script>

export default {
  name: 'UserStats',
  props: ['repos', 'followers', 'following']
}
</script>
