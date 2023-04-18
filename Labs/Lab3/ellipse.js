function drawEllipseMidPoint() {
  let vertexData = [];
  let a = 200;
  let b = 100;
  let xc = 220;
  let yc = 200;

  let x = 0;
  let y = b;
  let p = b * b - a * a * b + (a * a) / 4;
  let dx = 2 * b * b * x;
  let dy = 2 * a * a * y;

  while (dx < dy) {
    vertexData.push(normalise(xc + x, canvasWidth));
    vertexData.push(normalise(yc + y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc - x, canvasWidth));
    vertexData.push(normalise(yc + y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc + x, canvasWidth));
    vertexData.push(normalise(yc - y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc - x, canvasWidth));
    vertexData.push(normalise(yc - y, canvasHeight));
    vertexData.push(0);

    if (p < 0) {
      x++;
      dx += 2 * b * b;
      p += dx + b * b;
    } else {
      x++;
      y--;
      dx += 2 * b * b;
      dy -= 2 * a * a;
      p += dx - dy + b * b;
    }
  }

  p = b * b * (x + 0.5) * (x + 0.5) + a * a * (y - 1) * (y - 1) - a * a * b * b;

  while (y >= 0) {
    vertexData.push(normalise(xc + x, canvasWidth));
    vertexData.push(normalise(yc + y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc - x, canvasWidth));
    vertexData.push(normalise(yc + y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc + x, canvasWidth));
    vertexData.push(normalise(yc - y, canvasHeight));
    vertexData.push(0);
    vertexData.push(normalise(xc - x, canvasWidth));
    vertexData.push(normalise(yc - y, canvasHeight));
    vertexData.push(0);

    if (p > 0) {
      y--;
      dy -= 2 * a * a;
      p += a * a - dy;
    } else {
      x++;
      y--;
      dx += 2 * b * b;
      dy -= 2 * a * a;
      p += dx - dy + a * a;
    }
  }

  let fragCode = `void main() {gl_FragColor = vec4(1, 0, 0, 1);}`; //red color
  DrawObject(gl.POINTS, 1, fragCode, vertexData, 0, vertexData.length);
}
