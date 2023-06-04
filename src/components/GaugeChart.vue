<script setup lang="ts">
import Chart from 'chart.js/auto';
import { onMounted, ref } from 'vue';

// import ws from '../WebSocketService.ts'
import socket from '../WebSocketService.ts'

socket
// let receivedData: any[] = []; // Initialize the variable as an empty array
// socket.onmessage = (event) => {
//     receivedData = [event.data]; // Store the parsed data as a single-element array
//     console.log(receivedData);
// };
// .onmessage = (event) => {
//     const newData = event.data;
// }

const yassin = ref<HTMLCanvasElement>();

const labels = [
    'Wasted Water',
    'Water Level',
];

const data = {
    labels,
    datasets: [{
        label: 'water level',
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
        ],
        hoverOffset: 4,
        data: [10],
    }]
};




onMounted(() => {
    const ctx = yassin.value?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
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