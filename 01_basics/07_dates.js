// Dates

let  myDate=new Date()
// console.log(myDate);//2024-01-03T12:20:03.169Z
// console.log(myDate.toString()); // Wed Jan 03 2024 12:20:03 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Wed Jan 03 2024
// console.log(myDate.toLocaleString());//1/3/2024, 12:20:03 PM
// console.log(typeof myDate);

// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,5,3)
let myCreatedDate=new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
