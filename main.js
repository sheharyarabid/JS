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

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     e.target.value = 'Changed Wow'
// })

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     e.target.className = 'btn1'
// })

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc'; //changes background
//     document.querySelector('body').classList.add('bg-dark'); // adds a new class for tag body
//     document.querySelector('.items').innerHTML ='<h1>Hello</h1>'
// })

// btn.addEventListener('mousein',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc'; //changes background
//     document.querySelector('body').classList.add('bg-dark'); // adds a new class for tag body
//     document.querySelector('.items').innerHTML ='<h1>Hello</h1>'
// })

// btn.addEventListener('mouseover',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc'; //changes background
//     document.querySelector('body').classList.add('bg-dark'); // adds a new class for tag body
//     document.querySelector('.items').innerHTML ='<h1>Hello</h1>'
// })

// assign js variables for all elements
const myform = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

// defining a onSubmit function
onSubmit = (e) => {
    e.preventDefault(); //disable default scripts

    if(nameInput.value === ''|| emailInput.value === '') { //checks for empty fields
        msg.innerHTML = 'Please enter all fields!' //msg appears
        msg.classList.add('error') //msg style gets loaded
        setTimeout(()=>{msg.remove()},3000) // msg timeouts after 3s
    }
    else {
    console.log('success')
    console.log(nameInput.value)
    console.log(emailInput.value)
    const li = document.createElement('li'); //assining new list element to variable li
    li.appendChild(document.createTextNode( // a new text node with name and email is created saved as a child of li element
        `${nameInput.value} : ${emailInput.value}`
    ))
    userList.appendChild(li); // li appends to main ul element

    //clear the fields afterwards
    nameInput.value = ''; 
    emailInput.value = '';

    }

}
myform.addEventListener('submit',onSubmit);