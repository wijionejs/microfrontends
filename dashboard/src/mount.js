import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";
import PrimeVue from "primevue/config";

export const mount = (el) => {
  const app = createApp(Dashboard);
  app.use(PrimeVue);
  app.mount(el);
};
