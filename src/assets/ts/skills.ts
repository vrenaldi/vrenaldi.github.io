import * as Snap from "snapsvg/dist/snap.svg-min.js";
import { orientation } from "./main";

interface Drawing { class: string; snapObj: any; startX: number; startY: number; }
interface SnapRect extends Drawing { width: number; height: number; borderRadius: number; strength: number; }
interface SnapCircle extends Drawing { radius: number; }
interface SnapArc extends Drawing { radius: number; rotationX: number; largeArc: number; sweep: number; endX: number; endY: number; strength: number; }
interface SnapText extends Drawing { text: string; }

let skillsItems: string[] = ["html", "css", "ts"];
let skillsContainer: { html: SnapCircle | SnapRect, css: SnapCircle | SnapRect, ts: SnapCircle | SnapRect };
let skills: { html: SnapArc | SnapRect, css: SnapArc | SnapRect, ts: SnapArc | SnapRect };
let skillsInfo: { html: SnapText, css: SnapText, ts: SnapText };
let skillsTitle: { html: SnapText, css: SnapText, ts: SnapText };

let svg;

export function initSkills(): void {
    if (orientation == "landscape") {
        svg = Snap("#skills svg").attr({ viewBox: "0 0 100 50" });

        skills = {
            html: { class: "skills-chart", snapObj: {}, startX: 17, startY: 7, radius: 13, rotationX: 0, largeArc: 1, sweep: 1, endX: 17, endY: 7, strength: 0.8 },
            css: { class: "skills-chart", snapObj: {}, startX: 83, startY: 7, radius: 13, rotationX: 0, largeArc: 1, sweep: 1, endX: 50, endY: 7, strength: 0.8 },
            ts: { class: "skills-chart", snapObj: {}, startX: 50, startY: 7, radius: 13, rotationX: 0, largeArc: 1, sweep: 1, endX: 83, endY: 7, strength: 0.75 }
        };

        if (isSnapArc(skills.html) && isSnapArc(skills.css) && isSnapArc(skills.ts)) {
            skillsContainer = {
                html: { class: "skills-chart-container", snapObj: {}, startX: skills.html.startX, startY: (skills.html.startY + skills.html.radius), radius: skills.html.radius },
                css: { class: "skills-chart-container", snapObj: {}, startX: skills.css.startX, startY: (skills.css.startY + skills.css.radius), radius: skills.css.radius },
                ts: { class: "skills-chart-container", snapObj: {}, startX: skills.ts.startX, startY: (skills.ts.startY + skills.ts.radius), radius: skills.ts.radius },
            };
            skillsInfo = {
                html: { class: "skills-info", snapObj: {}, startX: skills.html.startX, startY: (skills.html.startY + skills.html.radius), text: "80" },
                css: { class: "skills-info", snapObj: {}, startX: skills.css.startX, startY: (skills.css.startY + skills.css.radius), text: "80" },
                ts: { class: "skills-info", snapObj: {}, startX: skills.ts.startX, startY: (skills.ts.startY + skills.ts.radius), text: "75" }
            };
            skillsTitle = {
                html: { class: "skills-title", snapObj: {}, startX: skills.html.startX, startY: ((skills.html.startY + skills.html.radius) * 2), text: "HTML5" },
                css: { class: "skills-title", snapObj: {}, startX: skills.css.startX, startY: ((skills.css.startY + skills.css.radius) * 2), text: "CSS3" },
                ts: { class: "skills-title", snapObj: {}, startX: skills.ts.startX, startY: ((skills.ts.startY + skills.ts.radius) * 2), text: "TypeScript" }
            }
        }

        skillsItems.forEach(element => {
            skillsContainer[element].snapObj = svg.circle(skills[element].startX, (skills[element].startY + skills[element].radius), skills[element].radius).attr({ class: "skills-chart-container" });

            skillsTitle[element].snapObj = svg.text(skillsTitle[element].startX, skillsTitle[element].startY, skillsTitle[element].text).attr({ class: skillsTitle[element].class });
            skillsTitle[element].snapObj.attr({ x: skillsTitle[element].startX - (skillsTitle[element].snapObj.getBBox().width / 2), y: skillsTitle[element].startY + (skillsTitle[element].snapObj.getBBox().height / 4) });
        });
    } else {
        svg = Snap("#skills svg").attr({ viewBox: "0 0 100 50" });

        skills = {
            html: { class: "skills-chart", snapObj: {}, startX: 17, startY: 7, radius: 13, rotationX: 0, largeArc: 1, sweep: 1, endX: 17, endY: 7, strength: 0.8 },
            css: { class: "skills-chart", snapObj: {}, startX: 83, startY: 7, radius: 13, rotationX: 0, largeArc: 1, sweep: 1, endX: 50, endY: 7, strength: 0.8 },
            ts: { class: "skills-chart", snapObj: {}, startX: 50, startY: 7, radius: 13, rotationX: 0, largeArc: 1, sweep: 1, endX: 83, endY: 7, strength: 0.75 }
        };

        if (isSnapArc(skills.html) && isSnapArc(skills.css) && isSnapArc(skills.ts)) {
            skillsContainer = {
                html: { class: "skills-chart-container", snapObj: {}, startX: skills.html.startX, startY: (skills.html.startY + skills.html.radius), radius: skills.html.radius },
                css: { class: "skills-chart-container", snapObj: {}, startX: skills.css.startX, startY: (skills.css.startY + skills.css.radius), radius: skills.css.radius },
                ts: { class: "skills-chart-container", snapObj: {}, startX: skills.ts.startX, startY: (skills.ts.startY + skills.ts.radius), radius: skills.ts.radius },
            };
            skillsInfo = {
                html: { class: "skills-info", snapObj: {}, startX: skills.html.startX, startY: (skills.html.startY + skills.html.radius), text: "80" },
                css: { class: "skills-info", snapObj: {}, startX: skills.css.startX, startY: (skills.css.startY + skills.css.radius), text: "80" },
                ts: { class: "skills-info", snapObj: {}, startX: skills.ts.startX, startY: (skills.ts.startY + skills.ts.radius), text: "75" }
            };
            skillsTitle = {
                html: { class: "skills-title", snapObj: {}, startX: skills.html.startX, startY: ((skills.html.startY + skills.html.radius) * 2), text: "HTML5" },
                css: { class: "skills-title", snapObj: {}, startX: skills.css.startX, startY: ((skills.css.startY + skills.css.radius) * 2), text: "CSS3" },
                ts: { class: "skills-title", snapObj: {}, startX: skills.ts.startX, startY: ((skills.ts.startY + skills.ts.radius) * 2), text: "TypeScript" }
            }
        }

        skillsItems.forEach(element => {
            skillsContainer[element].snapObj = svg.circle(skills[element].startX, (skills[element].startY + skills[element].radius), skills[element].radius).attr({ class: "skills-chart-container" });

            skillsTitle[element].snapObj = svg.text(skillsTitle[element].startX, skillsTitle[element].startY, skillsTitle[element].text).attr({ class: skillsTitle[element].class });
            skillsTitle[element].snapObj.attr({ x: skillsTitle[element].startX - (skillsTitle[element].snapObj.getBBox().width / 2), y: skillsTitle[element].startY + (skillsTitle[element].snapObj.getBBox().height / 4) });
        });
    }
}

