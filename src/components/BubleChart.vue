<script setup lang="ts">
import Chart from "chart.js/auto";
import { onMounted, ref, toRefs, watch } from "vue";
import { useMqttData, updateChart } from "../composables/useMqttData";

const { data } = toRefs(useMqttData);

const abi = ref<HTMLCanvasElement>();

let chart: Chart;

watch(data, (receivedData) => {
  console.log(receivedData);
  if (chart) {
    updateChart(chart, receivedData);
  }
});

onMounted(() => {
  const ctx = abi.value?.getContext("2d");
  if (ctx) {
    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "10:00",
          "10:00",
          "10:01",
          "10:01",
          "10:02",
          "10:02",
          "10:03",
          "10:03",
          "10:04",
          "10:04",
          "10:05",
        ],
        datasets: [
          {
            label: "°C",
            backgroundColor: "rgb(121, 224, 132)",
            borderColor: "rgb(71, 169, 146)",
            data: [
              25.19, 25.3, 25.3, 25.2, 25.3, 25.25, 25.32, 25.2, 25.21, 25.19,
              25.19,
            ],
            tension: 0.3,
          },
        ],
      },
    });
  }
});
</script>

<template>
  <h2>Temperature °C</h2>
  <div>
    <canvas ref="abi"></canvas>
  </div>
</template>
