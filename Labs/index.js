let scriptList = [
  "./glSetup/main.js",
  "./glSetup/glinit.js",
  "./glSetup/draw.js",
  "./Lab2/algo.js",
  "./Lab1/algo.js",
  "./title.js",
];
scriptList.forEach(function (s) {
  let script = document.createElement("script"); //creating <script> element
  script.src = s;
  script.async = false;
  document.body.appendChild(script);
});

function callAlgo(title) {
  if (title === "DDA") {
    drawDDALine();
    return;
  }
  if (title === "Nepal") {
    drawFlag();
    return;
  }
}
