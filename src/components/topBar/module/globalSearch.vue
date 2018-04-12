<template>
  <AutoComplete
    v-model="globalSearchData"
    placeholder="Search document link people..."
    style="width: 250px;"
    @on-search="requestData"
    clearable
    icon="ios-search"
    :transfer="true">
    <div class="demo-auto-complete-item">
      <div class="demo-auto-complete-group">
        <span>Document</span>
      </div>
      <Option v-for="option in document" :value="option.docName" :key="option.docId">
        <span class="demo-auto-complete-title">{{ option.docName }}</span>
      </Option>
    </div>
    <div class="demo-auto-complete-item">
      <div class="demo-auto-complete-group">
        <span>Link</span>
      </div>
      <Option v-for="option in urls" :value="option.urlTitle" :key="option.urlId">
        <span class="demo-auto-complete-title">{{ option.urlTitle }}</span>
      </Option>
    </div>
    <div class="demo-auto-complete-item">
      <div class="demo-auto-complete-group">
        <span>People</span>
      </div>
      <Option v-for="option in people" :value="option.alias" :key="option.userId">
        <span class="demo-auto-complete-title">{{ option.display }}</span>
      </Option>
    </div>
    <!--<div class="demo-auto-complete-item" v-for="item in resultData">-->
      <!--<div class="demo-auto-complete-group">-->
        <!--<span>{{ item.title }}</span>-->
      <!--</div>-->
      <!--<Option v-if="item.title==='Document'" v-for="option in item.data" :value="option.docName" :key="option.docId">-->
        <!--<span class="demo-auto-complete-title">{{ option.docName }}</span>-->
      <!--</Option>-->
      <!--<Option v-if="item.title==='Link'" v-for="option in item.data" :value="option.urlTitle" :key="option.urlId">-->
        <!--<span class="demo-auto-complete-title">{{ option.urlTitle }}</span>-->
      <!--</Option>-->
      <!--<Option v-if="item.title==='People'" v-for="option in item.data" :value="option.alias" :key="option.userId">-->
        <!--<span class="demo-auto-complete-title">{{ option.display }}</span>-->
      <!--</Option>-->
    <!--</div>-->
  </AutoComplete>
</template>

<script>
  export default {
    name: "globalSearch",
    data() {
      return {
        globalSearchData: '',
        resultData: [
          {
            title : 'Document',
            data : {}
          },
          {
            title : 'Link',
            data : {}
          },
          {
            title : 'People',
            data : {}
          },
        ],
        requestStatus : false,
        document : [],
        urls : [],
        people : []
      }
    },
    methods: {
      requestData(value) {
        this.requestStatus = false;
        this.$http.post('/getSearchInfo.form', {
          name: value,
        })
          .then((response) => {
            console.log(response);
            this.document = response.data[0].documentsEntity;
            this.urls = response.data[0].urlEntity;
            this.people = response.data[0].usersEntity;
            this.requestStatus = true;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped>
  .demo-auto-complete-item{
    padding: 4px 0;
    border-bottom: 1px solid #F6F6F6;
  }
  .demo-auto-complete-group{
    font-size: 12px;
    padding: 4px 6px;
  }
  .demo-auto-complete-group span{
    color: #666;
    font-weight: bold;
  }
  .demo-auto-complete-group a{
    float: right;
  }
  .demo-auto-complete-count{
    float: right;
    color: #999;
  }
  .demo-auto-complete-more{
    display: block;
    margin: 0 auto;
    padding: 4px;
    text-align: center;
    font-size: 12px;
  }
</style>
