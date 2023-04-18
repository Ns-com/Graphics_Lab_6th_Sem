document.getElementById("resolution").innerHTML =
  "Your screen resolution is: " +
  (window.screen.width * window.devicePixelRatio).toFixed(2) +
  "x" +
  (window.screen.height * window.devicePixelRatio).toFixed(2);

const canvas = document.querySelector("#canvas");
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

function normalise(pos, axis) {
  const halfAxis = axis / 2;
  let normalised = pos / halfAxis - 1;
  return normalised;
}
