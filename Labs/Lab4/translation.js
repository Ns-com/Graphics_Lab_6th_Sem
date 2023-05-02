function translateObject() {
  let vertexData = [];
  let translationMatrix = [...[1, 0, -0.6], ...[0, 1, -0.6], ...[0, 0, 1]];
  vertexData.push(...matrixMultiplication(translationMatrix, vertexA));
  vertexData.push(...matrixMultiplication(translationMatrix, vertexB));
  vertexData.push(...matrixMultiplication(translationMatrix, vertexC));
  console.log(vertexData);
  DrawObject(gl.TRIANGLES, 3, White, vertexData, 0, vertexData.length);
}
