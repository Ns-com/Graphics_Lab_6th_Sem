let scriptList = [
  "./glSetup/main.js",
  "./glSetup/glinit.js",
  "./glSetup/draw.js",
  "./Lab2/DDA.js",
  "./Lab2/BLA.js",
  "./Lab1/flag.js",
  "./Lab3/ellipse.js",
  "./Lab3/circle.js",
  "./Lab4/axis.js",
  "./Lab4/triangle.js",
  "./Lab4/matrix.js",
  "./Lab4/reflection.js",
  "./Lab4/rotate.js",
  "./Lab4/scaling.js",
  "./Lab4/shearing.js",
  "./Lab4/translation.js",
  "./title.js",
];
scriptList.forEach(function (s) {
  let script = document.createElement("script"); //creating <script> element
  script.src = s;
  script.async = false;
  document.body.appendChild(script);
});

function callAlgo(title) {
  document.getElementById("transform-control").style.display = "none";
  if (title === "DDA") {
    GLINIT();
    drawDDALine(100, 100, 300, 300);
    return;
  }
  if (title === "BLA") {
    GLINIT();
    drawBLALine(100, 100, 300, 300);
    return;
  }
  if (title === "Nepal") {
    GLINIT();
    drawFlag();
    return;
  }
  if (title === "Ellipse") {
    GLINIT();
    drawEllipseMidPoint(80, 50, 120, 200);
    return;
  }
  if (title === "Circle") {
    GLINIT();
    drawCircleMidPoint(80, 120, 200);
    return;
  }
  if (title === "Transformation") {
    GLINIT();
    document.getElementById("transform-control").style.display = "block";
    drawAxis();
    drawTriangle();
    return;
  }
}

function callTransformer(transform) {
  GLINIT();
  drawAxis();
  drawTriangle();
  if (transform === "Rotation") {
    rotateObject();
    return;
  }
  if (transform === "Scaling") {
    scaleObject();
    return;
  }
  if (transform === "Shearing") {
    shearObject();
    return;
  }
  if (transform === "Reflection") {
    reflectObject();
    return;
  }
  if (transform === "Translation") {
    translateObject();
    return;
  }
}
