<template>
  <Content>
    <carousel-nav></carousel-nav>
    <charts-content></charts-content>
  </Content>
</template>

<script>
  import CarouselNav from "./module/carouselNav";
  import ChartsContent from "./module/chartsContent";


  export default {
    name: "homePage",
    components: {ChartsContent, CarouselNav}
  }
</script>

<style scoped>

</style>
