
const categories = document.querySelector('#categories');


let count = categories.childElementCount;
console.log(`Number of categories: ${count}`);
// ==========================================

const item = document.querySelectorAll('.item');

item.forEach(function (child) {
    const nameOfTitle = child.firstElementChild.textContent;
    console.log(`Category: ${nameOfTitle}`);

    const countOfChild = child.lastElementChild.childElementCount;
    console.dir(`Elements: ${countOfChild}`);
    
});