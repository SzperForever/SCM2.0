<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    props: ['data', 'options'],
    watch : {
      'data.datasets'(){
        this.renderChart(this.data, this.options)
      }
    },
    mounted () {
      this.renderChart(this.data, this.options)
    }
  }
</script>

<style scoped>

</style>
