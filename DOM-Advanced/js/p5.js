// let firstli = document.querySelector('li');

// console.log(firstli); // <li>item-1</li>
// console.log(firstli.parentElement) // ul
// console.log(firstli.parentElement.parentElement) //body
// console.log(firstli.parentElement.parentElement.parentElement) // html
// console.log(firstli.parentElement.parentElement.parentElement.parentElement) //null
//---------------------------------------------------------------

// let ul = document.querySelector("ul");

// console.log(ul.children);
// console.log(ul.children[0]);  //  <li>item-1</li>
// console.log(ul.children[1]);  //  <li>item-2</li>
// console.log(ul.children[2]);  //  <li>item-3</li>
// console.log(ul.children[2].innerText);  // item-3
// ul.children[2].innerText = "Apple"; // Apple

//Next Element Sibling

// console.log(firstli.nextElementSibling.textContent); //item-2
// console.log(firstli.nextElementSibling.nextElementSibling.textContent);  //item-3
// console.log(firstli.nextElementSibling.nextElementSibling.nextElementSibling.textContent); //item-4
// console.log(firstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent); //item-5


//Previous Element Sibling
let fourthLi = document.querySelector('.fourth');
console.log(fourthLi);
console.log(fourthLi.previousElementSibling.textContent); //item-3
console.log(fourthLi.previousElementSibling.previousElementSibling.textContent); //item-2

