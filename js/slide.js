let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.slides img');
  slideIndex += n;
  
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[slideIndex].style.display = 'block';
}
moveSlide(0);
