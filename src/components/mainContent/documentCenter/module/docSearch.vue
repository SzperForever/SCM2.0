<template>
  <div class="ui fluid card centered searchCard" style="width: 90%;">
    <Breadcrumb style="padding: 10px;">
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem>Document Center</BreadcrumbItem>
    </Breadcrumb>
    <div class="content">
      <div class="video-jabil">
        <video src="/src/assets/mainContent/documentCenter/jabil-wave-hand-charcoal.mp4"
               poster="/src/assets/mainContent/documentCenter/hand-poster.jpg" autoplay="autoplay"
               height="auto" loop style="transform: translateY(-320px)"></video>
      </div>
    </div>
  </div>
</template>

<script>
  import VideoBg from 'vue-videobg'

  export default {
    name: "docSearch",
    components: {VideoBg},
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
  .searchCard {
    margin-top: 20px!important;
  }

  .video-jabil {
    width: 100%;
    min-height: 100%;
    height: 450px;
    overflow: hidden;
  }
</style>
