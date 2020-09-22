<template>
  <container name="GameViewContainer">
    <Map></Map>
    <Plane :x="planeInfo.x" :y="planeInfo.y" @attack="handleAttack"></Plane>
    <EnemyPlane
      v-for="(enemy, index) in enemyPlanes"
      :key="index"
      :x="enemy.x"
      :y="enemy.y"
    ></EnemyPlane>
    <Bullet
      v-for="(bullet, index) in bullets"
      :key="index"
      :x="bullet.x"
      :y="bullet.y"
    ></Bullet>
  </container>
</template>

<script setup="props,{emit}">
import Map from "../components/Map";
import Plane from "../components/Plane";
import EnemyPlane from "../components/EnemyPlane";
import Bullet from "../components/Bullet";
import { useFighting } from "../core";

/* eslint-disable no-undef */
export default {
  name: "GameView",
  components: { Map, Plane, EnemyPlane, Bullet },
};

const { planeInfo, enemyPlanes, bullets, addBullet } = useFighting({
  gameOver,
});

function gameOver() {
  emit("changeView", "EndView");
}

function handleAttack(position) {
  addBullet(position);
}

export { planeInfo, enemyPlanes, bullets, handleAttack };
</script>

<style scoped></style>
