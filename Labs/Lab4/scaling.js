function scaleObject() {
  let vertexData = [];
  let rotationMatrix = [...[0, -1, 0], ...[1, 0, 0], ...[0, 0, 1]];
  let scalingMatrix = [...[1.5, 0, 0], ...[0, 1.5, 0], ...[0, 0, 1]];
  vertexData.push(
    ...matrixMultiplication(
      scalingMatrix,
      matrixMultiplication(rotationMatrix, vertexA)
    )
  );
  vertexData.push(
    ...matrixMultiplication(
      scalingMatrix,
      matrixMultiplication(rotationMatrix, vertexB)
    )
  );
  vertexData.push(
    ...matrixMultiplication(
      scalingMatrix,
      matrixMultiplication(rotationMatrix, vertexC)
    )
  );
  DrawObject(gl.TRIANGLES, 3, White, vertexData, 0, vertexData.length);
}
