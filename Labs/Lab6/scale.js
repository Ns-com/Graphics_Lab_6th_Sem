function scale3DObject(Sx, Sy) {
  FrontFace = scaleObject(FrontFace, Sx, Sy);
  BackFace = scaleObject(BackFace, Sx, Sy);
  TopFace = scaleObject(TopFace, Sx, Sy);
  BottomFace = scaleObject(BottomFace, Sx, Sy);
  RightFace = scaleObject(RightFace, Sx, Sy);
  LeftFace = scaleObject(LeftFace, Sx, Sy);
  DrawCube();
}
