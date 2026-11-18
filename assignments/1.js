//1
let country = "India";
let continent = "Asia",
  population = "150 carore";
console.log(country + " " + continent + " " + population);

//2
let isisland = false;
console.log(typeof isisland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

//3
let language = "gujarati";
const mothertoungue = "gujarati";
// mothertoungue = "hindi";

//4
population = 1500000000;
console.log("half population is : ", population / 2);

population++;
console.log(population);

let finland = 6000000;
console.log(population >= finland);

let avg = 33000000;
console.log(population <= avg);

let str = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(str);

//5
const str1 = `india is in asia and its ${population} population speaks ${language} language`;
console.log(str1);

//6
let num = 33000000;
if (population > num) {
  console.log(`india's population is ${(population - num) / 2} above average.`);
}
