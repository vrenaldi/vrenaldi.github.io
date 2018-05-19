/// <reference path="custom.d.ts"/>

import "../scss/main.scss";
import loadAvatar from "./avatar";
import loadPortfolio from "./portfolio";

let html;
let container, links;
let avatar, portImage, skillsCore;
let containerStyle;

function main(): void {
    loadAvatar();
    loadPortfolio();

    loadElements();
    loadListeners();

    loadStyles();
}

function loadElements(): void {
    html = document.querySelector("html");

    container = document.getElementById("container");
    links = document.querySelectorAll("a");

    avatar = document.getElementById("avatar");
    portImage = document.querySelectorAll(".portfolio-item > img");
    skillsCore = document.getElementById("core");
}

function loadListeners(): void {
    container.addEventListener("click", conClicked);

    container.addEventListener("click", () => { toggleClass(container, "flipped"); });
    skillsCore.addEventListener("click", () => { toggleClass(skillsCore, "clicked"); });

    links.forEach(element => { stopPropagation(element); });
    portImage.forEach(element => { stopPropagation(element); });
    stopPropagation(skillsCore);

    window.addEventListener("load", setupFont);
    window.addEventListener("resize", setupFont);
}

function loadStyles(): void {
    containerStyle = window.getComputedStyle(container);
}

function conClicked(): void {
    if (avatar.classList.contains("tooltip")) {
        window.setTimeout(() => { avatar.classList.remove("tooltip"); }, 750);
    }
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

function setupFont() {
    let containerWidth: string = containerStyle.getPropertyValue("width").split("px")[0];

    if (window.matchMedia("(orientation: portrait)").matches) { html.style.fontSize = `${(0.05 * +containerWidth)}px`; }
    if (window.matchMedia("(orientation: landscape)").matches) { html.style.fontSize = `${(0.03 * +containerWidth)}px`; }
}

main();