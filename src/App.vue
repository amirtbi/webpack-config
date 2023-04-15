<template>
  <TheHeader></TheHeader>
  <h1>vue 3 app using webpack 5</h1>

  <div>
    <v-btn @click="addMessage" color="blue" variant="outlined"
      >Vuetify button</v-btn
    >
    <VBtn @click="navigateTo">Go to about page</VBtn>
  </div>

  <section>
    <router-view></router-view>
    <!-- <h2>Vue chart js</h2>
    <div>
      <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div> -->
  </section>
</template>

<script setup>
import { ref, onMounted, computed, defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";
import { BeakerIcon } from "@heroicons/vue/24/solid";
import { Bar } from "vue-chartjs";
import TheHeader from "./components/TheHeader.vue";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

const router = useRouter();
const messageList = defineAsyncComponent(() =>
  import("./components/MessageList.vue")
);

const message = ref("new message from vue");
const show = ref(false);

const chartData = computed(() => {
  return {
    labels: ["january", "febuary", "March"],
    datasets: [{ data: [40, 20, 12] }],
  };
});

const chartOptions = computed(() => {
  return { responsive: true };
});

const addMessage = () => {
  show.value = true;
  message.value = "Added new message";
};

const navigateTo = () => {
  router.push("/about");
};
onMounted(() => {
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
});
</script>
