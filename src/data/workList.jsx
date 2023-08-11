import lpTS1 from "../assets/images/projects/lp/lp.png";
import hand1 from "../assets/images/projects/handcode/h.png";
import tienda1 from "../assets/images/projects/tiendablu/t1.png";
import pinder from "../assets/images/projects/pinder/pinder.png";
import viajaya from "../assets/images/projects/viajaya/v1.png";
import china from "../assets/images/projects/china/china-d.png";

export const WorksListItem = {
    id: 'string',
    title: 'string',
    src: 'string',
    leftFlex: [0, 1, 2, 3],
    rightFlex: [0, 1, 2, 3],
    thumbnailOffset: 'string',
    offsetX: 'number',
    offsetY: ' number',
}


export const WorksList = [
    {
        id: "linkinpark",
        title: "Linkin Park",
        src: lpTS1,
        leftFlex: 0,
        rightFlex: 2,
        thumbnailOffset: "60%",
        offsetX: 30,
        offsetY: -10,
    },
    {
        id: "handcode",
        title: "Handcode",
        src: hand1,
        leftFlex: 3,
        rightFlex: 1,
        thumbnailOffset: "20%",
        offsetX: 30,
        offsetY: -10,
    },
    {
        id: "tiendablu",
        title: "Tienda Blu",
        src: tienda1,
        leftFlex: 1,
        rightFlex: 3,
        thumbnailOffset: "70%",
        offsetX: -10,
        offsetY: 5,
    },
    {
        id: "pinder",
        title: "Pinder",
        src: pinder,
        leftFlex: 3,
        rightFlex: 1,
        thumbnailOffset: "20%",
        offsetX: 30,
        offsetY: 5,
    },

    {
        id: "viajaya",
        title: "VIAJAYA",
        src: viajaya,
        leftFlex: 0,
        rightFlex: 2,
        thumbnailOffset: "60%",
        offsetX: 30,
        offsetY: 5,
    },
    {
        id: "lachinafutbol",
        title: "LA CHINA FUTBOL",
        src: china,
        leftFlex: 0,
        rightFlex: 2,
        thumbnailOffset: "80%",
        offsetX: 30,
        offsetY: 5,
    },

]