function drawAxis() {
  let vertexData = [];
  vertexData.push(1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0);
  DrawObject(gl.LINES, 2, Green, vertexData, 0, vertexData.length);
}
