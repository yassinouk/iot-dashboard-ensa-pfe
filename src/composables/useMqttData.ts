import Chart from "chart.js/auto";
import { reactive, ref } from "vue";

export const updateChart = (chart: Chart, data: number) => {
  const label = new Date().toLocaleTimeString();
  chart.data?.labels?.shift();
  chart.data?.labels?.push(label);
  chart.data.datasets[0].data.shift();
  chart.data.datasets[0].data.push(data);
  chart.update();
};

export const useMqttData = reactive({
  waterLevel: ref(0),
  waterTemp: ref(0),
  waterHumidity: ref(0),
  waterPH: ref(0),
  waterTDS: ref(0),
});
