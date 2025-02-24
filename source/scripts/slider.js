const slides = document.querySelectorAll('.slide');
const paginationButtons = document.querySelectorAll('.hero__pagination-button');
let isLast = false;
let isFirst = true;
let current = 0;

function nextSlide() {
  current += 1;
  changeSlide();
  checkBoundaries();
  changeButtonState();
  changePaginationState();
}

function prevSlide() {
  current -= 1;
  changeSlide();
  checkBoundaries();
  changeButtonState();
  changePaginationState();
}

function goTo(slideIndex) {
  current = slideIndex;
  changeSlide();
  checkBoundaries();
  changeButtonState();
  changePaginationState();
}

function checkBoundaries() {
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

function changeSlide() {
  const active = document.querySelector('.slide--active');
  active.classList.remove('slide--active');
  slides[current].classList.add('slide--active');
}

function changePaginationState() {
  document.querySelector('.hero__pagination-button--active').classList.remove('hero__pagination-button--active');
  paginationButtons[current].classList.add('hero__pagination-button--active');
}

const prevButton = document.querySelector('.hero__slider-button--prev');
prevButton.addEventListener('click', prevSlide);

const nextButton = document.querySelector('.hero__slider-button--next');
nextButton.addEventListener('click', nextSlide);

function onPaginationClick(event) {
  if (!event.target.classList.contains('hero__pagination-button')) {
    return;
  }

  const slideIndex = parseInt(event.target.dataset.slideIndex, 10);
  goTo(slideIndex);
}

const paginationContainer = document.querySelector('.hero__pagination');
paginationContainer.addEventListener('click', onPaginationClick)
