import * as Snap from "snapsvg/dist/snap.svg-min.js";

interface Drawing { class: string; snapObj: any; startX: number; startY: number; }
interface Arc extends Drawing { radius: number; rotationX: number; largeArc: number; sweep: number; endX: number; endY: number; }
interface Text extends Drawing { text: string; }
interface SkillsItem extends Arc { strength: number; }

let skills: { html: SkillsItem, css: SkillsItem, ts: SkillsItem };
let skillsInfo: { html: Text, css: Text, ts: Text };
let skillsTitle: { html: Text, css: Text, ts: Text };

let svg = Snap("#skills svg").attr({ viewBox: "0 0 100 50" });

export function initSkills(): void {
    skills = {
        html: { class: "skills-chart", snapObj: {}, startX: 17, startY: 7, radius: 13, rotationX: 0, largeArc: 1, sweep: 1, endX: 17, endY: 7, strength: 0.8 },
        css: { class: "skills-chart", snapObj: {}, startX: 50, startY: 7, radius: 13, rotationX: 0, largeArc: 1, sweep: 1, endX: 50, endY: 7, strength: 0.8 },
        ts: { class: "skills-chart", snapObj: {}, startX: 83, startY: 7, radius: 13, rotationX: 0, largeArc: 1, sweep: 1, endX: 83, endY: 7, strength: 0.75 }
    };
    skillsInfo = {
        html: { class: "skills-info", snapObj: {}, startX: 17, startY: 20, text: "75" },
        css: { class: "skills-info", snapObj: {}, startX: 50, startY: 20, text: "75" },
        ts: { class: "skills-info", snapObj: {}, startX: 83, startY: 20, text: "75" }
    };
    skillsTitle = {
        html: { class: "skills-title", snapObj: {}, startX: 17, startY: 40, text: "HTML5" },
        css: { class: "skills-title", snapObj: {}, startX: 50, startY: 40, text: "CSS3" },
        ts: { class: "skills-title", snapObj: {}, startX: 83, startY: 40, text: "TypeScript" }
    }

    skillsTitle.html.snapObj = svg.text(skillsTitle.html.startX, skillsTitle.html.startY, skillsTitle.html.text).attr({ class: skillsTitle.html.class });
    skillsTitle.html.snapObj.attr({ x: skillsTitle.html.startX - (skillsTitle.html.snapObj.getBBox().width / 2), y: skillsTitle.html.startY + (skillsTitle.html.snapObj.getBBox().height / 4) });
    skillsTitle.css.snapObj = svg.text(skillsTitle.css.startX, skillsTitle.css.startY, skillsTitle.css.text).attr({ class: skillsTitle.css.class });
    skillsTitle.css.snapObj.attr({ x: skillsTitle.css.startX - (skillsTitle.css.snapObj.getBBox().width / 2), y: skillsTitle.css.startY + (skillsTitle.css.snapObj.getBBox().height / 4) });
    skillsTitle.ts.snapObj = svg.text(skillsTitle.ts.startX, skillsTitle.ts.startY, skillsTitle.ts.text).attr({ class: skillsTitle.ts.class });
    skillsTitle.ts.snapObj.attr({ x: skillsTitle.ts.startX - (skillsTitle.ts.snapObj.getBBox().width / 2), y: skillsTitle.ts.startY + (skillsTitle.ts.snapObj.getBBox().height / 4) });

    svg.circle(skills.html.startX, (skills.html.startY + skills.html.radius), skills.html.radius).attr({ class: "skills-chart-container" });
    svg.circle(skills.css.startX, (skills.css.startY + skills.css.radius), skills.css.radius).attr({ class: "skills-chart-container" });
    svg.circle(skills.ts.startX, (skills.ts.startY + skills.ts.radius), skills.ts.radius).attr({ class: "skills-chart-container" });
}

