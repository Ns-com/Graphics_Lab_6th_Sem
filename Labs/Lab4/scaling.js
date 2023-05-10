function scaleObject(objectData, Sx, Sy) {
  let vertexData = [];
  let scalingMatrix = [...[Sx, 0, 0], ...[0, Sy, 0], ...[0, 0, 1]];
  vertexData.push(...matrixMultiplication(scalingMatrix, objectData, 3));
  return vertexData;
}

function drawScaledObject(Sx, Sy) {
  let objectData = [...vertexA, ...vertexB, ...vertexC];
  let vertexData = scaleObject(objectData, Sx, Sy);
  DrawObject(gl.TRIANGLES, 3, White, vertexData, 0, vertexData.length);
}
