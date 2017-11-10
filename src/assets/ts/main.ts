/// <reference path="custom.d.ts"/>

import "../scss/main.scss";
import loadAvatar from "./avatar";

let container;

function main(): void {
    loadAvatar();

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
    } else {
        container.classList.toggle("flipped", false);
    }
}

main();

console.log("Hello world!! - vrenaldi");