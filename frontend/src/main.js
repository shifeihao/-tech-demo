// src/main.js

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./style.css";

const app = createApp(App);
const pinia = createPinia(); // ⬅️ 创建 Pinia 实例
app.use(pinia); // ⬅️ 使用 Pinia
app.use(router);
app.mount("#app");
