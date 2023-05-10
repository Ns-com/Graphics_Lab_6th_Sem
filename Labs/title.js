function onChangeLab(title) {
  document.getElementById("title").innerHTML = title;
  callAlgo(title);
}

function onTransform2D(transform) {
  call2DTransformer(transform);
}

function onTransform3D(transform) {
  call3DTransformer(transform);
}
