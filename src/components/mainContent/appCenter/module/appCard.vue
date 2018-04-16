<template>
  <div class="column">
    <div class="ui raised fluid link card">
      <div class="content">
        <i class="right floated like icon"></i>
        <i class="right floated star icon"></i>
        <div class="header"><a :href="url.urlAddress" target="_blank">{{url.urlTitle}}</a></div>
        <div class="meta">
          <span class="category">{{url.catalogId}}</span>
        </div>
        <div class="description" style="height: 60px;">
          <p>{{url.urlDesc}}</p>
        </div>
      </div>
      <div class="extra content">
      <span class="left floated like">
      <i class="like icon"></i>
      favorite
      </span>
        <div class="right floated author" >
          <Avatar :style="color">{{url.urlTitle}}</Avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "appCard",
    props: [
      'url'
    ],
    computed : {
        color : function(){
          return {background : this.ColorList[this.getRandomInt() % 3].toString()}
        }
    },
    data() {
      return {
        ColorList: ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']
      }
    },
    methods:{
      getRandomInt() {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
    }
  }
</script>

<style scoped>

</style>
