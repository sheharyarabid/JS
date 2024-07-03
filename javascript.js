// let h = 'hello world';
// let i = h.substring(0,5);
// console.log(i); //hello

// let h = 'hello world';
// let i = h.split();
// console.log(i); // ['Hello World']

// let h = 'Hello World';
// let i = h.toUpperCase().substring(0,5);
// console.log(i); //HELLO

// let h = 'Hello World';
// let i = h.split();
// console.log(typeof(i)) // obj

// let h = 'Hello World';
// let i = h.split(); //splits each!
// console.log(i); 
//[
//   'H', 'e', 'l', 'l',
//   'o', ' ', 'W', 'o',
//   'r', 'l', 'd'
// ]

// let h = 'Hello World';
// let i = h.split(' '); //splits by space!
// console.log(i); //[ 'Hello', 'World' ]


// let t = 'smartphone, tablet, laptop, desktop'
// let s = t.split(','); //splits by comma
// console.log(s); 
// [ 'smartphone', ' tablet', ' laptop', ' desktop' ]

// const tech = [ 'smartphone', ' tablet', ' laptop', ' desktop' ]
// tech.push('SmartTV') // adds to end
// tech.unshift('Electric Cars') //adds to start
// console.log(tech); 
// tech.pop(); //removes one at the end
// console.log(tech);
// console.log(Array.isArray('tech')); false cuz of string

// const obj = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['reading', 'coding', 'gaming'],
//     address: {
//         street: '123 Main St',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(firstName, lastName, age, hobbies, address); //error

// console.log(obj.firstName, obj.lastName, obj.age, obj.hobbies, obj.address); 
//John Doe 30 [ 'reading', 'coding', 'gaming' ] { street: '123 Main St', city: 'Boston', state: 'MA' }

// const {firstName} = obj;
// console.log(firstName) //John

// const {firstName, lastName} = obj;
// console.log(firstName, lastName) //John Doe

// const {firstName, lastName, age, address: {city}} = obj;
// console.log(firstName, lastName, age, city) //John Doe 30 Bsoston

// obj.email = 'johndoe@email.com';
// console.log(obj);
// {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: [ 'reading', 'coding', 'gaming' ],
//     address: { street: '123 Main St', city: 'Boston', state: 'MA' },
//     email: 'johndoe@email.com'
//   }

// const todo = [ {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true
// },
// {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true
// },
// {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false
// }
// ];
// console.log(todo[1].text); //Meeting with boss
// const todoJSON = JSON.stringify(todo);
// console.log(todoJSON); //stringified
// output: [{"id":1,"text":"Take out trash","isCompleted":true},{"id":2,"text":"Meeting with boss","isCompleted":true},{"id":3,"text":"Dentist appt","isCompleted":false}]

// for (let i = 0; i< todo.length; i++) {
//     console.log(todo[i].text);
// }
// Take out trash
// Meeting with boss
// Dentist appt

// let i =0; // init imp for while loop
// while (i < todo.length) { //condition: run until the length of todo array
//     console.log(todo[i].text);
//     i++; //increment imp for while loop
// }
// Take out trash
// Meeting with boss
// Dentist appt


// for of loop
// for (let todos of todo) {
//     console.log(todos);
//     // todos has now all the array of todo
// }

//forEach
// todo.forEach(function(todos) {
//     console.log(todos.text);
// });
// Take out trash
// Meeting with boss
// Dentist appt

// todo.forEach(function(todos) {
    // console.log(todos.isCompleted);
// }); 
// true
// true
// false

//maps func
// const todoText  = todo.map((todos)=>{ return todos.text});
// console.log(todoText);
// [ 'Take out trash', 'Meeting with boss', 'Dentist appt' ]

//filter func
// const Completed = todo.filter((todos)=>{return todos.isCompleted === true});
// console.log(Completed)
// [
//     { id: 1, text: 'Take out trash', isCompleted: true },
//     { id: 2, text: 'Meeting with boss', isCompleted: true }
//   ]


// mixing filter and maps.
// const CompletedTasks = todo.filter((todos)=>{return todos.isCompleted === true }).map((todos)=>{
//     return todos.text
// });
// console.log(CompletedTasks)
// [ 'Take out trash', 'Meeting with boss' ]

//  OOPS with JS
//Constructor Func - DONOT USE ARROW FUNCTIONS AS THEY LACK USE OF this keyword.

// Constructor Func - less memory efficient and ugly! 
// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
    
//     this.getBirthYear = function() {
//         return this.dob.getFullYear()
//     }
//     this.getFullName = function() {
//         return this.firstName + ' ' + this.lastName
//     }
// }


// Constructor Func - More memory efficient and Pretier!
// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

//Makes the method more Memory Efficient and Pretier!
// Person.prototype.getBirthYear = () => {
//     return this.dob.getFullYear();
//   };

// Person.prototype.getFullName = () => {
//     return this.firstName + ' ' + this.lastName;
// };
  

// Instantiate Obj
// const person1 = new Person ('John','Doe','4-3-1980')
// const person2 = new Person ('John','Bradshaw', '5-2-1978');

// console.log(person1);
// Person { firstName: 'John', lastName: 'Doe', dob: '4-3-1980' }\
// console.log(person2);
// Person { firstName: 'John', lastName: 'Bradshaw', dob: '5-2-1978' }
// console.log(person2.dob.getFullYear());  // 1978
// make sure that date of birth is intialized as a new Date!! otherwise wont work
// console.log(person1.getBirthYear()); //1980
// console.log(person1.getFullName()); //John Doe
// console.log(person2.getFullName()); //John Bradshaw


// Class

// class Person {
//     constructor (firstName, lastName, dob) {
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName()  {
//         return this.firstName + ' ' + this.lastName;
//     }

// }
// // creating objects for the class
// const person1 = new Person ('John','Doe','4-3-1980')
// const person2 = new Person ('John','Bradshaw', '5-2-1978');
// const person3 = new Person('Jane', 'Smith', '10-15-1990');

// console.log(person3.getFullName()); // Jane Smith
// console.log(person3.getBirthYear()); // 1990

