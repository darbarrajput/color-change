var color = ["red", "green", "blue"];
var i = 0;
document.querySelector("button").addEventListener("click", function() {
  i = i < color.length ? ++i : 0;
  document.querySelector("body").style.background = color[i];
})