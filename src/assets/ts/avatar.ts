import * as Snap from "snapsvg/dist/snap.svg-min.js";
import * as vrAvatar from "../images/VRAvatar.svg";

interface Drawing { snapObj: any; startX: number; startY: number; }
interface SnapEllipse extends Drawing { width: number; height: number; }
interface SnapCircle extends Drawing { radius: number; }

let customDrawings: { eyeL: SnapEllipse, eyeR: SnapEllipse, clipperL: SnapEllipse, clipperR: SnapEllipse, pupilL: SnapCircle, pupilR: SnapCircle };
let colors, startTime: number;

export default function loadAvatar(): void {
    let avatar = Snap("#avatar");
    colors = ["#444B54", "#F0F1F5"], startTime = 0;

    Snap.load(vrAvatar, function (loadedFragment) {
        avatar.append(loadedFragment);

        drawEyes();
        animate(0);
    });
}

function drawEyes(): void {
    let svg = Snap("#avatar svg");
    customDrawings = {
        eyeL: { snapObj: {}, startX: 58.237, startY: 39.2605, width: 4.087, height: 2.7245 },
        eyeR: { snapObj: {}, startX: 41.762, startY: 39.2605, width: 4.087, height: 2.7245 },
        clipperL: { snapObj: {}, startX: 58.237, startY: 39.2605, width: 4.087, height: 2.7245 },
        clipperR: { snapObj: {}, startX: 41.762, startY: 39.2605, width: 4.087, height: 2.7245 },
        pupilL: { snapObj: {}, startX: 57.1475, startY: 39.2605, radius: 1.5325 },
        pupilR: { snapObj: {}, startX: 42.8515, startY: 39.2605, radius: 1.5325 }
    }

    for (var key in customDrawings) {
        if (customDrawings.hasOwnProperty(key)) {
            let element: SnapCircle | SnapEllipse = customDrawings[key];

            if (isSnapCircle(element)) {
                element.snapObj = svg.circle(element.startX, element.startY, element.radius).attr({ fill: colors[0], clip: customDrawings[`clipper${key.slice(-1)}`]["snapObj"] });
            }
            else {
                element.snapObj = svg.ellipse(element.startX, element.startY, element.width, element.height).attr({ fill: colors[1] });
            }
        }
    }
    svg.path("m 54.027257,35.577574 7.683311,-1.011525 c 0.709424,-0.0934 1.355737,0.402538 1.449135,1.111961 0.0934,0.709423 -0.402536,1.355737 -1.111959,1.449134 l -7.683313,1.011524 c -0.709423,0.0934 -1.355738,-0.402537 -1.449135,-1.111961 -0.0934,-0.709423 0.402537,-1.355736 1.111961,-1.449133 z").attr({ fill: colors[0] });
    svg.path("m 38.289431,34.566054 7.683313,1.011524 c 0.709423,0.0934 1.205357,0.739711 1.111961,1.449134 -0.0934,0.709424 -0.739713,1.205358 -1.449136,1.111961 l -7.683313,-1.011525 c -0.709424,-0.09339 -1.205358,-0.73971 -1.11196,-1.449133 0.09339,-0.709424 0.739711,-1.205358 1.449135,-1.111961 z").attr({ fill: colors[0] });
}

function animate(timestamp?: number): void {
    if (timestamp - startTime > 3000) {
        let mode: string = (Math.random() < 0.75) ? "once" : "twice";

        for (let key in customDrawings) {
            if (customDrawings.hasOwnProperty(key)) {
                let element: SnapCircle | SnapEllipse = customDrawings[key];

                if (!isSnapCircle(element)) {
                    if (mode == "once") {
                        element.snapObj.animate({ ry: 0.1 }, 220, () => {
                            element.snapObj.animate({ ry: (<SnapEllipse>element).height }, 300);
                        });
                    } else {
                        element.snapObj.animate({ ry: 0.1 }, 110, () => {
                            element.snapObj.animate({ ry: (<SnapEllipse>element).height }, 150, () => {
                                element.snapObj.animate({ ry: 0.1 }, 110, () => {
                                    element.snapObj.animate({ ry: (<SnapEllipse>element).height }, 150);
                                });
                            });
                        });
                    }
                }
            }
        }
        startTime = timestamp;
    }
    requestAnimationFrame(animate);
}

function isSnapCircle(element: SnapCircle | SnapEllipse): element is SnapCircle {
    return ((<SnapCircle>element).radius !== undefined);
}