const slides = document.querySelectorAll('.slide');
let isLast = false;
let isFirst = true;

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
  changePagState(current);
}

function prevSlide() {
  current -= 1;
  changeSlide(current);
  checkBoundaries(current);
  changeButtonState();
  changePagState(current);
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

const prevButton = document.querySelector('.hero__slider-button--prev');
prevButton.addEventListener('click', prevSlide);

const nextButton = document.querySelector('.hero__slider-button--next');
nextButton.addEventListener('click', nextSlide);

//pagination
const pagButtons = document.querySelectorAll('.hero__pagination-button');

function changeSlideByPag(clicked) {
  current = (clicked.target.dataset.number) - 1;
  changeSlide(current);
  checkBoundaries(current);
  changeButtonState();
  changePagState(current)
}

function changePagState(current) {
  document.querySelector('.hero__pagination-button--active').classList.remove('hero__pagination-button--active');
  pagButtons[current].classList.add('hero__pagination-button--active');
}

const pagContainer = document.querySelector('.hero__pagination');
pagContainer.addEventListener('click', changeSlideByPag)
