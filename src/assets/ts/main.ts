/// <reference path="custom.d.ts"/>

import "../scss/main.scss";
import loadAvatar from "./avatar";
import { initSkills, loadSkills, clearSkills } from "./skills";
import loadPortfolio from "./portfolio";

let container;

function main(): void {
    loadAvatar();
    loadPortfolio();
    initSkills();

    loadElements();
    loadListeners();
}

function loadElements(): void {
    container = document.getElementById("container");
}

function loadListeners(): void {
    container.addEventListener("click", conClicked);
}

function conClicked(): void {
    if (!container.classList.contains("flipped")) {
        container.classList.toggle("flipped", true);
        loadSkills();
    } else {
        container.classList.toggle("flipped", false);
        clearSkills();
    }
}

main();

console.log("Hello world!! - vrenaldi");