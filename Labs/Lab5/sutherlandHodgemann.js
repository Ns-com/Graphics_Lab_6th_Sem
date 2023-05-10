function sutherLandHodgemann(Xw_min, Yw_min, Xw_max, Yw_max) {
  let vertexData = [];
  let P1 = [-0.6, -0.7, 0];
  let P2 = [0.9, 0.6, 0];
  let P3 = [0.4, 0.7, 0];
  let P4 = [-0.2, 0.6, 0];
  let P5 = [-0.4, 0.2, 0];
  vertexData.push(
    ...P1,
    ...P2,
    ...P2,
    ...P3,
    ...P3,
    ...P4,
    ...P4,
    ...P5,
    ...P5
  );
  // DrawObject(gl.LINES, 2, Red, vertexData, 0, vertexData.length);

  cohenSutherland(P1, P2, Xw_min, Yw_min, Xw_max, Yw_max);
  cohenSutherland(P2, P3, Xw_min, Yw_min, Xw_max, Yw_max);
  cohenSutherland(P3, P4, Xw_min, Yw_min, Xw_max, Yw_max);
  cohenSutherland(P4, P5, Xw_min, Yw_min, Xw_max, Yw_max);
  cohenSutherland(P5, P1, Xw_min, Yw_min, Xw_max, Yw_max);
}
