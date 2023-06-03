<script setup lang="ts">
import Chart from 'chart.js/auto';
import { onMounted, ref } from 'vue';


const hum = ref<HTMLCanvasElement>();

const labels = [
    'humidity level',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];

const data = {
    labels,
    datasets: [{
        label: '%',
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgb(183, 183, 183)',
        data: [60, 61, 60, 61, 59, 60, 59, 60, 59, 61, 60],
    }]
};




onMounted(() => {
    const ctx = hum.value?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data,
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