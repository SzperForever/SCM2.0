<template>
  <div>
    <Table :loading="documentDataLoading" border :columns="documentDataTable" :data="documentData"
           width="100%!important" v-on:on-row-click="click_row"></Table>
  </div>
</template>

<script>
  import Bus from 'bus'

  export default {
    name: "docTable",
    data() {
      return {
        documentDataTable: [
          {title: 'Title', key: 'docName', sortable: true},
          {title: 'Description', key: 'docDesc', sortable: true},
          {title: 'DocPath', key: 'docPath', sortable: true},
          {title: 'Department', key: 'departmentId', sortable: true},
          {title: 'DocTypes', key: 'docTypeId', sortable: true},
          {title: 'DocNumber', key: 'docNumber', sortable: true},
        ],
        documentData: [],
        documentDataLoading: true
      }
    },
    methods: {
      loadTableData() {
        this.$http.get('/getDocuments.form').then((response) => {
          this.documentData = response.data;
          this.documentDataLoading = false;
        })
      },
      loadTableDataWithDepar(depar) {
        this.documentDataLoading = true;
        this.$http.get('/getDocuments.form').then((response) => {
          this.documentData = response.data;
          this.documentDataLoading = false;
        })
      },
      click_row(row_data, index) {
        console.log(row_data, index);
        window.open(row_data.docPath);
      }
    },
    mounted() {
      this.loadTableData();
      Bus.$on('switchDepartment', (depar) => {
        this.loadTableDataWithDepar(depar);
      });
    }
  }
</script>

<style scoped>

</style>
