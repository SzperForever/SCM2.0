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
        <app-filter :loading="loading"></app-filter>
      </Card>
      <app-list v-if="urls" class="appList" :urls="urls" :appCardLoading="loading">
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
        urls: {

        },
        loading: true
      }
    },
    methods: {},
    mounted() {
      this.$http.get('/getUrl.form').then((response) => {
        this.urls= response.data;
        this.loading = false;
      });

      Bus.$on('switchApp', (depar) => {
        this.loading = true;
        $('.segment').dimmer('show');
        if (depar === "Planning" || depar === "Purchasing" || depar === "MRO" || depar === "InventoryControl" || depar === "All") {
          if(depar === "All"){
            this.$http.get('/getUrl.form').then((response) => {
              this.urls = response.data;
              this.loading = false;
              $('.segment').dimmer('hide');
            });
          }
          else {
            this.loading = true;
            this.$http.post('/getUrlByDepart.form', {
              name: depar
            }).then((response) => {
              this.urls = response.data;
              this.loading = false;
              $('.segment').dimmer('hide');
            })
          }
        }
        else {
          this.loading = true;
          this.$http.post('/getUrlByCata.form', {
            name: depar
          }).then((response) => {
            this.urls = response.data;
            this.loading = false;
            $('.segment').dimmer('hide');
          })
        }
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
