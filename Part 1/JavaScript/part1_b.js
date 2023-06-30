'use strict';


//Variable --> const , let or var always use let and const 
const x =1 ;
let y = 5 ;

console.log(x,y);
y += 10 ;
console.log(x,y);
y = 'Sometext'
console.log(x,y);
// x=4; //error

var i=999999;

(function(){
    for( var i=0 ; i<10 ;i++){
    console.log(i);
}}
)
console.log(`After loop : ${i}`);

i = 34
for(let i =0; i<4; i++){
 console.log(i)
}
console.log(i)


//Arrays

const t = [1,-1,3]
t.push(5)
console.log(t.length);
console.log(t[1]);

t.forEach(value => {
    console.log(value);
})

//in React it is preffered to use concat

const t1 = [1, -1, 3]
const t2 = t1.concat(7);
console.log(t2);

//map method in array
const m1 = t2.map(value => value*2)
console.log(m1);


const m2 = t.map(value => '<li>' + value + '<li>')
console.log(m2);


//array destructurig

const a = [5,242,323,,1,23];

const [first , second , ...rest ] =a

console.log(a);
console.log(first);
console.log(second);
console.log(rest);



//objects

const object1 = {
    name : 'Rajneesh',
    age : 35 ,
    eductation : 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }

  //dot and bracket opertaor
  console.log(object1.name);
  console.log(object1['eductation']);

  const fieldName = 'age'
  console.log(object1[fieldName]);

  //adding properties to object

  object1.address = 'New delhi'
  object1['District'] = 'South west'
  object1['Area Phase'] = 1;
  console.log(object1);


  //functions 

  const sum = (p1 ,p2)=>{
    console.log(p1);
    console.log(p2);
    return p1+p2
  }

  const result = sum(1,5)
  console.log(result);

  const square = p => {
    console.log(p);
    return p*p
  }

  const square_2 = p => p*p

  const t3 = [1,4,3]
  const t3Squared = t3.map(p => p*p)
  console.log(t3Squared);

  //function declaration.
  function product(a, b) {
    return a * b
  }
  
  const result2 = product(2, 6)
  console.log(result2);
  // result2 is now 12

//   function expression. 

const average = function(a, b) {
    return (a + b) / 2
  }
  
  const result3 = average(2, 5)
  console.log(result3);
  // result3 is now 3.5


//this keyword

const raj = {
  name : 'Rajneesh Singh',
  age : 35 ,
  eductation : "UG",

  greet : function(){
    console.log(this); //object itself
    console.log(`Hello , my name is ${this.name}`);
  }
  ,
  doAdd : function(a,b){
    console.log(a+b);
  }
}

raj.greet();

//Methods can be assigned to objects even after the creation of the object:

raj.growOlder = function() { 
  console.log(this); 
  this.age +=1;
}

console.log(raj.age);
raj.growOlder();
console.log(raj.age);

raj.doAdd(5,2);

const referenceToAddition = raj.doAdd;
referenceToAddition(10,15);

raj.greet();

// const referenceToGreet = raj.greet
// referenceToGreet() //undefined


setTimeout(raj.greet , 1000) //this refers to the global object.

// There are several mechanisms by which the original this can be preserved. One of these is using a method called bind:


setTimeout(raj.greet.bind(raj),1000)//this is bound to point to raj object,






//this in the global context
// Try to run in terminal using --> node filename.js
// console.log(this === window);
// console.log(this === global); // false 
// console.log(this === module.exports); //true


//this in function call --> depends on function call

function func(){
  // "use strict";
  // console.log(this === undefined);
  // console.log(this === window); //false --> in strict mode ; true --> without strict mode

}

func();

//using strict mode above

function Person(firstName , lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// const p1 = Person("Raj" ,"Singh");

//correct method using constructor call "new" keyword
const p2 = new Person("Raj" ,"Singh");
console.log(p2);


// console.log(p1); //error :  Cannot set properties of undefined (setting 'firstName') and  // undefinded without strict mode

//Try to run in terminal without strict mode 
// console.log(global.firstName); //Raj
// console.log(global.lastName); //Singh

//Try to run in terminal with strict mode 
// console.log(global.firstName); //undefined
// console.log(global.lastName); //undefined




//CLASSES IN JS

class Employee{
  constructor(name , age){
    this.name = name
    this.age = age
  }

  greet(){
    console.log(this);
    console.log(`Hello , Good morning ${this.name}`);
  }
}

const emp1 = new Employee("Rajneesh" , 29)

emp1.greet()

const emp2 = new Employee('Yashwant' , 14)

emp2.greet()


