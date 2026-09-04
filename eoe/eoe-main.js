const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

var cbuttons = document.querySelectorAll(".c-button input");
cbuttons.forEach((element) => {
    element.addEventListener("click", () => {
        currcheck = parseInt(element.value);
        spinto(element.value * -24);
    })
});

// 3D STUFF

var carousel = document.querySelector(".carousel-3d");
var currdeg = 0;
var currcheck = 0;

rightArrow.addEventListener("click", () => {
    rotate("n");
    changecheck(currcheck + 1);
});

leftArrow.addEventListener("click", () => {
    rotate("p");
    changecheck(currcheck - 1);
});

carousel.addEventListener("transitionend", (e) => {
    // fire when transform finishes
    carousel.classList.remove("can-rotate");
    if (e.propertyName == "transform") {
        // check if need to reset to 0
        if (currdeg >= 360 || currdeg <= -360) {
            currdeg = currdeg % 360;
            carousel.style.transform = `translateZ(-640px) rotateY(${currdeg}deg)`;
        }
    }
});

function changecheck(e) {
    currcheck = e;
    if (currcheck == 15) {
        currcheck = 0;
    } else if (currcheck == -1) {
        currcheck = 14;
    }

    cbuttons[currcheck].checked = true;
}

function rotate(e) {
    carousel.classList.add("can-rotate");
    if (e == "n") {
        currdeg = currdeg - 24;
    } else if (e == "p") {
        currdeg = currdeg + 24;
    }
    carousel.style.transform = `translateZ(-640px) rotateY(${currdeg}deg)`;
}

function spinto(to) {
    // get index of current location
    var from = currdeg;
    var delta = ((((to - from) % 360) + 540) % 360) - 180;

    currdeg = from + delta;

    carousel.classList.add("can-rotate");
    carousel.style.transform = `translateZ(-640px) rotateY(${currdeg}deg)`;
}

// fade in thing

document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelector("main").classList.remove("loading");
    document.querySelector("footer").classList.remove("loading");
});
