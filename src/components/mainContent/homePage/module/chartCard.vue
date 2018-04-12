<template>

  <div class="card chartCard">
    <div class="image">
      <line-chart v-if="visiable('line')" :data="this.chart.chartData.data"
                  :options="this.chart.chartData.options"></line-chart>
      <radar-chart v-if="visiable('radar')" :data="this.chart.chartData.data"
                   :options="this.chart.chartData.options"></radar-chart>
      <pola-chart v-if="visiable('pola')" :data="this.chart.chartData.data"
                  :options="this.chart.chartData.options"></pola-chart>
      <pid-chart v-if="visiable('pie')" :data="this.chart.chartData.data"
                 :options="this.chart.chartData.options"></pid-chart>
      <bar-chart v-if="visiable('bar')" :data="this.chart.chartData.data"
                 :options="this.chart.chartData.options"></bar-chart>
    </div>
    <div class="content">
      <div class="header">{{this.chart.chartContent.header}}</div>
      <div class="meta">
        <a>{{this.chart.chartContent.meta}}</a>
      </div>
      <div class="description">
        {{this.chart.chartContent.description}}
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        {{this.chart.extraContent.rightFloated}}
      </span>
      <span>
        <i class="user icon"></i>
        {{this.chart.extraContent.leftFloated}}
      </span>
    </div>
  </div>
</template>

<script>
  import LineChart from "./chartModule/lineChart";
  import RadarChart from "./chartModule/radarChart";
  import PolaChart from "./chartModule/polaChart";
  import PidChart from "./chartModule/pidChart";
  import BarChart from "./chartModule/barChart";

  export default {
    name: "chartCard",
    props: [
      'chart'
    ],
    data() {
      return {}
    },
    components: {BarChart, PidChart, PolaChart, RadarChart, LineChart},
    watch: {
      'chart.chartData.data.datasets'(){

      }
    },
    methods: {
      getRandomInt() {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
      },
      visiable: function (name) {
        if (this.chart == undefined) {
          console.log('false');
          return false;
        }
        else {
          if (this.chart.type === name) {
            return true;
          }
        }
      }
    },
    mounted() {
      console.log(this.chart)
    }
  }
</script>

<style scoped>
  .chartCard {
    width: 500px !important;
  }
</style>
