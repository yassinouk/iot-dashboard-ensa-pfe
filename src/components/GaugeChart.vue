<script setup lang="ts">
import Chart from "chart.js/auto";
import { onMounted, ref } from "vue";
import { useMqttData } from "../composables/useMqttData";

const yassin = ref<HTMLCanvasElement>();

const labels = ["Wasted Water", "Water Level"];

console.log(useMqttData.value);

const data = {
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
    new Chart(ctx, {
      type: "doughnut",
      data,
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
