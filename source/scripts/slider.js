const slides = document.querySelectorAll('.slide');
let isLast = false;
let isFirst = true;

const prevButton = document.querySelector('.hero__slider-button--prev');
prevButton.addEventListener('click', prevSlide);

const nextButton = document.querySelector('.hero__slider-button--next');
nextButton.addEventListener('click', nextSlide);

function changeSlide(activeSlide) {
  const active = document.querySelector('.slide--active');
  active.classList.remove('slide--active');
  slides[activeSlide].classList.add('slide--active');
}

let current = 0;
function nextSlide() {
  current += 1;
  changeSlide(current);
  checkBoundaries(current);
  changeButtonState();
}

function prevSlide() {
  current -= 1;
  changeSlide(current);
  checkBoundaries(current);
  changeButtonState();
}



function checkBoundaries(current) {
  isFirst = current === 0;
  isLast = current === slides.length - 1;
}

function changeButtonState() {
  if (isFirst) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (isLast) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}
