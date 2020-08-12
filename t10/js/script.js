let slideIndex = 0;
let sliderTimer;

plusSlides(slideIndex);

function showSlides(n) {
  var slides = Array.from(document.querySelectorAll(".slide"));

  if (n == slides.length) {
    slideIndex = 0;
  }
  if (n == -1) {
    slideIndex = slides.length - 1;
  }
  for (let i in slides) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => plusSlides(1), 3000);
}
