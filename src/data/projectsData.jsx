//linkin files
import lpTS1 from "../assets/images/projects/lp/linkin-lg-1-png";
import lpTS2 from "../assets/images/projects/lp/linkin-lg-2-png";
import lpTS3 from "../assets/images/projects/lp/linkin-lg-3-png";
import lpTablet from "../assets/images/projects/lp/linkin-tablet-main.png";
import lpTabletSide from "../assets/images/projects/lp/linkin-tablet-side.png";

//handcodefiles
import hand1 from "../assets/images/projects/handcode/hand-lg-1.png";
import hand2 from "../assets/images/projects/handcode/hand-lg-2.png";
import hand3 from "../assets/images/projects/handcode/hand-lg-3.png";
import handTM from "../assets/images/projects/handcode/hand-tablet-main.png";
import handTS from "../assets/images/projects/handcode/hand-tablet-side.png"
import handLM from "../assets/images/projects/handcode/handLaptop-Main.png";
import handMS from "../assets/images/projects/handcode/handLaptop-Side.png";

//tiendablufiles
import tienda1 from "../assets/images/projects/tiendablu/tienda-lg-1.png"
import tienda2 from "../assets/images/projects/tiendablu/tienda-lg-2.png"
import tienda3 from "../assets/images/projects/tiendablu/tienda-lg-3.png"
import tiendaTM from "../assets/images/projects/tiendablu/tienda-tablet-main.png"
import tiendaTS from "../assets/images/projects/tiendablu/tienda-tablet-side.png"

export const proyectsData = [

    {
        id: "linkinpark",
        sequence: 1,
        title: "Linkin Park",
        text: ["Web made as a final project in the web development course at coderhouse, which is a tribute to the alternative rock band from the United States called Linkin Park. In this project you will find, information about the band either as its history, each member, from their names to what they do and all public information found on the internet, also you can enjoy their albums, some videos and an image gallery."],
        secondary: ["HTML", "CSS", "SCSS", "BOOTSTRAP", "JAVASCRIPT"],
        phoneImgSrc: [lpTS1, lpTS2, lpTS3],
        desktopImgSrc: [],
        tabletImgSrc: [lpTablet, lpTabletSide],
        mobileFirst: true,
        githubLink: "https://github.com/feralarcon1995/ProyectoFinalCoderHouse",
        liveLink: "https://feralarcon1995.github.io/ProyectoFinalCoderHouse/",
        next: "handcode"
    },

    {
        id: "handcode",
        sequence: 1,
        title: "handcode",
        text: ["Web made for web development company, which informs and delves into the services offered to customers, you will find a section with some of his work, is fully responsive adapts to all screen widths of different types of devices."],
        secondary: ["HTML", "CSS", "SCSS", "BOOTSTRAP","JAVASCRIPT"],
        phoneImgSrc: [hand1,hand2,hand3],
        desktopImgSrc: [handLM, handMS],
        tabletImgSrc: [handTM, handTS],
        mobileFirst: true,
        githubLink: "https://handcode.com.ar/",
        liveLink: "https://handcode.com.ar/",
        next: "tiendablu"
    },

    {
        id: "tiendablu",
        sequence: 1,
        title: "Tienda Blu",
        text: ["Web made as a final project in the ReactJs course at coderhouse, which is an Ecommerce of sportswear. In this project you will find, different clothing products, from shoes, t-shirts, and much more, is functional, because you can add items to the shopping cart, delete them, and finalize the purchase which will take you to a form to fill out the shipping and purchase data.        ."],
        secondary: ["HTML", "CSS", "SCSS", "BOOTSTRAP","JAVASCRIPT", "REACTJS" , "FIREBASE" ],
        phoneImgSrc: [tienda1,tienda2,tienda3],
        desktopImgSrc: [],
        tabletImgSrc: [tiendaTM, tiendaTS],
        mobileFirst: true,
        githubLink: "https://github.com/feralarcon1995/TiendaBlu",
        liveLink: "https://feralarcon1995.github.io/TiendaBlu/",
        next: "linkinpark"
    },





]