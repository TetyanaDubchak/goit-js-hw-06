
const inputText = document.querySelector('#validation-input');
console.dir(inputText);


const lengthOfText = Number(inputText.dataset.length);
console.dir(lengthOfText);

inputText.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
    const contentInInputText = event.currentTarget.value.trim();
 
    if (contentInInputText.length === lengthOfText) {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    } else {
        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    }

}
