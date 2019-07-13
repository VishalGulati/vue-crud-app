<template>
    <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12 md4>
                <BarChart />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import BarChart from './components/barChart.vue';
export default {
  components: {
    BarChart
  }
};
</script>

<style></style>
