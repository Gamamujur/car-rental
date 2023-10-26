let currentTestimonial = 0;
const testimonialContainer = document.querySelector('.carousel-hug');
const testimonialWidth = document.querySelector('.carousel-inner').clientWidth;

function showTestimonial(testimonialIndex) {
  currentTestimonial = testimonialIndex;
  const offset = testimonialIndex * testimonialWidth;
  testimonialContainer.style.transform = `translateX(-${offset}px)`;
}

function nextTestimonial() {
  currentTestimonial++;
  if (currentTestimonial > 2) {
    currentTestimonial = 0;
  }
  showTestimonial(currentTestimonial);
}

function previousTestimonial() {
  currentTestimonial--;
  if (currentTestimonial < 0) {
    currentTestimonial = 2;
  }
  showTestimonial(currentTestimonial);
}

showTestimonial(currentTestimonial);
