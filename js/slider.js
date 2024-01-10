let slideIndex = 1;
showSlides(slideIndex);

function plusSlider(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  // DOM
  let i;
  let slides = document.getElementsByClassName("Slides");
  let dots = document.getElementsByClassName("dot");

  // prev & next logic

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // to hide slides when i click outside
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // to mark dots. i mean to show active slides
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // logic for showing slides
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
