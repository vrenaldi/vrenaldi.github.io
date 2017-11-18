import * as transformations from "../images/transformations.jpg";
import * as comingSoon from "../images/comingSoon.jpg";

export default function loadPortfolio():void{
    let projects = document.querySelectorAll(".portfolio-item img");

    projects[0].setAttribute("src", <any>transformations);
    projects[1].setAttribute("src", <any>comingSoon);
    projects[2].setAttribute("src", <any>comingSoon);
}