export function animateSkills(): void {
    if (orientation == "landscape") {
        skillsItems.forEach(element => {
            Snap.animate(0, skills[element].strength, function (val): void {
                if (skills[element].snapObj.hasOwnProperty("id")) {
                    skills[element].snapObj.remove();
                    skillsInfo[element].snapObj.remove();
                }

                let rad = ((val * 360) - 90) * Math.PI / 180;

                skills[element].largeArc = (val > 0.5) ? 1 : 0;
                skills[element].endX = skills[element].startX + (Math.cos(rad) * skills[element].radius);
                skills[element].endY = skills[element].startY + skills[element].radius + (Math.sin(rad) * skills[element].radius);
                skills[element].snapObj = svg.path(`M ${skills[element].startX} ${skills[element].startY} A ${skills[element].radius} ${skills[element].radius} ${skills[element].rotationX} ${skills[element].largeArc} ${skills[element].sweep} ${skills[element].endX} ${skills[element].endY}`).attr({ class: skills[element].class });

                skillsInfo[element].snapObj = svg.text(skillsInfo[element].startX, skillsInfo[element].startY, `${Math.round(val * 100)}`).attr({ class: skillsInfo[element].class });
                skillsInfo[element].snapObj.attr({ x: skillsInfo[element].startX - (skillsInfo[element].snapObj.getBBox().width / 2), y: skillsInfo[element].startY + (skillsInfo[element].snapObj.getBBox().height / 3) });
            }, 2000);
        });
    }
    else {
        skillsItems.forEach(element => {
            Snap.animate(0, skills[element].strength, function (val): void {
                if (skills[element].snapObj.hasOwnProperty("id")) {
                    skills[element].snapObj.remove();
                    skillsInfo[element].snapObj.remove();
                }

                let rad = ((val * 360) - 90) * Math.PI / 180;

                skills[element].largeArc = (val > 0.5) ? 1 : 0;
                skills[element].endX = skills[element].startX + (Math.cos(rad) * skills[element].radius);
                skills[element].endY = skills[element].startY + skills[element].radius + (Math.sin(rad) * skills[element].radius);
                skills[element].snapObj = svg.path(`M ${skills[element].startX} ${skills[element].startY} A ${skills[element].radius} ${skills[element].radius} ${skills[element].rotationX} ${skills[element].largeArc} ${skills[element].sweep} ${skills[element].endX} ${skills[element].endY}`).attr({ class: skills[element].class });

                skillsInfo[element].snapObj = svg.text(skillsInfo[element].startX, skillsInfo[element].startY, `${Math.round(val * 100)}`).attr({ class: skillsInfo[element].class });
                skillsInfo[element].snapObj.attr({ x: skillsInfo[element].startX - (skillsInfo[element].snapObj.getBBox().width / 2), y: skillsInfo[element].startY + (skillsInfo[element].snapObj.getBBox().height / 3) });
            }, 2000);
        });
    }
}

export function clearSVG(): void {
    clearSkills();
    skillsItems.forEach(element => {
        skillsContainer[element].snapObj.remove();
        skillsTitle[element].snapObj.remove();
    });
}

export function clearSkills(): void {
    skillsItems.forEach(element => {
        skills[element].snapObj.remove();
        skillsInfo[element].snapObj.remove();
    });
}

function isSnapArc(element: SnapArc | SnapRect): element is SnapArc {
    return ((<SnapArc>element).radius !== undefined);
}