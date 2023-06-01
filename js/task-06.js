
const inputText = document.querySelector('#validation-input');
console.dir(inputText);


const maxLengthText = Number(inputText.dataset.length);
console.dir(maxLengthText);

inputText.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
    const contentInInputText = event.currentTarget.value.trim();
 
    if (contentInInputText.length > maxLengthText) {
        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    } else {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    }

}
