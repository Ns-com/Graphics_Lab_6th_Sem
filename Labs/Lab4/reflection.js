function reflectObject() {
  let vertexData = [];
  let reflectionMatrix = [...[1, 0, 0], ...[0, -1, 0], ...[0, 0, 1]];
  vertexData.push(...matrixMultiplication(reflectionMatrix, vertexA));
  vertexData.push(...matrixMultiplication(reflectionMatrix, vertexB));
  vertexData.push(...matrixMultiplication(reflectionMatrix, vertexC));
  DrawObject(gl.TRIANGLES, 3, White, vertexData, 0, vertexData.length);
}
