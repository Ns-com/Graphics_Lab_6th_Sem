function shearObject() {
  let vertexData = [];
  let shearMatrix = [...[1, 0.5, 0], ...[0, 1, 0], ...[0, 0, 1]];
  vertexData.push(...matrixMultiplication(shearMatrix, vertexA));
  vertexData.push(...matrixMultiplication(shearMatrix, vertexB));
  vertexData.push(...matrixMultiplication(shearMatrix, vertexC));
  DrawObject(gl.TRIANGLES, 3, White, vertexData, 0, vertexData.length);
}
