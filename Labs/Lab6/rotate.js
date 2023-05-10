function rotate3DObject(angle) {
  FrontFace = rotateObject(angle, FrontFace);
  BackFace = rotateObject(angle, BackFace);
  TopFace = rotateObject(angle, TopFace);
  BottomFace = rotateObject(angle, BottomFace);
  RightFace = rotateObject(angle, RightFace);
  LeftFace = rotateObject(angle, LeftFace);
  DrawCube();
}
