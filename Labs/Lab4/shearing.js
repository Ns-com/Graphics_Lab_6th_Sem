function shearObject() {
  let triangleData = [...vertexA, ...vertexB, ...vertexC];
  let vertexData = [];
  let shearMatrix = [...[1, 0.5, 0], ...[0, 1, 0], ...[0, 0, 1]];
  vertexData = [];
  vertexData.push(...matrixMultiplication(shearMatrix, triangleData, 3));
  DrawObject(gl.TRIANGLES, 3, White, vertexData, 0, vertexData.length);
}
