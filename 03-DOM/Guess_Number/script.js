"use strict";
// let str = document.querySelector(".message").textContent;
// console.log(str);
// document.querySelector(".message").textContent = "Hello";
// document.querySelector(".message").textContent = str;

// document.querySelector(".number").textContent = 20;

// let v = document.querySelector(".guess").value;
// console.log(v);
// document.querySelector(".guess").value = 17;
// v = document.querySelector(".guess").value;
// console.log(v);

document.querySelector(".check").addEventListener("click", function () {
  let v = document.querySelector(".guess").value;
  if (!v) {
    document.querySelector(".message").textContent =
      "Enter the value first\n and then submit😡";
  } else {
    document.querySelector(".message").textContent = "well played.";
    console.log(v);
  }
});
