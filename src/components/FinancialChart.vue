<template>
  <v-card>
    <v-card-title>
      <v-row align="center">
        <v-col cols="12">
          <h3 class="text-h6">{{ title }}</h3>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <div v-if="!isLoading">
        <line-chart :chart-data="chartData" />
      </div>
      <div v-else>
        <v-progress-circular indeterminate color="primary" />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { Line } from 'vue-chartjs';
import { defineComponent, ref } from 'vue';
import { Line as ChartJSLine } from 'chart.js';

export default defineComponent({
  components: {
    LineChart: Line,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped>
.v-card {
  max-width: 400px;
  margin: 10px;
}
</style>
