<script setup lang="ts">
import Chart from 'chart.js/auto';
import { onMounted, ref } from 'vue';


const ph = ref<HTMLCanvasElement>();

const labels = [
    'pH',
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
        backgroundColor: 'rgb(71, 169, 146)',
        borderColor: 'rgb(183, 183, 183)',
        data: [7, 6.9, 6.9, 7, 6.9, 7, 6.9, 7.2, 6.9, 7, 7],
    }]
};




onMounted(() => {
    const ctx = ph.value?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data,
        });
    }
});


</script>

<template>
    <h2>pH level</h2>
    <div>
        <canvas ref="ph"></canvas>
    </div>
</template>