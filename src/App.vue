<template>
  <Layout id="app">
    <top-bar></top-bar>
    <Layout>
      <router-view></router-view>
    </Layout>
    <footer-bar></footer-bar>
  </Layout>
</template>

<script>
  import TopBar from "./components/topBar/topBar";
  import MainContent from "./components/mainContent/homePage/homePage";
  import LeftSideBar from "./components/leftSideBar/leftSideBar";
  import FooterBar from "./components/footerBar/footerBar";



  export default {
    name: 'app',
    components: {FooterBar, LeftSideBar, MainContent, TopBar},
    data() {
      return {}
    }
  }
</script>

<style lang="scss">

</style>
