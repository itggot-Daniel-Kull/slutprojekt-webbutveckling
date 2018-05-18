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
    
    if(element.classList.contains("show")) {
        element = document.getElementById("0");
        element.onclick = toggleSidebar;
    } else {
        element = document.getElementById("0");
        element.onclick = function () {
        };
    }
}

function toggleOverlay() {
    var element = document.querySelector(".overlay");
    element.classList.toggle("show");
    element.classList.toggle("overlay_anim");
}

function toggleCreatorText(theClass) {
    var element = document.querySelector(".t_show_more");
    element.classList.toggle("display");
    element = document.querySelector(".t_long_p");
    element.classList.toggle("show");
    element = document.querySelector(".t_mininote");
    element.classList.toggle(theClass);
}