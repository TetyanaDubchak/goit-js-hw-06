let valueSpanEl = document.querySelector('#value');
let counterValue = 0;

const decrBtnEl = document.querySelector('[data-action="decrement"]');
const incrBtnEl = document.querySelector('[data-action="increment"]');

function decrAction(event) {
   if (event.currentTarget) {
     counterValue -= 1;
   };
   valueSpanEl.textContent = counterValue;
};

function incrAction(event) {
    if (event.currentTarget) {
     counterValue += 1;
   };
   valueSpanEl.textContent = counterValue;
};

decrBtnEl.addEventListener('click', decrAction);
incrBtnEl.addEventListener('click', incrAction);

