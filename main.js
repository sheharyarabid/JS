//DOM - Document object Model
// console.log(window)

// Single element selectors
// console.log(document.getElementById('my-form'));  //No selector syntax required
// console.log(document.querySelector('#my-form')); //add the relevant selector syntax id/class/element

// Multiple element selectors
// console.log(document.querySelectorAll('.item')); //Selects all elements
// console.log(document.getElementsByClassName('.item')) //alternative is use classes for those elements
// console.log(document.getElementsByTagName('li'));

// Looping through similar tags!

// const items = document.querySelectorAll('li');
// items.forEach((item)=>{
//     console.log(item)
// })

// manipulating DOM
//const ul = document.querySelector('.items');
// ul.remove() // removes the element with class name items.
// ul.lastElementChild.remove();
// ul.children[1].innerHTML = '<h1>brad</h1>'
// ul.firstElementChild.innerHTML= '<h2>Nice</h2>' //replaces the first child of the parent tag ul to header text nice
// ul.children[2].style.background = 'red';

let btn = document.querySelector('.btn'); //takes single value

//let  btn2 = document.querySelectorAll('.btn'); //takes all values with class btn stores in an array
//let btn3 = document.getElementsByClassName('btn'); //takes all values with class btn stores in an array
// To make changes i.e apply styles using multiple selectors as above two we use for loop in order to iterate

// console.log(btn1) //single btn (first one)
// console.log(btn2) // array 
// console.log(btn3) // array
// btn.style.background  = 'red';

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('I\'m clicked')
// })

