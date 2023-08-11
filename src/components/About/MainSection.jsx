import React from "react";
import styled from "styled-components";
import pic from '../../assets/images/homepage/me.jpeg';

const MainSectionStyles = styled.div`
   padding:2rem;
    margin: 20vh 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:relative;
    height:100%;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-bottom: 10vh;
    }


    .span-bg{
        background: -webkit-background-image: linear-gradient(125deg, rgb(230, 142, 156),rgb(118, 118, 202));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
        background-image: linear-gradient(125deg, rgb(230, 142, 156),rgb(118, 118, 202));
      }
      
    .main-pic{
        width: 90%;
    height: 90vh;
    background: linear-gradient(0deg,rgba(23,25,35,0.80) 0%,rgb(23 25 35 / 68%) 100%),url(https://i.ibb.co/vQWS4sW/me.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 0.3125rem;
    margin-right: 5vw;
    }
    .main-text{
        position:relative;
        right:12%;
        width: 80%;
        z-index:1111;
        padding:2vw;
        @media (hover: none) and (pointer: coarse), (max-width: 900px){
            width: 90%;
            right:14%;
        }
        @media (hover: none) and (pointer: coarse), (max-width: 700px){
            width: 75%;
        }
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
        p{
            color:#fff;
            z-index:1111;
            margin: 3vw 0;
            mix-blend-mode: normal;
            font-size:2.6rem;
            @media (hover: none) and (pointer: coarse), (max-width: 900px){
                font-size: 1.5rem;
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
            <div className="main-pic" style={{ }}></div>
            <div className="main-text">
                <p> <span className="span-bg">Welcome to my portfolio</span> , thank you for your interest, let me introduce myself so you can get to <span className="span-bg">know me better.</span> </p>

                <p>As a <span className="span-bg">Frontend developer</span>, I strive to grow and give my all, because in a world where everything is digitized more and more solutions are needed <span className="span-bg"> to improve the customer experience</span> to these demands and thus provide everything in <span className="span-bg"> my area of expertise.</span>.</p>
            </div>
        </MainSectionStyles>
    )
}

export default MainSection