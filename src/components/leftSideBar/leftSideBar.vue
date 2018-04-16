<template>
  <div>
    <Menu active-name="1-2" :open-names="['1','2','3']" v-on:on-select="select">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          Department
        </template>
        <MenuItem v-for="department in departments" :key="department.departmentId" :name="department.departmentName">
          <Icon :type="department.icon" :color="department.iconColor"></Icon>
          {{department.departmentName}}
        </MenuItem>
      </Submenu>
      <Submenu name="2" v-if="showCatalog">
        <template slot="title">
          <Icon type="ios-filing"></Icon>
          Catalogs
        </template>
        <MenuItem v-for="catalog in catalogs" :key="catalog.catalogId" :name="catalog.catalogName">
          <Icon :type="catalog.icon" :color="catalog.iconColor"></Icon>
          {{catalog.catalogName}}
        </MenuItem>
      </Submenu>
      <Submenu name="3" v-if="!showCatalog">
        <template slot="title">
          <Icon type="ios-filing"></Icon>
          Doc Types
        </template>
        <MenuItem v-for="docType in documentType" :key="docType.docTypeId" :name="docType.docTypeName">
          <Icon :type="docType.icon" :color="docType.iconColor"></Icon>
          {{docType.docTypeName}}
        </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
  import Bus from '../Bus/Bus'

  export default {
    name: "leftSideBar",
    data() {
      return {
        departments: [],
        departmentsLoading: true,
        catalogs: [],
        catalogsLoading: true,
        documentType : [],
        documentTypeLoading : true
      }
    },
    computed: {
      showCatalog(){
        if(this.$route.path.indexOf('DocumentCenter') == -1){
          return true;
        }
        else{
          return false;
        }
      }
    },
    methods: {
      select(name){
          this.switchDepartment(name);
      },
      loadDepartment() {
        this.$http.get('/getDepartments.form').then((response) => {
          this.departments = response.data;
          this.departmentsLoading = false;
        });
      },
      loadCatalogs() {
        this.$http.get('/getCatagory.form').then((response) => {
          this.catalogs = response.data;
          this.catalogsLoading = false;
        })
      },
      loadDocumentType() {
        this.$http.get('/getDocType.form').then((response) => {
          this.documentType = response.data;
          this.documentTypeLoading = false;
        })
      },
      loadAll() {
        this.loadDepartment();
        this.loadCatalogs();
        this.loadDocumentType();
      },
      switchDepartment(depar){
        Bus.$emit('switchDepartment',depar);
      }
    },
    mounted() {
      this.loadAll();
    }
  }
</script>

<style scoped>

</style>
