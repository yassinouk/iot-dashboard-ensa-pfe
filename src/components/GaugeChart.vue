<script setup lang="ts">
import Chart from "chart.js/auto";
import { onMounted, ref, toRefs, watch } from "vue";
import { useMqttData } from "../composables/useMqttData";

const yassin = ref<HTMLCanvasElement | null>(null);

const chart = ref();

const addData = (chart: Chart, label: string, data: number) => {
  chart.data?.labels?.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
};

const { data } = toRefs(useMqttData);

watch(data, (receivedData) => {
  if (chart.value) {
    addData(chart.value, "zabi", receivedData);
  }
});

// const removeData = (chart) => {
//   chart.data.labels.pop();
//   chart.data.datasets.forEach((dataset) => {
//     dataset.data.pop();
//   });
//   chart.update();
// };

const labels = ["Wasted Water", "Water Level"];

const chartData = {
  labels,
  datasets: [
    {
      label: "water level",
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      hoverOffset: 4,
      data: [10],
    },
  ],
};

onMounted(() => {
  const ctx = yassin.value?.getContext("2d");
  if (ctx) {
    chart.value = new Chart(ctx, {
      type: "doughnut",
      data: chartData,
    });
    // Update the chart data with receivedData variable
  }
});
</script>

<template>
  <h2>Water level</h2>
  <div>
    <canvas ref="yassin"></canvas>
  </div>
</template>
