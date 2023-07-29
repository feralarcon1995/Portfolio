import React from "react";
import styled from "styled-components";
import pic from '../../assets/images/homepage/profile2.png';

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
        width: 50%;
        @media (hover: none) and (pointer: coarse), (max-width: 900px){
            width: 60%;
        }
        @media (hover: none) and (pointer: coarse), (max-width: 700px){
            width: 75%;
        }
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
        p{
            margin: 3vw 0;
            mix-blend-mode: normal;
            @media (hover: none) and (pointer: coarse), (max-width: 900px){
                font-size: 1.2rem;
                padding:1vw;
            }
            @media (hover: none) and (pointer: coarse), (max-width: 700px){
                font-size: 1.2rem;
            }
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
    
    return(
        <MainSectionStyles data-scroll-section className="main">
            <img src={pic} alt="fernando alarcon"  className="main-pic"/>
            <div className="main-text">
                <p> <span className="span-bg">Welcome to my portfolio</span> , thank you for your interest, let me introduce myself so you can get to <span className="span-bg">know me better.</span> </p>

                <p>As a <span className="span-bg">Frontend developer</span>, I strive to grow and give my all, because in a world where everything is digitized more and more solutions are needed <span className="span-bg"> to improve the customer experience</span> to these demands and thus provide everything in <span className="span-bg"> my area of expertise.</span>.</p>
            </div>
        </MainSectionStyles>
    )
}

export default MainSection