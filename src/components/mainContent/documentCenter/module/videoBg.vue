<template>
  <video-bg :sources="['/src/assets/mainContent/documentCenter/jabil-wave-hand-charcoal.mp4']" img="/src/assets/mainContent/documentCenter/hand-poster.jpg">
    <!-- If you want to add content here, a slot is waiting! -->
  </video-bg>
</template>

<script>
  import VideoBg from 'vue-videobg'

  export default {
    name: "videoBg",
    component : {VideoBg}
  }
</script>

<style scoped>

</style>
