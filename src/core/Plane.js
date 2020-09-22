import { reactive, ref } from "vue";
export const usePlane = () => {
  const element = ref();
  const planeInfo = reactive({
    x: 100,
    y: 333,
    width: 258,
    height: 364,
  });

  const speed = 10;

  const move = () => {
    window.addEventListener("keyup", (e) => {
      switch (e.code) {
        case "ArrowUp":
          planeInfo.y -= speed;
          break;
        case "ArrowDown":
          planeInfo.y += speed;
          break;
        case "ArrowLeft":
          planeInfo.x -= speed;
          break;
        case "ArrowRight":
          planeInfo.x += speed;
          break;
      }
    });
  };

  const attack = (emit) => {
    window.addEventListener("keyup", (e) => {
      switch (e.code) {
        case "Space":
          emit("attack", {
            x: planeInfo.x + 100,
            y: planeInfo.y,
          });
          break;
      }
    });
  };

  move();

  return {
    element,
    attack,
    planeInfo,
  };
};
