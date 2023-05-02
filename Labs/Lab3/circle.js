function drawCircleMidPoint(radius, XC, YC) {
  let vertexData = [];
  let x = 0;
  let y = radius;
  let p = 1 - radius;

  while (x <= y) {
    vertexData.push(normalise(XC + x, canvasWidth));
    vertexData.push(normalise(YC + y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(XC + y, canvasWidth));
    vertexData.push(normalise(YC + x, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(XC - x, canvasWidth));
    vertexData.push(normalise(YC + y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(XC - y, canvasWidth));
    vertexData.push(normalise(YC + x, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(XC + x, canvasWidth));
    vertexData.push(normalise(YC - y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(XC + y, canvasWidth));
    vertexData.push(normalise(YC - x, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(XC - x, canvasWidth));
    vertexData.push(normalise(YC - y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(XC - y, canvasWidth));
    vertexData.push(normalise(YC - x, canvasHeight));
    vertexData.push(0);

    if (p < 0) {
      x++;
      p += 2 * x + 1;
    } else {
      x++;
      y--;
      p += 2 * x - 2 * y + 1;
    }
  }

  DrawObject(gl.POINTS, 1, Red, vertexData, 0, vertexData.length);
}
