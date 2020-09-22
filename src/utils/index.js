// 碰撞检测
export function hitTestObject(objA, objB) {
  // eslint-disable-next-line no-debugger
  return (
    objA.x + objA.width >= objB.x &&
    objB.x + objB.width >= objA.x &&
    objA.y + objA.height >= objB.y &&
    objB.y + objB.height >= objA.y
  );
}
