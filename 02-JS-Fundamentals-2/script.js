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
function cut(fruit) {
  console.log(`cutting ${fruit}.`);
}

function process(apples, oranges) {
  cut("apples");
  cut("oranges");
  return `juice made from ${apples} apples and ${oranges} oranges.`;
}

console.log(process(10, 15));
