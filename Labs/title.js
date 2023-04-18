document.getElementById("title").innerHTML = "Select Lab";
console.log("title");

function onChangeLab(title) {
  document.getElementById("title").innerHTML = title;
  callAlgo(title);
}
