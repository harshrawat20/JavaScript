// Array

const myArr=[0,1,2,3,4,5]

const myArr2= new Array(1,2,3,4);
// console.log(myArr[1]);

// Array methods
// myArr.push(2);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9); // adds 9 at the starting of array
// myArr.shift(); //removes element from starting of array
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr=myArr.join('-')
// console.log(myArr);
// console.log(newArr);


// slice,splice

// console.log("A ",myArr);
const my1=myArr.slice(1,3)//original array not affected and new array contains from 0 to 2

// console.log(my1);

// console.log("B ",myArr)
const my2=myArr.splice(1,3)//original changed and new array contains element including both indexes
// console.log(my2);
// console.log("C ",myArr)

console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh"));
console.log(Array.from({name:"Harsh"}));//interesting can't make directly 
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
