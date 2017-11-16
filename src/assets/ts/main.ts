/// <reference path="custom.d.ts"/>

import "../scss/main.scss";
import loadAvatar from "./avatar";
import loadPortfolio from "./portfolio";

let container, links;
let portImage, skillsCore;

function main(): void {
    loadAvatar();
    loadPortfolio();

    loadElements();
    loadListeners();
}

function loadElements(): void {
    container = document.getElementById("container");
    links = document.querySelectorAll("a");
    portImage = document.querySelectorAll(".portfolio-item > img");
    skillsCore = document.getElementById("core");
}

function loadListeners(): void {
    container.addEventListener("click", () => { toggleClass(container, "flipped"); });
    skillsCore.addEventListener("click", () => { toggleClass(skillsCore, "clicked"); });

    links.forEach(element => { stopPropagation(element); });
    portImage.forEach(element => { stopPropagation(element); });
    stopPropagation(skillsCore);
}

function toggleClass(element: any, cssClass: string): void {
    if (!element.classList.contains(cssClass)) {
        element.classList.toggle(cssClass, true);
    } else {
        element.classList.toggle(cssClass, false);
    }
}

function stopPropagation(element: any): void {
    element.addEventListener("click", e => { e.stopPropagation(); });
}

main();

console.log("Hello world!! - vrenaldi");