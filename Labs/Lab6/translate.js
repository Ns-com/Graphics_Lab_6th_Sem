function translate3DObject(Tx, Ty) {
  FrontFace = translateObject(FrontFace, Tx, Ty);
  BackFace = translateObject(BackFace, Tx, Ty);
  TopFace = translateObject(TopFace, Tx, Ty);
  BottomFace = translateObject(BottomFace, Tx, Ty);
  RightFace = translateObject(RightFace, Tx, Ty);
  LeftFace = translateObject(LeftFace, Tx, Ty);
  DrawCube();
}
