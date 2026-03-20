"use strict";
const b = {
    button1: document.getElementById("b1"),
    button2: document.getElementById("b2"),
    button3: document.getElementById("b3"),
    button4: document.getElementById("b4"),
    button5: document.getElementById("b5")
};
b.button1.addEventListener("click", (ev) => {
    alert("Hello!");
    alert("This page is just some buttons on an page.");
    alert("Have fun!");
});
b.button2.addEventListener("click", (ev) => {
    window.location.href = "https://mintsite.github.io/eeee.jpeg";
});
b.button3.addEventListener("click", (ev) => {
    window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
});
b.button4.addEventListener("click", (ev) => {
    b.button4.click();
});
b.button5.addEventListener("click", (ev) => {
    alert("BOO!");
});