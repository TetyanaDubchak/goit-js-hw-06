function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsBoxElem = document.querySelector('#controls');
const inpuElem = controlsBoxElem.firstElementChild;
const createBtnElem = document.querySelector('button[data-create]');
const destroyBtnElem = document.querySelector('button[data-create]');
const divBoxElem = document.querySelector('#boxes');


let amount = 0;

inpuElem.addEventListener('change', onChangeAmount);
function onChangeAmount(event) {
  amount = event.currentTarget.value;
  // console.log(amount);
}
let elementsAr = [];
elementsAr.length = amount;


// destroyBtnElem.addEventListener('click', createBoxes);

function createBoxes(amount) {
    const createBox = document.createElement('div');
    createBox.style.cssText = 'width: 30px; height: 30px';
    createBox.style.backgroundColor = getRandomHexColor();
    elementsAr.push(createBox)
  // for (let el = 0; el < elementsAr.length; el++) {
  //   // const createBox = document.createElement('div');
  //   // createBox.style.cssText = 'width: 30px; height: 30px';
  //   createBox.width += '10px';
    divBoxElem.append();
    
  // }

  
}
console.dir(createBoxes());
