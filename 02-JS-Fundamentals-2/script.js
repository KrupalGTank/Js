"use strict"; //for using strict mode in javascript to avoid any bugs.

// let hasDriverLicense = false;
// let passTest = true;
// if (passTest) hasDriverLicense = true;

// if (hasDriverLicense) console.log("i can drive :D");

// function greet() {
//   console.log("Jay shree Krishna");
// }

// greet();
// greet("jsk");

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// let ans = fruitProcessor(5, 4);
// console.log(ans);

//this function is an expression.
// fun();
// const calage = function (birth) {
//   return 2026 - birth;
// };

// function fun() {
//   console.log("hello");
// }

// console.log(calage(2006));
// console.log(calage);

//arrow function
// const age = (birth) => 2026 - birth;
// console.log(age(2006));

// const yearuntilretirement = (birth) => {
//   const age = 2026 - birth;
//   const retire = 65 - age;
//   return retire;
// };

// console.log(yearuntilretirement(2006));

// const name = (first, last) => {
//   return `full name is :  ${first} ${last}`;
// };

// console.log(name("krupal", "tank"));

//function calling other function
// function cut(fruit) {
//   console.log(`cutting ${fruit}.`);
// }

// function process(apples, oranges) {
//   cut("apples");
//   cut("oranges");
//   return `juice made from ${apples} apples and ${oranges} oranges.`;
// }

// console.log(process(10, 15));

// let a1 = (p1, p2, p3) => {
//   return `this is arrow function with 3 parameters : ${p1}, ${p2}, ${p3}`;
// };

// console.log(a1(1, 2, 3));

//all 3 functions together
// function fun1(p) {
//   return p * 10;
// }

// let fun2 = function (p) {
//   return p * 10;
// };

// let fun3 = (p) => {
//   return p * 10;
// };

// console.log(fun1(10), fun2(20), fun3(30));

//arrays
// const friends = ["krishna", "adhya", "shivam", "dishant"];
// console.log(friends);
// console.log(typeof friends);

// const a = new Array(2006, 2003, 2017, 2026);
// console.log(typeof a, a);

// console.log(a[0]);
// console.log(friends[1]);
// console.log(friends.length);

// friends[2] = "toral";
// console.log(friends);
// let arr = [1, 2, 3];
// console.log(arr);
// arr = [2, 2, 2];
// console.log(arr);

// const name1 = "KGT";
// let arr1 = [17, "Krupal", 9.7, name1];
// console.log(arr1);

// const arr = ["krupal", "krishna", "shivam"];

// //add elements
// const len = arr.push("Adhya");
// console.log(len);

// arr.unshift("Dishant");
// console.log(arr);

// //remove elements
// let removedElement = arr.pop();
// console.log(arr, removedElement);

// arr.shift();
// console.log(arr);

// //know index of element
// console.log(arr.indexOf("krupal"));
// console.log(arr.indexOf("Dishant"));

// //includes check wether element present in array or not using strict equality.
// console.log(arr.includes("krupal"), arr.includes("Dishant"));

const johnarray = [
  "john",
  "hemswarth",
  2026 - 1998,
  "professor",
  ["nick", "jenet", "remon"],
];

//object literal syntax.
const john = {
  name: "john",
  surname: "hemswarth",
  age: 2026 - 1998,
  profession: "Professor",
  friends: ["nick", "jenet", "remon"],
};

//john is object and it has 5 properties.
console.log(johnarray);
console.log(john);
console.log(john.friends);
