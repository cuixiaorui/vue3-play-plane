import { onMounted, onUnmounted } from "vue";
import { hitTestObject } from "../utils";
import { game } from "../game";

import { usePlane } from "./Plane";
import { useEnemyPlane } from "./EnemyPlane";
import { useBullet } from "./Bullet";

export function useFighting({ gameOver }) {
  const { planeInfo } = usePlane();
  const { enemyPlanes, removeEnemyPlane } = useEnemyPlane();
  const { addBullet, bullets, removeBullet } = useBullet();

  // 战斗逻辑
  // 碰撞检测
  const fighting = () => {
    const handleTicker = () => {
      //我放子弹和敌方飞机的碰撞检测
      enemyPlanes.forEach((enemy) => {
        // eslint-disable-next-line no-unused-vars
        bullets.forEach((bullet) => {
          if (hitTestObject(enemy, bullet)) {
            // enemyPlanes.splice();
            removeEnemyPlane(enemy);
            removeBullet(bullet);
          }
        });
      });

      // 我方飞机和敌方飞机的碰撞检测
      enemyPlanes.forEach((enemy) => {
        if (hitTestObject(enemy, planeInfo)) {
          // game over
          gameOver && gameOver();
        }
      });
    };

    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });
  };

  fighting();

  return {
    planeInfo,
    enemyPlanes,
    bullets,
    addBullet,
  };
}
