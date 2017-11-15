/// <reference path="custom.d.ts"/>

import "../scss/main.scss";
import loadAvatar from "./avatar";
import { initSkills, animateSkills, clearSVG, clearSkills } from "./skills";
import loadPortfolio from "./portfolio";

let container, links;
export let orientation: string;

function main(): void {
    loadAvatar();
    loadPortfolio();

    loadElements();
    loadListeners();

    initSkills();
}

function loadElements(): void {
    container = document.getElementById("container");
    links = document.querySelectorAll("a");

    if (window.innerWidth > window.innerHeight) { orientation = "landscape"; }
    else { orientation = "portrait"; }
}

function loadListeners(): void {
    window.addEventListener("resize", winResize);
    container.addEventListener("click", conClicked);
    links.forEach(element => {
        element.addEventListener("click", e => { e.stopPropagation(); });
    });
}

function winResize(): void {
    if (window.innerWidth > window.innerHeight && orientation != "landscape") {
        orientation = "landscape";
        reloadSkills();
    }
    else if (window.innerWidth < window.innerHeight && orientation != "portrait") {
        orientation = "portrait";
        reloadSkills();
    }
}

function conClicked(): void {
    if (!container.classList.contains("flipped")) {
        container.classList.toggle("flipped", true);
        animateSkills();
    } else {
        container.classList.toggle("flipped", false);
        clearSkills();
    }
}

function reloadSkills(): void {
    clearSVG();
    initSkills();
    animateSkills();
}

main();

console.log("Hello world!! - vrenaldi");