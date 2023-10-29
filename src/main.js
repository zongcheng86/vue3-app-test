import { createApp } from "vue";
import "./style.css";
import "./assets/font/iconfont.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

const pinia = createPinia();
pinia.use(piniaPluginPersist);
createApp(App).use(router).use(pinia).mount("#app");
