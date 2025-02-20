function draw3DObject(O, H, W, L) {
  // P2 P4
  // P1 P3
  let [x, y] = [O[0], O[1]];
  let P1 = [x, y, 1];
  let P2 = [x, y + H, 1];
  let P3 = [x + L, y, 1];
  let P4 = [x + L, y + H, 1];
  let P5 = createVertex(P3, W / 2, W / 2);
  let P6 = createVertex(P4, W / 2, W / 2);
  let P7 = createVertex(P2, W / 2, W / 2);
  FrontFace = [...P1, ...P2, ...P3, ...P2, ...P3, ...P4];
  BackFace = translateObject(FrontFace, W / 1.75, W / 2.4);
  RightFace = [...P3, ...P4, ...P5, ...P4, ...P5, ...P6];
  LeftFace = translateObject(RightFace, -L, 0);
  TopFace = [...P2, ...P4, ...P7, ...P4, ...P6, ...P7];
  BottomFace = translateObject(TopFace, 0, -H);
  DrawCube();
}

function createVertex(A, Tx, Ty) {
  let vertexData = [
    ...translateObject(
      rotateObject(
        -Math.PI / 20,
        translateObject(translateObject(A, Tx, Ty), -A[0], -A[1])
      ),
      A[0],
      A[1]
    ),
  ];
  return vertexData;
}
