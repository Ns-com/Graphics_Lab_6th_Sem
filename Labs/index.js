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
  "./Lab5/viewPort.js",
  "./Lab5/cohenSutherland.js",
  "./Lab5/sutherlandHodgemann.js",
  "./title.js",
];
scriptList.forEach(function (s) {
  let script = document.createElement("script"); //creating <script> element
  script.src = s;
  script.async = false;
  document.body.appendChild(script);
});

function callAlgo(title) {
  document.getElementById("transform-control-2D").style.display = "none";
  let Xw_min = -0.8;
  let Yw_min = -0.5;
  let Xw_max = 0.8;
  let Yw_max = 0.5;
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
  if (title === "2D-Transformation") {
    GLINIT();
    document.getElementById("transform-control-2D").style.display = "block";
    drawAxis();
    drawTriangle();
    return;
  }
  if (title === "Cohen Sutherland") {
    let P1 = [-0.6, -0.7, 0];
    let P2 = [0.9, 0.4, 0];
    GLINIT();
    cohenSutherland(P1, P2, Xw_min, Yw_min, Xw_max, Yw_max);
    drawViewPort(Xw_min, Yw_min, Xw_max, Yw_max);
    return;
  }
  if (title === "Sutherland Hodgemann") {
    GLINIT();
    sutherLandHodgemann(Xw_min, Yw_min, Xw_max, Yw_max);
    drawViewPort(Xw_min, Yw_min, Xw_max, Yw_max);
    return;
  }
}

function callTransformer(transform) {
  GLINIT();
  drawAxis();
  drawTriangle();
  if (transform === "2D-Rotation") {
    rotateObject();
    return;
  }
  if (transform === "2D-Scaling") {
    scaleObject();
    return;
  }
  if (transform === "2D-Shearing") {
    shearObject();
    return;
  }
  if (transform === "2D-Reflection") {
    reflectObject();
    return;
  }
  if (transform === "2D-Translation") {
    translateObject();
    return;
  }
}
