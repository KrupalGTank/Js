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
const year = 2026;
console.log(Number(year) - 2006);
console.log(Number("KGT"));
console.log(typeof NaN);
//type coercion
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("12" ** 2);

let n = "1" + 1; //+ leads to convert integer to string. so, ans will be '11'.
console.log(typeof n);
n = n - 1; //minus leads to convert string to integer.
console.log(n);
console.log(typeof n);

console.log("10" - "5" - "2" - "1" + "0");
