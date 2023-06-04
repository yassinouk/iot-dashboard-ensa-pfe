<script setup lang="ts">
import GaugeChart from './components/GaugeChart.vue'
import Line from './components/Line.vue'
import BubleChart from './components/BubleChart.vue'
import HumidityChart from './components/HumidityChart.vue'
import PhChart from './components/PhChart.vue'


</script>

<template>
  <div class="main-container">
    <div class="side-left">
      <a href="https://ensa-tetouan.ac.ma/" target="_blank">
        <img src="/2.png" class="logo" alt="Ensa Tetouan" />
      </a>
      <div>
        <h1>Ensa Tetouan</h1>
        <h2>This Dashboard is </h2>
        <h2>a prototype for my Thesis</h2>
        <h2>Yassin OUAKKA</h2>
      </div>
    </div>
    <div class="dashboard">
      <div class="widget">
        <GaugeChart />
      </div>
      <div class="widget">
        <BubleChart />
      </div>
      <div class="widget">
        <HumidityChart />
      </div>
      <div class="widget">
        <PhChart />
      </div>
      <div class="widget">
        <Line />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;


  }

  .widget {
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(200, 200, 200, 0.2);
    padding: 1rem;
    max-height: 450px;
    max-width: 300px;
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px #ccc;
    }

  }

  .side-left {
    padding-top: 100px;
    height: 100%;
    border-right: 1px solid #ccc;

    @media screen and (max-width: 768px) {
      border-right: none;
    }
  }

  .dashboard {
    padding: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    height: 100%;
    overflow-y: auto;

  }

}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  @media screen and (max-width: 768px) {
    height: 3em;
  }
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
