<template>
  <container name="AppContainer">
    <ComponentView @changeView="handleChangeView"></ComponentView>
  </container>
</template>

<script setup>
import { ref, computed } from "vue";
import StartView from "./views/StartView";
import GameView from "./views/GameView";
import EndView from "./views/EndView";

export default {
  components: [StartView, GameView, EndView],
};

const currentViewName = ref("StartView");

const ComponentView = computed(() => {
  if (currentViewName.value === "StartView") {
    return StartView;
  } else if (currentViewName.value === "GameView") {
    return GameView;
  } else if (currentViewName.value === "EndView") {
    return EndView;
  }
});

function handleChangeView(viewName) {
  currentViewName.value = viewName;
}

export { ComponentView, handleChangeView };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
