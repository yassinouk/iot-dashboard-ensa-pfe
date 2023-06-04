<script setup lang="ts">
import Chart from "chart.js/auto";
import { onMounted, ref, watch, toRefs } from "vue";

import { useMqttData, updateChart } from "../composables/useMqttData";

const { waterHumidity } = toRefs(useMqttData);

const hum = ref<HTMLCanvasElement>();

let chart: Chart;

watch(waterHumidity, (receivedData) => {
  console.log(receivedData);
  if (chart) {
    updateChart(chart, receivedData);
  }
});

const labels = ["humidity level", "", "", "", "", "", "", "", "", "", ""];

const chartData = {
  labels,
  datasets: [
    {
      label: "%",
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgb(183, 183, 183)",
      data: [60, 61, 60, 61, 59, 60, 59, 60, 59, 61, 60],
    },
  ],
};

onMounted(() => {
  const ctx = hum.value?.getContext("2d");
  if (ctx) {
    chart = new Chart(ctx, {
      type: "bar",
      data: chartData,
    });
  }
});
</script>

<template>
  <h2>Humidity</h2>
  <div>
    <canvas ref="hum"></canvas>
  </div>
</template>
