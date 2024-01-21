function bgchange(index) {
  var colorarray = ["#DCFFB7", "#22092C", "#92C7CF", "#0E2954", "#A0E9FF"];
  var textarray = ["#0F0F0F", "#F0F0F0", "#0F0F0F", "#F0F0F0", "#0F0F0F"];
  let collection = document.getElementsByTagName("h1");
  collection[0].style.color = textarray[index];
  document.body.style.background = colorarray[index];
}

var colorarray = ["#DCFFB7", "#22092C", "#92C7CF", "#0E2954", "#A0E9FF"];
var colorbox = document.getElementById("colours");

colorarray.forEach(function (color, index) {
  let span = document.createElement("span");
  span.style.backgroundColor = color;
  span.addEventListener("click", function () {
    bgchange(index);
  });
  colorbox.appendChild(span);
});
