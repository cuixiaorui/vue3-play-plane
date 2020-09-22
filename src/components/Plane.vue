<template>
  <container ref="element">
    <sprite :texture="planeImg"></sprite>
  </container>
</template>

<script setup="props,{emit}">
/* eslint-disable no-undef */
import planeImg from "../assets/plane.png";
import { usePlane } from "../core/Plane";

export default {
  name: "Plane",
};

const { attack, element } = usePlane();

attack(emit);

export { element, planeImg };
</script>

<style scoped></style>
