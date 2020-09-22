import { reactive, ref } from "vue";
export function useEnemyPlane() {
  const element = ref({});

  const enemyPlanes = reactive([
    {
      x: 0,
      y: 0,
      width: 308,
      height: 207,
    },
  ]);

  const removeEnemyPlane = (enemy) => {
    const index = enemyPlanes.indexOf(enemy);
    enemyPlanes.splice(index, 1);
  };

  return {
    element,
    enemyPlanes,
    removeEnemyPlane,
  };
}
