<template>

      <Layout id="app">

        <top-bar></top-bar>
        <Layout>
          <transition name="fade">
            <router-view></router-view>
          </transition>
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
