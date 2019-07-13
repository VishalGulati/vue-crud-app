<template>
  <v-card color="grey lighten-5">
    <v-card-text>
      <div class="echarts">
        <Echarts :options="chartOptions" />
      </div>
      <v-btn @click="doRandom" outline fab color="grey">
        <v-icon>refresh</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import Echarts from 'vue-echarts';
import 'echarts/lib/chart/bar';

export default {
  name: 'barChart',
  components: {
    Echarts
  },
  props: {},
  data: function () {
    return {
      resizable: true,
      loading: false
    };
  },
  computed: {
    chartOptions () {
      return {
        title: {
          text: 'Bar Chart'
        },
        tooltip: {},
        xAxis: {
          data: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
        },
        yAxis: {},

        series: [
          {
            name: 'Sales',
            type: 'bar',
            data: this.$store.getters.barDataset || [10, 4, 6, 7, 5, 10],
            itemStyle: {
              color: '#1867c0'
            }
          }
        ]
      }
    }
  },
  methods: {
    doRandom () {
      this.$store.dispatch('fetchBars');
    }
  }
};
</script>

<style scoped>
.echarts {
  width: 300px;
  height: 300px;
}
</style>
