<script setup lang="ts">
import Chart from "chart.js/auto";
import { onMounted, ref } from "vue";

const abi = ref<HTMLCanvasElement>();

const HOST = "localhost";
const PORT = 5678;

const socket: WebSocket = new WebSocket(`ws://${HOST}:${PORT}`);

socket.onopen = () => {
  console.log("connected");
};

let lastLabel = 5;

socket.onmessage = (event: MessageEvent) => {
  const data = JSON.parse(event.data);

  if (chart.value) {
    const label = `10:0${lastLabel++}`;

    addData(chart.value, label, data);
  }
};

const chart = ref();

const addData = (chart: Chart, label: string, data: number) => {
  chart.data?.labels?.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
};

const labels = [
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
];

const chartData = {
  labels,
  datasets: [
    {
      label: "°C",
      backgroundColor: "rgb(121, 224, 132)",
      borderColor: "rgb(71, 169, 146)",
      data: [
        25.19, 25.3, 25.3, 25.2, 25.3, 25.25, 25.32, 25.2, 25.21, 25.19, 25.19,
      ],
      tension: 0.3,
    },
  ],
};

onMounted(() => {
  const ctx = abi.value?.getContext("2d");
  if (ctx) {
    chart.value = new Chart(ctx, {
      type: "line",
      data: chartData,
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
