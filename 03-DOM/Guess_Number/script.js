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

let displayMessage = (msg) => {
  document.querySelector(".message").textContent = msg;
};

document.querySelector(".check").addEventListener("click", function () {
  let v = Number(document.querySelector(".guess").value);
  if (!v) {
    displayMessage("Enter the value first\n and then submit😡");
  } else if (v === number) {
    //win
    displayMessage("well played.\You Win👑😉");
    document.querySelector(".number").textContent = number;
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //css
    document.querySelector("body").style.backgroundColor = "#60b343";
    document.querySelector(".number").style.width = "30rem";
  } else if (v !== number) {
    if (score > 1) {
      displayMessage(v > number ? "Too High😁" : "Too Low😁");
    } else {
      displayMessage("you loose the game.");
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
  displayMessage("Start Guessing...");

  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
