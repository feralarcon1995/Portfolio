import React from "react";
import styled from "styled-components";

const InfoStyles = styled.div`
    margin-bottom: 20vh;
    margin-right: 5vw;
    display: flex;
    justify-content: space-between;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        flex-wrap: wrap;
        margin-bottom: 10vh;
    }
    .info-main{
        width: 48%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
        h2{
            font-size: calc(var(--VW)*2);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*4);
            }
        }
        p{
            margin-bottom: 3vw;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin-bottom: 5vw;
            }
            :last-child{
                margin-bottom: 0;
            }
        }
    }
    
`

const Info = ()=>{
    return(
        <InfoStyles data-scroll-section  className="info">
            <div className="info-main">
                <h2>Languages</h2>
                <p>JavaScript, HTML, CSS/Scss/Sass, Python, SQL</p>
                <h2>Frameworks/Libraries/Others</h2>
                <p>ReactJs, Firebase, Framer Motion, Styled Components, Git, Command Line, NPM, Django, Jquery</p>
                <h2>UI/UX</h2>
                <p>Responsive Design, Prototyping, Wireframing, Adobe Potoshop, Bootstrap, MaterialUI,</p>
                <h2>Learning</h2>
                <p>Cybersecurity, NMAP, Pentesting, Kali Linux</p>
                <h2>Other Skills</h2>
                <p>Taekwondo WT 1st Dan, Sub national champion, and in my spare time I am a cartoonist.</p>  
            </div>
        </InfoStyles>
    )
}

export default Info