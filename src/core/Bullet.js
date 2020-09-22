import { ref, reactive, onMounted, onUnmounted } from "vue";
import { game } from "../game";
export function useBullet() {
  const speed = 5;
  const element = ref();
  const bullets = reactive([]);
  const width = 61;
  const height = 99;

  const addBullet = (info) => {
    bullets.push({
      x: info.x,
      y: info.y,
      width,
      height,
    });
  };

  const removeBullet = (bullet) => {
    const index = bullets.indexOf(bullet);
    bullets.splice(index, 1);
  };

  const move = () => {
    console.log("move");
    const isCriticalPoint = (bullet) => {
      return bullet.y < -50;
    };

    const handleTicker = () => {
      bullets.forEach((bullet, index) => {
        bullet.y -= speed;

        // 如果超过屏幕的话，那么销毁掉
        if (isCriticalPoint(bullet)) {
          removeBullet(index);
        }
      });
    };

    onMounted(() => {
      // eslint-disable-next-line no-debugger
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });
  };

  move();

  return {
    element,
    bullets,
    addBullet,
    removeBullet,
  };
}
