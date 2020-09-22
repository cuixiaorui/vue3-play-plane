<template>
  <container name="StartViewContainer">
    <sprite :texture="startPageImg"></sprite>
    <sprite
      :texture="startBtnImg"
      :x="255"
      :y="550"
      :interactive="true"
      @click="handleClick"
    ></sprite>
  </container>
</template>

<script setup="props,{emit}">
/* eslint-disable no-undef */
import startPageImg from "../assets/start_page.jpg";
import startBtnImg from "../assets/startBtn.png";

export default {
  name: "StartView",
};

function handleClick() {
  emit("changeView", "GameView");
}

export { startPageImg, startBtnImg, handleClick };
</script>

<style scoped></style>
