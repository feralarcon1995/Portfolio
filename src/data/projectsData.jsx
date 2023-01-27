//linkin files
import lpD from '../assets/images/projects/lp/lp.png';
import lpTabletSide from "../assets/images/projects/lp/linkin-tablet-side.png";

//handcodefiles
import handTM from "../assets/images/projects/handcode/hand-tablet-main.png";
import handMS from "../assets/images/projects/handcode/handLaptop-Side.png";

//tiendablufiles
import tiendaTM from "../assets/images/projects/tiendablu/tienda-tablet-main.png"
import tiendaTS from "../assets/images/projects/tiendablu/t1.png"

//pinder
import pinder from "../assets/images/projects/pinder/pinder.png";

//VIAJAYA
import v1 from "../assets/images/projects/viajaya/v1.png";
import v2 from "../assets/images/projects/viajaya/V2.png";


export const proyectData = [

    {
        id: "linkinpark",
        sequence: 1,
        title: "Linkin Park",
        text: ["Web made as a final project in the web development course at coderhouse, which is a tribute to the alternative rock band from the United States called Linkin Park. In this project you will find, information about the band either as its history, each member, from their names to what they do and all public information found on the internet, also you can enjoy their albums, some videos and an image gallery."],
        secondary: ["HTML", "CSS", "SCSS", "BOOTSTRAP", "JAVASCRIPT"],
        desktopImgSrc: [lpD],
        tabletImgSrc: [ lpTabletSide],
        mobileFirst: true,
        githubLink: "https://github.com/feralarcon1995/ProyectoFinalCoderHouse",
        liveLink: "https://feralarcon1995.github.io/ProyectoFinalCoderHouse/",
        next: "handcode"
    },

    {
        id: "handcode",
        sequence: 2,
        title: "handcode",
        text: ["Web made for web development company, which informs and delves into the services offered to customers, you will find a section with some of his work, is fully responsive adapts to all screen widths of different types of devices."],
        secondary: ["HTML", "CSS", "SCSS", "BOOTSTRAP","JAVASCRIPT"],
        desktopImgSrc: [ handMS],
        tabletImgSrc: [handTM],
        mobileFirst: true,
        githubLink: "https://handcode.com.ar/",
        liveLink: "https://handcode.com.ar/",
        next: "tiendablu"
    },

    {
        id: "tiendablu",
        sequence: 3,
        title: "Tienda Blu",
        text: ["Web made as a final project in the ReactJs course at coderhouse, which is an Ecommerce of sportswear. In this project you will find, different clothing products, from shoes, t-shirts, and much more, is functional, because you can add items to the shopping cart, delete them, and finalize the purchase which will take you to a form to fill out the shipping and purchase data.        ."],
        secondary: ["HTML", "CSS", "SCSS", "BOOTSTRAP","JAVASCRIPT", "REACTJS" , "FIREBASE" ],
        desktopImgSrc: [tiendaTS ],
        tabletImgSrc: [tiendaTM],
        mobileFirst: true,
        githubLink: "https://github.com/feralarcon1995/TiendaBlu",
        liveLink: "https://feralarcon1995.github.io/TiendaBlu/",
        next: "pinder"
    },

    {
        id: "pinder",
        sequence: 4,
        title: "Pinder",
        text: ["Web made as a final project in the Python course at coderhouse, which is a Pet Blog made in Django. In this project you will find, a registration, login, you can post your pet to show it off, give it for adoption or even adopt, liking posts, commenting and following users. In this project Sqlite3 was used to create the database, HTML templates were used to render the data, a crud to edit profile, post and comments, is fully responsive, adapts to the screen of all devices, has seo and is optimized."],
        secondary: ["HTML", "CSS", "BOOTSTRAP","PYTHON" , "DJANGO" , "SQLITE" ],
        desktopImgSrc: [pinder ],
        tabletImgSrc: [pinder],
        mobileFirst: true,
        githubLink: "https://github.com/feralarcon1995/Pinder",
        liveLink: "https://github.com/feralarcon1995/Pinder",
        next: "viajaya"
    },

    {
        id: "viajaya",
        sequence: 5,
        title: "Viajaya",
        text: ["Web made as a final project in the Javascript course at coderhouse, which is an expense simulator with the theme of travel. In this project you will find information of different destinations, in which making certain combinations you will find discounts. The layout was made with HTML5, CSS and SASS for the styles, javascript for DOM management and with the api of the dollar you can see updated the price of the same at the time you visit the page, is fully responsive, adapts to the screen of all devices, has seo and is optimized. "],
        secondary: ["HTML", "CSS", "BOOTSTRAP","JAVASCRIPT" , "JQUERY" ],
        desktopImgSrc: [v1 ],
        tabletImgSrc: [v2],
        mobileFirst: true,
        githubLink: "https://github.com/feralarcon1995/ViajaYa",
        liveLink: "https://feralarcon1995.github.io/ViajaYa/",
        next: "linkinpark"
    },


]