function drawDDALine(X0, Y0, X1, Y1) {
  let vertexData = [];

  let dx = Math.abs(X1 - X0);
  let dy = Math.abs(Y1 - Y0);
  let steps = dx > dy ? dx : dy;

  let Xinc = dx / steps;
  let Yinc = dx / steps;

  let X = X0;
  let Y = Y0;
  for (let i = 0; i < steps; i++) {
    vertexData.push(normalise(X, canvasWidth));
    vertexData.push(normalise(Y, canvasHeight));
    vertexData.push(0);
    X += Xinc;
    Y += Yinc;
  } //red color
  DrawObject(gl.POINTS, 1, Red, vertexData, 0, vertexData.length);
}
