//1
// let country = "India";
// let continent = "Asia",
//   population = "150 carore";
// console.log(country + " " + continent + " " + population);

//2
// let isisland = false;
// console.log(typeof isisland);
// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);

//3
// let language = "gujarati";
// const mothertoungue = "gujarati";
// mothertoungue = "hindi";

//4
// population = 1500000000;
// console.log("half population is : ", population / 2);

// population++;
// console.log(population);

// let finland = 6000000;
// console.log(population >= finland);

// let avg = 33000000;
// console.log(population <= avg);

// let str = "Portugal is in Europe, and its 11 million people speak portuguese";
// console.log(str);

//5
// const str1 = `india is in asia and its ${population} population speaks ${language} language`;
// console.log(str1);

//6
// let num = 33000000;
// if (population > num) {
//   console.log(`india's population is ${(population - num) / 2} above average.`);
// }

//7
// console.log("9" - "5"); // -> ?
// console.log("19" - "13" + "17"); // -> ?
// console.log("19" - "13" + 17); // -> ?
// console.log("123" < 57); // -> ?
// console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ?

//8
// let n = prompt("enter number of neighbour countries.");
// if (n == 1) {
//   console.log("there is 1 neighbour country");
// } else if (n > 1) {
//   console.log("there is more than 1 neighbour countries.");
// } else {
//   console.log("country has no neighbour.");
// }

//9
let l = "english",
  isisland = false,
  p = 80000000;

if (l === "english" && isisland === false && p < 50000000) {
  console.log("india is best fit for you!");
} else {
  console.log("you should look for country other than india.");
}
