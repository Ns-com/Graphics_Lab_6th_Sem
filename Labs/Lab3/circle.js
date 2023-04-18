function drawCircleMidPoint() {
  let vertexData = [];
  let radius = 100;
  let xc = 300;
  let yc = 300;

  let x = 0;
  let y = radius;
  let p = 1 - radius;

  while (x <= y) {
    vertexData.push(normalise(xc + x, canvasWidth));
    vertexData.push(normalise(yc + y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc + y, canvasWidth));
    vertexData.push(normalise(yc + x, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc - x, canvasWidth));
    vertexData.push(normalise(yc + y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc - y, canvasWidth));
    vertexData.push(normalise(yc + x, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc + x, canvasWidth));
    vertexData.push(normalise(yc - y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc + y, canvasWidth));
    vertexData.push(normalise(yc - x, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc - x, canvasWidth));
    vertexData.push(normalise(yc - y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc - y, canvasWidth));
    vertexData.push(normalise(yc - x, canvasHeight));
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

  let fragCode = `void main() {gl_FragColor = vec4(1, 0, 0, 1);}`; //red color
  DrawObject(gl.POINTS, 1, fragCode, vertexData, 0, vertexData.length);
}
