console.log("Script is running");

// Converts the width and height of the window from 100vw and 100vh to pixels.
var element = document.querySelector(".all");
var width = element.clientWidth;
var height = element.clientHeight;
element.style.width = width + "px";
element.style.height = height + "px";

console.log(width + ", " + height);
