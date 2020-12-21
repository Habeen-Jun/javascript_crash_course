console.log('hello');
// alert('hello this is habeen');

//Variables 
var b = 'smoothie';
console.log(b);

var someNum = 45;
console.log(someNum);


// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;


// Numbers in JavaScript
var num1 = 5.6;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;

console.log(num1);

// Divide, mutiply *, remainder %
console.log(num1 / 6);

// Increment/Decrement by any number you want 
num1 += 20;
console.log(num1);

// Functions 
// Create
function func() {
    alert('this is a function');
}
// Call
// func();

/* Let's create a function that take in a name 
and says hello followed by your name
*/


function greeting(name) {
    var result = 'Hello ' + name;
    console.log(result);
}

// var name = prompt('what is your name?')
// greeting(name)

// argument in function

function sumNumbers(a, b) {
    var result = a + b
    console.log(result)
}


sumNumbers(3,'6'); //36, not error


//  while loops

var num = 0;

while (num < 100) {
    num+=1;
    console.log(num)
}


// For loop

for (let num = 0; num <= 100; num++) {
    console.log(num);
}

// Data Types
let yourAge = 18; // number
let yourNmae = 'Bob'; // string
let name = {first: 'Jane', last: 'Doe'}; // object
let truth = false; //boolean
let groceries = ['apple','banana','oranges']; // array
let random; //undefined
let nothing = null; //value nuil


// String in Javascript (common methods)

let fruit = 'banana';
let moreFruits = 'banana\napple';

console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan')); // 2
console.log(fruit.slice(2,6)); // nana
console.log(fruit.replace('ban','123')) // 123ana
console.log(fruit.toLowerCase(fruit)); //banana
console.log(fruit.toUpperCase(fruit)); // BANANA
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));


// Array
let fruits = ['banana','apple','orange','pineapples'];
fruits = new Array('banana','apple','orange','pineapples');


alert(fruits[2]) // access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}


// array common methods
console.log('to String', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits, fruits.pop(), fruits); // remove last item
console.log(fruits, fruits.push('blackberries'), fruits); // appends 
fruits[4] = 'mew fruit'
console.log(fruits);
fruits.shift(); // remove first element from a list
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits)

let vegetables = ['asparagus','tomato','brocolli'];
let allGroceries = fruits.concat(vegetables); // array concatenation
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());


let someNumbers = [5, 10, 2 , 23, 3, 255, 1, 2, 5, 334, 3211, 3];
console.log(someNumbers.sort(function(a, b) {return a-b})); // sorted in ascending order
console.log(someNumbers.sort(function(a, b) {return a+b})); // sorted in descending order


let emptyArray = new Array();

for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}

console.log(emptyArray);


// Objects in JavaScript
// dictionaries in Python

let student = {
    first:'Rafeh',
    last: 'Qazi',
    age:25,
    height:170,
    StudentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

console.log(student.first);
// student.first = 'notRafeh'; // change value
console.log(student.first);
console.log(student.StudentInfo());


// Conditionals, Control flows (if else)
// 18 -35 is my target demographic
// && AND
// || OR
var age = 45;

if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status)
} else {
    status = 'not my audience';
    console.log(status)
}


// Switch Statements
// differentiate b/w weekday vs. weekend
// day 0 -->  Sunday
// day 6 --> Saturday --> 
// day 4 --> Thursday --> weekday

switch (6) {
    case 0:
        text = 'Weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday'
}


console.log(text)

