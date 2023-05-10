function translateObject(objectData, Tx, Ty) {
  let vertexData = [];
  let translationMatrix = [...[1, 0, Tx], ...[0, 1, Ty], ...[0, 0, 1]];
  vertexData.push(...matrixMultiplication(translationMatrix, objectData, 3));
  return vertexData;
}

function drawTranslatedObject(Tx, Ty) {
  let objectData = [...vertexA, ...vertexB, ...vertexC];
  let vertexData = translateObject(objectData, Tx, Ty);
  DrawObject(gl.TRIANGLES, 3, White, vertexData, 0, vertexData.length);
}
