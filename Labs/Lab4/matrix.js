function matrixMultiplication(Transformer, coordinates) {
  let result = [];
  for (let i = 0; i < 3; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      sum += Transformer[i * 3 + j] * coordinates[j];
    }
    result.push(sum);
  }
  return result;
}
