import {createGlobalStyle} from 'styled-components';
import {Locomotive} from "./locomotive";

export const GlobalStyles = createGlobalStyle`

${Locomotive};

:root{
    --black:#0f0e0e;
    --bluelight:#4ca1ff;
    --grey:#866c55;
    font-family: monument;
}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

h1,h2,h3,h4,h5,a{
    color:var(--black);
}

p{
    font-family:   Grotesk;
    font-weight: 400;
    font-size: calc(var(--VW)*1.4);
    word-spacing: calc(var(--VW) *0.2);
    line-height: 120%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
    @media (hover: none) and (pointer: coarse){
        font-size: calc(var(--VW)*3);
        word-spacing: calc(var(--VW) *0.5);
    }
    @media (hover: none) and (pointer: coarse) and (max-width: 500px), (max-width: 500px){
        font-size: calc(var(--VW)*5);
        word-spacing: calc(var(--VW) *0.5);
    }
}

li{
    list-style:none;
}

a{
        color: inherit;
        text-decoration: none;
        font-weight: 800;
        text-transform: uppercase;
        mix-blend-mode: difference;
        outline: none;
        &:hover{
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: calc(var(--VW)*0.14) var(--black);
            cursor: none;
        }
}

html{
    overflow: hidden;
    min-height: -webkit-fill-available;
}

::selection{
    background-color:rgba(217,150,185,1);
    -webkit-text-stroke: 1px #fff;
   color: transparent; 
}

body{
    background: rgb(217,150,185);
    background: linear-gradient(145deg, rgba(217,150,185,1) 0%, rgba(121,179,225,1) 51%, rgba(72,64,101,1) 100%);
    cursor: none;
    isolation: isolate;
    min-height: 100vh;
    min-height: -webkit-fill-available;

}
`;