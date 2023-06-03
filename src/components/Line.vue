<script setup lang="ts">
import Chart from 'chart.js/auto';
import { onMounted, ref } from 'vue';


const abi = ref<HTMLCanvasElement>();

const labels = [
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
        label: 'PPM',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(152, 238, 204)',
        data: [400, 470, 490, 470, 500, 510, 500, 500, 490, 480],
    }]
};




onMounted(() => {
    const ctx = abi.value?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data,
        });
    }
});


</script>

<template>
    <h2>TDS</h2>
    <div>
        <canvas ref="abi"></canvas>
    </div>
</template>