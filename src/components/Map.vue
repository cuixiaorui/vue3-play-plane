<template>
  <container>
    <sprite :texture="mapImg" :y="mapY1"></sprite>
    <sprite :texture="mapImg" :y="mapY2"></sprite>
  </container>
</template>

<script setup="props,{emit}">
/* eslint-disable no-undef */

import mapImg from "../assets/map.jpg";
import { ref, onMounted, onUnmounted } from "vue";
import { game } from "../game";

export default {
  name: "Map",
};

const speed = 10;
const gameStageHeight = 1080;
const mapY1 = ref(0);
const mapY2 = ref(-gameStageHeight);

const useMoveMap = () => {
  const handleTicker = () => {
    mapY1.value += speed;
    mapY2.value += speed;

    if (mapY1.value >= gameStageHeight) {
      mapY1.value = -gameStageHeight;
    }

    if (mapY2.value >= gameStageHeight) {
      mapY2.value = -gameStageHeight;
    }
  };

  onMounted(() => {
    game.ticker.add(handleTicker);
  });

  onUnmounted(() => {
    game.ticker.remove(handleTicker);
  });
};

useMoveMap();

export { mapImg, mapY1, mapY2 };
</script>

<style scoped></style>
