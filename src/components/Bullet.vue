<template>
  <container>
    <sprite :texture="bulletImg"></sprite>
  </container>
</template>

<script setup="props,{emit}">

/* eslint-disable no-undef */

import bulletImg from "../assets/bullet.png";

export default {
  name: "EnemyPlane",
};

export { bulletImg };
</script>

<style scoped></style>
