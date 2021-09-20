<template>
  <div class="user-details">
    <ul>
      <li id="location" :class="(location===''||location==null?'not-available':'')">
        <img src="../assets/images/icon-location.svg" alt="Location">
        <span>{{
          (location === "" || location == null?"Not Available":location)
        }}</span>
      </li>
      <li id="website" :class="(website===''||website==null?'not-available':'')">
        <img
          src="../assets/images/icon-website.svg"
          alt="Website"
          >
        <span>{{
          (website === "" || website == null?"Not Available":website)
        }}</span>
      </li>
      <li  id="twitter" :class="(twitter===''||twitter==null?'not-available':'')">
        <img src="../assets/images/icon-twitter.svg" alt="Twitter">
        <span>{{
          (twitter === "" || twitter == null?"Not Available":`@${twitter}`)
        }}</span>
      </li>
      <li id="company" :class="(company===''||company==null?'not-available':'')">
        <img src="../assets/images/icon-company.svg" alt="Company">
        <span>
          {{
            (company === '' || company == null?'Not Available': `@${company}`)
          }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserDetails',
  props: ['website', 'company', 'location', 'twitter']
}
</script>
