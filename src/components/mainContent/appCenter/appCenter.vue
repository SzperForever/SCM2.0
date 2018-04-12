<template>
  <Layout>
    <Sider>
      <left-side-bar></left-side-bar>
    </Sider>

    <Content style="margin-left: 50px">
      <app-filter></app-filter>
    </Content>
  </Layout>
</template>

<script>
  import LeftSideBar from "../../leftSideBar/leftSideBar";
  import AppFilter from "./module/appFilter";

  export default {
    name: "appCenter",
    components: {AppFilter, LeftSideBar}
  }
</script>

<style scoped>

</style>
