
const rangeControl = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

rangeControl.addEventListener('input', onTextStyleChange);

function onTextStyleChange(evn) {
    span.style.fontSize = evn.currentTarget.value + 'px'; 
}