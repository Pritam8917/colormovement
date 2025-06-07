var box = document.querySelector("#rectangle");

box.addEventListener("mousemove", function (details) {
  var rectposition = box.getBoundingClientRect(); // show the position of the box
  var insiderectval = details.clientX - rectposition.left; // calculate the x position inside the box
  if (insiderectval < rectposition.width / 2) {
    var redcolor = gsap.utils.mapRange(
      0,
      rectposition.width / 2,
      255,
      0,
      insiderectval
    ); // map the x position to a red color value
    box.style.backgroundColor = "rgb(" + redcolor + ", 0, 0)";
  }
  
   else {
    var bluecolor = gsap.utils.mapRange(
      rectposition.width / 2,
      rectposition.width,
      0,
      255,
      insiderectval
    ); // map the x position to a blue color value
    box.style.backgroundColor = "rgb(0,0," + bluecolor + ")";
  }
});
box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "white";
});
