function describeCountry(c, p, cap) {
  return `${c} has ${p} million population and its capital city is ${cap}`;
}

let s1 = describeCountry("india", 150, "delhi");
let s2 = describeCountry("america", 60, "new york");

console.log(s1, s2);
