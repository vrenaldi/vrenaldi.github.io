import * as spotifyExplorer from "../assets/images/spotify-explorer.jpg";
import * as transformations from "../assets/images/transformations.jpg";
import * as comingSoon from "../assets/images/comingSoon.jpg";

export default function loadPortfolio():void{
    let projects = document.querySelectorAll(".portfolio-item img");

    projects[0].setAttribute("src", <any>spotifyExplorer);
    projects[1].setAttribute("src", <any>transformations);
    projects[2].setAttribute("src", <any>comingSoon);
}