export function loadSkills(): void {

    Snap.animate(0, skills.html.strength, function (val): void {
        if (skills.html.snapObj.hasOwnProperty("id")) {
            skills.html.snapObj.remove();
            skillsInfo.html.snapObj.remove();
        }

        let rad = ((val * 360) - 90) * Math.PI / 180;

        skills.html.largeArc = (val > 0.5) ? 1 : 0;
        skills.html.endX = skills.html.startX + (Math.cos(rad) * skills.html.radius);
        skills.html.endY = skills.html.startY + skills.html.radius + (Math.sin(rad) * skills.html.radius);
        skills.html.snapObj = svg.path(`M ${skills.html.startX} ${skills.html.startY} A ${skills.html.radius} ${skills.html.radius} ${skills.html.rotationX} ${skills.html.largeArc} ${skills.html.sweep} ${skills.html.endX} ${skills.html.endY}`).attr({ class: skills.html.class });

        skillsInfo.html.snapObj = svg.text(skillsInfo.html.startX, skillsInfo.html.startY, `${Math.round(val * 100)}`).attr({ class: skillsInfo.html.class });
        skillsInfo.html.snapObj.attr({ x: skillsInfo.html.startX - (skillsInfo.html.snapObj.getBBox().width / 2), y: skillsInfo.html.startY + (skillsInfo.html.snapObj.getBBox().height / 4) });
    }, 2000);

    Snap.animate(0, skills.css.strength, function (val): void {
        if (skills.css.snapObj.hasOwnProperty("id")) {
            skills.css.snapObj.remove();
            skillsInfo.css.snapObj.remove();
        }

        let rad = ((val * 360) - 90) * Math.PI / 180;

        skills.css.largeArc = (val > 0.5) ? 1 : 0;
        skills.css.endX = skills.css.startX + (Math.cos(rad) * skills.css.radius);
        skills.css.endY = skills.css.startY + skills.css.radius + (Math.sin(rad) * skills.css.radius);
        skills.css.snapObj = svg.path(`M ${skills.css.startX} ${skills.css.startY} A ${skills.css.radius} ${skills.css.radius} ${skills.css.rotationX} ${skills.css.largeArc} ${skills.css.sweep} ${skills.css.endX} ${skills.css.endY}`).attr({ class: skills.html.class });

        skillsInfo.css.snapObj = svg.text(skillsInfo.css.startX, skillsInfo.css.startY, `${Math.round(val * 100)}`).attr({ class: skillsInfo.css.class });
        skillsInfo.css.snapObj.attr({ x: skillsInfo.css.startX - (skillsInfo.css.snapObj.getBBox().width / 2), y: skillsInfo.css.startY + (skillsInfo.css.snapObj.getBBox().height / 4) });
    }, 2000);

    Snap.animate(0, skills.ts.strength, function (val): void {
        if (skills.ts.snapObj.hasOwnProperty("id")) {
            skills.ts.snapObj.remove();
            skillsInfo.ts.snapObj.remove();
        }

        let rad = ((val * 360) - 90) * Math.PI / 180;

        skills.ts.largeArc = (val > 0.5) ? 1 : 0;
        skills.ts.endX = skills.ts.startX + (Math.cos(rad) * skills.ts.radius);
        skills.ts.endY = skills.ts.startY + skills.ts.radius + (Math.sin(rad) * skills.ts.radius);
        skills.ts.snapObj = svg.path(`M ${skills.ts.startX} ${skills.ts.startY} A ${skills.ts.radius} ${skills.ts.radius} ${skills.ts.rotationX} ${skills.ts.largeArc} ${skills.ts.sweep} ${skills.ts.endX} ${skills.ts.endY}`).attr({ class: skills.html.class });

        skillsInfo.ts.snapObj = svg.text(skillsInfo.ts.startX, skillsInfo.ts.startY, `${Math.round(val * 100)}`).attr({ class: skillsInfo.ts.class });
        skillsInfo.ts.snapObj.attr({ x: skillsInfo.ts.startX - (skillsInfo.ts.snapObj.getBBox().width / 2), y: skillsInfo.ts.startY + (skillsInfo.ts.snapObj.getBBox().height / 4) });
    }, 2000);
}

export function clearSkills(): void {
    skills.html.snapObj.remove();
    skills.css.snapObj.remove();
    skills.ts.snapObj.remove();

    skillsInfo.html.snapObj.remove();
    skillsInfo.css.snapObj.remove();
    skillsInfo.ts.snapObj.remove();
}