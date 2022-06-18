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
    document.getElementById("output").innerText = propatiesString;
  }
})();
