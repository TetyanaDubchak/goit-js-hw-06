
const inputName = document.querySelector('#name-input');
const nameInTitle = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    nameInTitle.textContent = event.currentTarget.value.trim() === '' ? "Anonymous!" : event.currentTarget.value;
    }
    



