console.log("Script is running");

// // Converts the width and height of the window from 100vw and 100vh to pixels.
// var element = document.querySelector(".all");
// var width = element.clientWidth;
// var height = element.clientHeight;
// element.style.width = width + "px";
// element.style.height = height + "px";

// console.log(width + ", " + height);

function toggleSidebar() {
    var element = document.querySelector(".sidebar");
    element.classList.toggle("show");
    element.classList.toggle("sidebar_anim");
}

function toggleOverlay() {
    var element = document.querySelector(".overlay");
    element.classList.toggle("show");
    element.classList.toggle("overlay_anim");
}