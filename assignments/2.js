// function describeCountry(c, p, cap) {
//   return `${c} has ${p} million population and its capital city is ${cap}`;
// }

// let s1 = describeCountry("india", 150, "delhi");
// let s2 = describeCountry("america", 60, "new york");

//;
//  console.log(s1, s2);

function percentageOfWorld1(p) {
  let t = 7900;
  return (p / t) * 100;
}
console.log(percentageOfWorld1(150));

let percentageOfWorld2 = function (p) {
  let t = 7900;
  return (p / t) * 100;
};

console.log(percentageOfWorld2(150));
