function cohenSutherland(P1, P2, Xw_min, Yw_min, Xw_max, Yw_max) {
  let p1Code = computeRegionCode(P1, Xw_min, Yw_min, Xw_max, Yw_max);
  let p2Code = computeRegionCode(P2, Xw_min, Yw_min, Xw_max, Yw_max);
  let p10, p20, p1p20, m, P1_new, P2_new;
  m = (P2[1] - P1[1]) / (P2[0] - P1[0]);
  P1_new = [...P1];
  P2_new = [...P2];
  for (let i = 0; i < 4; i++) {
    p10 = p1Code[0] || p1Code[1] || p1Code[2] || p1Code[3];
    p20 = p2Code[0] || p2Code[1] || p2Code[2] || p2Code[3];
    p1p20 =
      (p1Code[0] && p2Code[0]) ||
      (p1Code[1] && p2Code[1]) ||
      (p1Code[2] && p2Code[2]) ||
      (p1Code[3] && p2Code[3]);
    if (!p10 && !p20) {
      let vertexData = [...P1_new, ...P2_new];
      DrawObject(gl.LINES, 2, White, vertexData, 0, vertexData.length);
    } else {
      if (!p1p20) {
        if (!p10) {
          let x1 = P2_new[0];
          let y1 = P2_new[1];
          P2_new = [];
          if (p2Code[0] === 1) {
            P2_new.push(x1 + (Yw_max - y1) / m);
            P2_new.push(Yw_max);
            p2Code = computeRegionCode(P2_new, Xw_min, Yw_min, Xw_max, Yw_max);
          }
          if (p2Code[1] === 1) {
            P2_new.push(x1 + (Yw_min - y1) / m);
            P2_new.push(Yw_min);
            p2Code = computeRegionCode(P2_new, Xw_min, Yw_min, Xw_max, Yw_max);
          }
          if (p2Code[2] === 1) {
            P2_new.push(Xw_max);
            P2_new.push(y1 + m * (Xw_max - x1));
            p2Code = computeRegionCode(P2_new, Xw_min, Yw_min, Xw_max, Yw_max);
          }
          if (p2Code[3] === 1) {
            P2_new.push(Xw_min);
            P2_new.push(y1 + m * (Xw_min - x1));
            p2Code = computeRegionCode(P2_new, Xw_min, Yw_min, Xw_max, Yw_max);
          }
        } else if (!p20) {
          let x1 = P1_new[0];
          let y1 = P1_new[1];
          P1_new = [];
          if (p2Code[0] === 1) {
            P1_new.push(x1 + (Yw_max - y1) / m);
            P1_new.push(Yw_max);
            p1Code = computeRegionCode(P1_new, Xw_min, Yw_min, Xw_max, Yw_max);
          }
          if (p1Code[1] === 1) {
            P1_new.push(x1 + (Yw_min - y1) / m);
            P1_new.push(Yw_min);
            p1Code = computeRegionCode(P1_new, Xw_min, Yw_min, Xw_max, Yw_max);
          }
          if (p1Code[2] === 1) {
            P1_new.push(Xw_max);
            P1_new.push(y1 + m * (Xw_max - x1));
            p1Code = computeRegionCode(P1_new, Xw_min, Yw_min, Xw_max, Yw_max);
          }
          if (p1Code[3] === 1) {
            P1_new.push(Xw_min);
            P1_new.push(y1 + m * (Xw_min - x1));
            p1Code = computeRegionCode(P1_new, Xw_min, Yw_min, Xw_max, Yw_max);
          }
        } else {
          let x1 = P1_new[0];
          let y1 = P1_new[1];
          P1_new = [];
          if (p2Code[0] === 1) {
            P1_new.push(x1 + (Yw_max - y1) / m);
            P1_new.push(Yw_max);
            p1Code = computeRegionCode(P1_new, Xw_min, Yw_min, Xw_max, Yw_max);
          }
          if (p1Code[1] === 1) {
            P1_new.push(x1 + (Yw_min - y1) / m);
            P1_new.push(Yw_min);
            p1Code = computeRegionCode(P1_new, Xw_min, Yw_min, Xw_max, Yw_max);
          }
          if (p1Code[2] === 1) {
            P1_new.push(Xw_max);
            P1_new.push(y1 + m * (Xw_max - x1));
            p1Code = computeRegionCode(P1_new, Xw_min, Yw_min, Xw_max, Yw_max);
          }
          if (p1Code[3] === 1) {
            P1_new.push(Xw_min);
            P1_new.push(y1 + m * (Xw_min - x1));
            p1Code = computeRegionCode(P1_new, Xw_min, Yw_min, Xw_max, Yw_max);
          }
        }
      } else {
        console.log("hello");
        return;
      }
    }
  }
}

function computeRegionCode(P1, Xw_min, Yw_min, Xw_max, Yw_max) {
  let [T, B, R, L] = [0, 0, 0, 0];
  const [x, y] = [P1[0], P1[1]];
  const [isLeft, isRight, isBottom, isTop] = [
    x < Xw_min,
    x > Xw_max,
    y < Yw_min,
    y > Yw_max,
  ];
  switch (true) {
    case isLeft && isTop:
      [T, L] = [1, 1];
      break;
    case isLeft && !isTop && !isBottom:
      L = 1;
      break;
    case isLeft && isBottom:
      [B, L] = [1, 1];
      break;
    case !isLeft && !isRight && isTop:
      T = 1;
      break;
    case isRight && isTop:
      [T, R] = [1, 1];
      break;
    case isRight && !isTop && !isBottom:
      R = 1;
      break;
    case isRight && isBottom:
      [B, R] = [1, 1];
      break;
    case !isLeft && !isRight && isBottom:
      B = 1;
      break;
  }

  return [T, B, R, L];
}
