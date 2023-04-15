<template>
  <h1 class="text-3xl text- font-bold underline">Hello world!</h1>
</template>

<script setup>
import _ from "lodash";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
</script>

<style scoped>
h1 {
  background-color: purple;
}
</style>
