let scriptList = [
  "./glSetup/main.js",
  "./glSetup/glinit.js",
  "./glSetup/draw.js",
  "./Lab2/DDA.js",
  "./Lab2/BLA.js",
  "./Lab1/flag.js",
  "./Lab3/ellipse.js",
  "./Lab3/circle.js",
  "./title.js",
];
scriptList.forEach(function (s) {
  let script = document.createElement("script"); //creating <script> element
  script.src = s;
  script.async = false;
  document.body.appendChild(script);
});

function callAlgo(title) {
  if (title === "DDA") {
    GLINIT();
    drawDDALine();
    return;
  }
  if (title === "BLA") {
    GLINIT();
    drawBLALine();
    return;
  }
  if (title === "Nepal") {
    GLINIT();
    drawFlag();
    return;
  }
  if (title === "Ellipse") {
    GLINIT();
    drawEllipseMidPoint();
    return;
  }
  if (title === "Circle") {
    GLINIT();
    drawCircleMidPoint();
    return;
  }
}
