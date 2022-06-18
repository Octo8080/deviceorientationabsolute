window.addEventListener("deviceorientationabsolute", orientationHandler, true);

function orientationHandler(e: DeviceOrientationEvent) {
  const propaties:string[] = []
  for (var key in e) {
    if(["alpha", "beta", "gamma"].includes(key)){
      propaties.push(`${key} = ${e[key]}`)
    }
  }
  const propatiesString = propaties.reduce((pre, cur)=> pre +`\n`+ cur )

  document.getElementById("output").innerText = propatiesString;
}
