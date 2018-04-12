<template>
  <div class="ui card">
    <div class="ui slide masked reveal image">
      <img src="/src/assets/mainContent/carousel/appCenter.jpg" class="visible content">

      <div class="ui buttons">
        <button v-for="letter in letters" class="ui button">{{letter}}</button>
      </div>

    </div>
    <div class="content">
      <a class="header">Team Fu &amp; Hess</a>
      <div class="meta">
        <span class="date">Created in Sep 2014</span>
      </div>
    </div>
    <div class="extra content">
      <a><i class="users icon"></i> 2 Members </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "appFilter",
    data() {
      return {
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      }
    }
  }
</script>

<style scoped>

</style>
