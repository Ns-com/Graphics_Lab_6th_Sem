function rotateObject(angle, objectData) {
  let vertexData = [];
  let cos = Math.cos(angle);
  let sin = Math.sin(angle);
  let rotationMatrix = [...[cos, -sin, 0], ...[sin, cos, 0], ...[0, 0, 1]];
  vertexData.push(...matrixMultiplication(rotationMatrix, objectData, 3));
  return vertexData;
}

function drawRotatedObject(angle) {
  let objectData = [...vertexA, ...vertexB, ...vertexC];
  let vertexData = rotateObject(angle, objectData);
  DrawObject(gl.TRIANGLES, 3, White, vertexData, 0, vertexData.length);
}
