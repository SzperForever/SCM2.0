<template>
  <Layout>
    <Sider class="sideBar">
      <left-side-bar></left-side-bar>
    </Sider>
    <Content class="mainContent">
      <Card>
        <Breadcrumb>
          <BreadcrumbItem to="/">Home</BreadcrumbItem>
          <BreadcrumbItem to="">App Center</BreadcrumbItem>
        </Breadcrumb>
        <app-filter></app-filter>
      </Card>
        <app-list v-if="urlsData" class="appList" :urls="urlsData" :appCardLoading="loading">
        </app-list>
    </Content>
  </Layout>
</template>

<script>
  import LeftSideBar from "../../leftSideBar/leftSideBar";
  import AppFilter from "./module/appFilter";
  import AppCard from "./module/appCard";
  import AppList from "./module/appList";
  import Bus from "bus"

  export default {
    name: "appCenter",
    components: {AppList, AppCard, AppFilter, LeftSideBar},
    data() {
      return {
        urlsData: undefined,
        loading : true
      }
    },
    methods: {},
    mounted() {
      this.$http.get('/getUrl.form').then((response) => {
        this.urlsData = response.data;
        this.loading = false;
      });
      Bus.$on('switchDepartment', function (depar) {
        this.loading = true;
        this.$http.post('/getUrlByCata.form', {
          name: depar
        }).then((response) => {
          this.urlsData = response.data;
          this.loading = false;
        })
      })
    }
  }
</script>

<style scoped>
  .sideBar {
    min-width: 240px !important;
  }

  .mainContent {
    padding: 25px;
    padding-top: 40px;
    z-index: 25
  }

  .appList {
    padding-top: 40px;
  }
</style>
