let vertexA = [0.5, 0.1, 1];
let vertexB = [0.5, 0.5, 1];
let vertexC = [0.1, 0.1, 1];
function drawTriangle() {
  let vertexData = [];
  vertexData.push(...vertexA, ...vertexB, ...vertexC);
  DrawObject(gl.TRIANGLES, 3, Red, vertexData, 0, vertexData.length);
}
