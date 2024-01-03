const name ='harsh'
const repoCount=20;

// console.log(name+repoCount+" Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('harshhr')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('r'));

const newString=gameName.substring(-5,4); //doesn't accept negative values turn it 0
// console.log(gameName);
// console.log(newString);

const anotherString=gameName.slice(-5,-1)// (-)neg values represent from back
// console.log(anotherString);

const newStringOne="    hitesh  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url="https://harshrawat20/harsh%20rawat"

// console.log(url.replace('%20','-'));
// console.log(url.includes('pichai'));
console.log(url.split('/'));
