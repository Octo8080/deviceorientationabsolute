(() => {
  // deno:file:///usr/src/app/src/main.ts
  window.addEventListener("deviceorientationabsolute", orientationHandler, true);
  function orientationHandler(e) {
    const propaties = [];
    for (var key in e) {
      if (["alpha", "beta", "gamma"].includes(key)) {
        propaties.push(`${key} = ${e[key]}`);
      }
    }
    const propatiesString = propaties.reduce((pre, cur) => pre + `
` + cur);
    const direction = culcDirection(e.alpha, e.beta, e.gamma);
    const viewString = propatiesString + `
\u65B9\u89D21\uFF1A${direction}`;
    document.getElementById("output").innerText = viewString;
  }
  function culcDirection(alpha, beta, gamma) {
    const rotY = (gamma || 0) * Math.PI / 180;
    const rotX = (beta || 0) * Math.PI / 180;
    const rotZ = (alpha || 0) * Math.PI / 180;
    const cy = Math.cos(rotY);
    const sy = Math.sin(rotY);
    const sx = Math.sin(rotX);
    const cz = Math.cos(rotZ);
    const sz = Math.sin(rotZ);
    const x = -(sy * cz + cy * sx * sz);
    const y = -(sy * sz - cy * sx * cz);
    const direction = Math.atan2(-x, y) * (180 / Math.PI) + 180;
    return direction;
  }
})();
