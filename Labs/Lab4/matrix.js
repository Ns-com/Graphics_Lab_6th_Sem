function matrixMultiplication(Transformer, coordinates, numElements) {
  let result = [];
  for (let i = 0; i < coordinates.length; i += 3) {
    for (let j = 0; j < 3; j++) {
      let sum = 0;
      for (let k = 0; k < numElements; k++) {
        sum += Transformer[j * 3 + k] * coordinates[i + k];
      }
      result.push(sum);
    }
  }
  return result;
}
