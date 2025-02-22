/* в этот файл добавляет скрипты*/
const navButton = document.querySelector('.header__navigation-button');
const navSection = document.querySelector('.navigation');

function onClicked() {
  if (navButton.classList.contains('open-navigation')) {
    navSection.classList.add('activ-nav');
    navButton.classList.add('close-navigation');
    navButton.classList.remove('open-navigation');
  } else {
    navSection.classList.remove('activ-nav');
    navButton.classList.remove('close-navigation');
    navButton.classList.add('open-navigation');
  }
}
navButton.addEventListener('click', onClicked);
