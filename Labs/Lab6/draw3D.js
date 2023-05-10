let FrontFace,
  BackFace,
  LeftFace,
  RightFace,
  TopFace,
  BottomFace = [];
function DrawCube() {
  DrawObject(gl.TRIANGLES, 3, Yellow, BackFace, 0, BackFace.length);
  DrawObject(gl.TRIANGLES, 3, White, LeftFace, 0, BackFace.length);
  DrawObject(gl.TRIANGLES, 3, Gray, BottomFace, 0, BackFace.length);
  DrawObject(gl.TRIANGLES, 3, Red, FrontFace, 0, FrontFace.length);
  DrawObject(gl.TRIANGLES, 3, Green, RightFace, 0, RightFace.length);
  DrawObject(gl.TRIANGLES, 3, Blue, TopFace, 0, TopFace.length);
}
