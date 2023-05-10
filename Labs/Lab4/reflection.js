function reflectObject() {
  let triangleData = [...vertexA, ...vertexB, ...vertexC];
  let vertexData = [];
  let reflectionMatrix = [...[1, 0, 0], ...[0, -1, 0], ...[0, 0, 1]];
  vertexData.push(...matrixMultiplication(reflectionMatrix, triangleData, 3));
  DrawObject(gl.TRIANGLES, 3, White, vertexData, 0, vertexData.length);
}

