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
  "./Lab6/draw3D.js",
  "./Lab6/3DObject.js",
  "./Lab6/translate.js",
  "./Lab6/scale.js",
  "./Lab6/rotate.js",
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
  document.getElementById("transform-control-3D").style.display = "none";
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
    drawViewPort(Xw_min, Yw_min, Xw_max, Yw_max);
    GLINIT();
    cohenSutherland(P1, P2, Xw_min, Yw_min, Xw_max, Yw_max);
    return;
  }
  if (title === "Sutherland Hodgemann") {
    GLINIT();
    drawViewPort(Xw_min, Yw_min, Xw_max, Yw_max);
    GLINIT();
    sutherLandHodgemann(Xw_min, Yw_min, Xw_max, Yw_max);
    return;
  }
  if (title === "3D-Transformation") {
    let O = [-0.5, -0.5, 0];
    let [H, W, L] = [0.3, 0.3, 0.3];
    GLINIT();
    document.getElementById("transform-control-3D").style.display = "block";
    draw3DObject(O, H, W, L);
    GLINIT();
    drawAxis();
    return;
  }
}

function call2DTransformer(transform) {
  GLINIT();
  drawAxis();
  drawTriangle();
  GLINIT();
  if (transform === "2D-Rotation") {
    drawRotatedObject(Math.PI / 2);
    return;
  }
  if (transform === "2D-Scaling") {
    drawScaledObject(1.5, 1.5);
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
    drawTranslatedObject(-0.6, -0.6);
    return;
  }
}

function call3DTransformer(transform) {
  let O = [-0.5, -0.5, 0];
  let [H, W, L] = [0.3, 0.3, 0.3];
  GLINIT();
  document.getElementById("transform-control-3D").style.display = "block";
  draw3DObject(O, H, W, L);
  GLINIT();
  drawAxis();
  if (transform === "3D-Translation") {
    translate3DObject(0.5, 0.5);
    GLINIT();
    drawAxis();
    return;
  }
  if (transform === "3D-Rotation") {
    rotate3DObject((4 * Math.PI) / 5);
    GLINIT();
    drawAxis();
    return;
  }
  if (transform === "3D-Scaling") {
    translate3DObject(0.5, 0.5);
    scale3DObject(1.5, 1.5);
    GLINIT();
    drawAxis();
    return;
  }
}
