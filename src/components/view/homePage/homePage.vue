<template>
  <Layout>
    <top-bar></top-bar>
    <Layout>
      <main-content></main-content>
    </Layout>
    <footer-bar></footer-bar>
  </Layout>
</template>

<script>
  import TopBar from "./components/topBar/topBar";
  import MainContent from "./components/mainContent/homePage/mainContent";
  import LeftSideBar from "./components/leftSideBar/leftSideBar";
  import FooterBar from "./components/footerBar/footerBar";

  export default {
    name: "homePage",
    components: {FooterBar, LeftSideBar, MainContent, TopBar},
  }
</script>

<style scoped>

</style>
