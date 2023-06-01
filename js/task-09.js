function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnForChange = document.querySelector('.change-color');
const spanText = document.querySelector('.color');
const body = document.querySelector('body');


btnForChange.addEventListener('click', onColorBodyChange);

function onColorBodyChange(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanText.textContent = getRandomHexColor();
}
