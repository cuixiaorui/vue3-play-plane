<template>
  <container name="EndViewContainer">
    <sprite :texture="endPageImg"></sprite>
    <sprite
      :texture="restartBtnImg"
      :x="255"
      :y="550"
      :interactive="true"
      @click="handleClick"
    ></sprite>
  </container>
</template>

<script setup="props,{emit}">
/* eslint-disable no-undef */
import endPageImg from "../assets/end_page.jpg";
import restartBtnImg from "../assets/restartBtn.png";

export default {
  name: "StartView",
};

function handleClick() {
  emit("changeView", "GameView");
}

export { endPageImg, restartBtnImg, handleClick };
</script>

<style scoped></style>
