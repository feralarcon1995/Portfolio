import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import hoverEffect from "hover-effect";
import Fer from "../../assets/images/homepage/profile.jfif";
import Fer2 from "../../assets/images/homepage/profile2.png";
import HeatMap from "../../assets/images/homepage/heightMap.webp";

const MainSectionStyles = styled.div`
    margin: 20vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-bottom: 10vh;
    }


    .span-bg{
        background:var(--bluelight);
        font-weight: bold;
      }
      
    .main-pic{
        width: 25vw;
        height: 30vw;
        margin-right: 5vw;
        text-align: center;
        overflow: hidden;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 100%;
            width: 50vw;
            height: 55vw;
        }
    }
    .main-text{
        width: 45%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
        p{
            margin: 3vw 0;
            mix-blend-mode: normal;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin: 5vw 0;
            }
            a{
                font-family:   Grotesk;
                text-transform: none;
                mix-blend-mode: normal;
            }
        }
    }
`

const MainSection = ()=>{
    const profileRef = useRef(null);
    useEffect(()=>{
        new hoverEffect({
            parent: profileRef.current,
            intensity: 1.4,
            image1: Fer2,
            image2: Fer,
            displacementImage: HeatMap
        })
    });
    return(
        <MainSectionStyles data-scroll-section className="main">
            <div data-scroll data-scroll-speed="6" className="main-pic" ref={profileRef}></div>
            <div className="main-text">
                <p> <span className="span-bg">Welcome to my portfolio</span> , thank you for your interest, let me introduce myself so you can get to<span className="span-bg">know me a little better.</span> </p>
                <p>I am currently <span className="span-bg">studying and educating myself in cybersecurity</span> , entering this world, as the gap in a situation of cybercrimens shorter, in this way I give all of me to acquire new skills in terms of security regarding the creation of my applications and customer support.</p>
                <p>As a <span className="span-bg">Frontend developer</span> f, I strive to grow and give my all, because in a world where everything is digitized more and more solutions are needed <span className="span-bg"> to improve the customer experience</span> to these demands and thus provide everything that is in <span className="span-bg"> my area of expertise.</span></p>
                <p>As a <span className="span-bg">professional, I can help the client to recognise which is the best solution for his problem,</span>  giving him the basis to understand which is the best path to take according to his objective. </p>
                <p>I use my free time to relax, watch series and anime, I also like to play video games and cook, I go to the gym and I am a cat lover.</p>
            </div>
        </MainSectionStyles>
    )
}

export default MainSection