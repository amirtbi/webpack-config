import { createApp } from "vue";
import "./styles/button.scss";
import "./styles/main.scss";
import vuetify from "./plugins/vuetify/index.js";
import router from "./router/index";
import App from "./App.vue";

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.mount("#app");
