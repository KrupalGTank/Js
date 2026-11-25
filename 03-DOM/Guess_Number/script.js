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

let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = "?";
let score = 20;
let highscore = 0;
document.querySelector(".highscore").textContent = highscore;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  let v = Number(document.querySelector(".guess").value);
  if (!v) {
    document.querySelector(".message").textContent =
      "Enter the value first\n and then submit😡";
  } else if (v === number) {
    //win
    document.querySelector(".message").textContent = "well played.\You Win👑😉";
    document.querySelector(".number").textContent = number;
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (v > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High😁";
    } else {
      document.querySelector(".message").textContent = "you loose the game.";
    }
    score--;
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low😁";
    } else {
      document.querySelector(".message").textContent = "you loose the game.";
    }
    score--;
  }
  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start Guessing...";
});
