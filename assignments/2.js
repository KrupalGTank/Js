// function describeCountry(c, p, cap) {
//   return `${c} has ${p} million population and its capital city is ${cap}`;
// }

// let s1 = describeCountry("india", 150, "delhi");
// let s2 = describeCountry("america", 60, "new york");

//;
//  console.log(s1, s2);

// function percentageOfWorld1(p) {
//   let t = 7900;
//   return (p / t) * 100;
// }
// console.log(percentageOfWorld1(150));

// let percentageOfWorld2 = function (p) {
//   let t = 7900;
//   return (p / t) * 100;
// };

// console.log(percentageOfWorld2(150));

// let percentageOfWorld3 = (p) => {
//   let t = 7900;
//   return (p / t) * 100;
// };
// // console.log(percentageOfWorld3(150));

// function describePopulation(c, p) {
//   console.log(
//     `the country ${c} has ${p} million population which is ${percentageOfWorld3(p)}% of the world's population.`,
//   );
// }

// describePopulation("Bharat", 150);

//array
// let arr = [150, 33, 75, 120];
// console.log(arr);
// console.log(arr.length === 4);
// let percent = (p) => {
//   return p / 79;
// };

// let arr2 = [percent(arr[0]), percent(arr[1]), percent(arr[2]), percent(arr[3])];
// console.log(arr2);

let countries = [
  "lanka",
  "bhutan",
  "nepal",
  "pakistan",
  "afghanistan",
  "myanmar",
  "china",
];
console.log(countries);
countries.push("utopia");
console.log(countries);
countries.pop();
console.log(countries);
if (countries.includes("germany") === false) {
  console.log("country is not an europian country.");
}

countries[countries.indexOf("lanka")] = "shree lanka";
console.log(countries);
