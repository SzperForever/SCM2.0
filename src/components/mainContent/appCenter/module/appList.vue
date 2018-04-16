<template>
  <div>
    <div class="ui blurring segment">
      <div class="ui dimmer" id="loader">
        <div class="content">
          <div class="top fixed">
            <h2 class="ui inverted icon header">
              <div class="ui active">
                <div class="ui text loader">加载中</div>
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div class="ui four column grid" :loading="appCardLoading">
        <app-card v-for="url in urls" :key="url.id" :url="url"></app-card>
      </div>
    </div>
  </div>
</template>

<script>
  import AppCard from "./appCard";
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'


  export default {
    name: "appList",
    components: {AppCard, PulseLoader},
    props: ['urls','appCardLoading'],
    data() {
      return {}
    },
    watch : {
        urls(){
          console.log("url change")
        }
    },
    mounted() {
      // this.$http.get('getUrl.form').then((response) => {
      //   this.urls = response.data;
      // });
    }
  }
</script>

<style scoped>
  #loader>>>.loader{
    top: 100px;
  }
</style>
