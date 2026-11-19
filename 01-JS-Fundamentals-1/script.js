// let js = "kgt";
// if (js === "kgt") alert("KGT");

// console.log(8 + 9);

// let num = 17;
// console.log(typeof num);
// console.log(typeof js);
// console.log(typeof true);
// console.log(typeof "kgt");

// // undefined value
// let kgt;
// console.log(typeof kgt);

// console.log(typeof null);

//let is block scoped and var is function scoped.
//but we should avoid using var.
// console.log("my age is " + (2026 - 2006));
// console.log("2 to the power 3 is ", 2 ** 3);
// let x = 10;
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

// let y = 20;
// console.log(x == y);
// y = 10;
// console.log(x >= y);
// console.log(x <= y);

// const val = x >= y;
// console.log(val);

// const name = "KGT";
// const job = "teacher",
//   birth = 2006,
//   year = 2026;
// const str = "I'm " + name + ", a " + (year - birth) + " year old " + job;
// console.log(str);

// //template literals.
// const str1 = `I'm ${name}, a ${year - birth} year old ${job}`;
// console.log(str1);

// const str2 = "hello\ni am krupal\ni am.";
// console.log(str2);

// const age = 18;
// const isold = age >= 18;
// if (isold) {
//   console.log("age is greater than 18, you can drive.");
// } else {
//   console.log("you can't drive");
// }
// const birth = 2006;
// let year = 2026;
// if (year - birth >= 18) {
//   console.log("you are above 18");
// }

//type conversion
// const year = 2026;
// console.log(Number(year) - 2006);
// console.log(Number("KGT"));
// console.log(typeof NaN);
// //type coercion
// console.log("23" - "10" - 3);
// console.log("23" * "2");
// console.log("12" ** 2);

// let n = "1" + 1; //+ leads to convert integer to string. so, ans will be '11'.
// console.log(typeof n);
// n = n - 1; //minus leads to convert string to integer.
// console.log(n);
// console.log(typeof n);

// console.log("10" - "5" - "2" - "1" + "0");

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("KGT"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const m = 10;
// if (m) {
//   console.log("Krupal");
// } else {
//   console.log("Krishna");
// }

// let h = 1000000;
// if (h) {
//   console.log("height has something.");
// } else {
//   console.log("empty h");
// }

// console.log("5" == 5);
// console.log(5 == 5);
// console.log("5" === 5);
// console.log(5 === 5);

// const age = "18";
// if (age == 18)
//   console.log("loose equality operator which perform type coersion");

// if (age === 18)
//   console.log("strict equality operator which doe not perform type coersion.");

// const n = Number(prompt("enter number"));
// console.log(n);
// if (n === 17) {
//   console.log("it is my roll number");
// } else if (n === 8) {
//   console.log("it is my sister's tution roll number.");
// } else if (n === 12) {
//   console.log("it is my sister's school's roll number.");
// } else {
//   console.log("different number.");
// }

// if (n !== 17 && n !== 12 && n !== 8) {
//   console.log("why not 17 or 12 or 8.");
// }

//switch case
// const day = "Saturday";
// switch (day) {
//   case "monday": //day === 'monday'
//     console.log("this is monday");
//     console.log("monday");
//   // break;
//   case "tuesday":
//     console.log("this is tuesday");
//     console.log("tuesday");
//     break;
//   case "wednesday":
//     console.log("this is wednesday");
//     console.log("wednesday");
//     break;
//   case "Thursday":
//     console.log("this is Thursday");
//     console.log("Thursday");
//     break;
//   case "Friday":
//     console.log("this is Friday");
//     console.log("Friday");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("this is saturday or Sunday");
//     console.log("saturday or Sunday");
//     break;
//   default:
//     console.log("no day");
// }

const age = 18;
age >= 18 ? console.log(">=18") : console.log("<18");

const drink = age >= 18 ? "soda" : "water";
console.log(drink);
