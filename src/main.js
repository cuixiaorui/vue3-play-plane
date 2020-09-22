import { getRootContainer } from "./game";
import { createApp } from "./runtime-dom";
import App from "./App.vue";

const app = createApp(App);
app.mount(getRootContainer());

window.console.warn = () => {};
