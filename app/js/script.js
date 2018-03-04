var elems = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot")


function currentSlide(n) {
  for (let i = 0; i < elems.length; i++){
    elems[i].style.display = "none";

  }
  elems[n - 1].style.display = "block";
  console.log(n - 1);
}