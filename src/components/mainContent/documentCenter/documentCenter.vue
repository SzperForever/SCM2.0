<template>
  <Layout>
    <Sider class="sideBar">
      <left-side-bar></left-side-bar>
    </Sider>
    <Content>
      <doc-search></doc-search>
      <doc-table style="width: 90%;margin-left: 5%;"></doc-table>
    </Content>
  </Layout>
</template>

<script>
  import DocSearch from "src/components/mainContent/documentCenter/module/docSearch";
  import LeftSideBar from "src/components/leftSideBar/leftSideBar";
  import DocTable from "src/components/mainContent/documentCenter/module/docTable";

  export default {
    name: "documentCenter",
    components: {DocTable, LeftSideBar, DocSearch}
  }
</script>

<style scoped>
  .sideBar {
    min-width: 240px !important;
  }
</style>
