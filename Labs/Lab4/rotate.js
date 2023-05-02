function rotateObject() {
  let vertexData = [];
  let rotationMatrix = [...[0, -1, 0], ...[1, 0, 0], ...[0, 0, 1]];
  vertexData.push(...matrixMultiplication(rotationMatrix, vertexA));
  vertexData.push(...matrixMultiplication(rotationMatrix, vertexB));
  vertexData.push(...matrixMultiplication(rotationMatrix, vertexC));
  DrawObject(gl.TRIANGLES, 3, White, vertexData, 0, vertexData.length);
}
