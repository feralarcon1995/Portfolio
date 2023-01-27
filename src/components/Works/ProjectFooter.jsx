


import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const ProjectFooterStyles = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: calc(var(--VW) *3);
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        font-size: calc(var(--VW) *6);
    }
    .next{
        span{
            position: relative;
            top: -5%;
            right: 5%;
            transition: 0.3s all ease-out;
            pointer-events: none;
        }
        &:hover{
            span{
                right: -5%;
                transition: 0.3s all ease-out;
            }
        }
    }
`


const ProjectFooter = ({next})=>{

    return(
        <ProjectFooterStyles data-scroll-section>
            <NavLink to={next} className="next" rel="noreferrer">next <span>&rsaquo;</span></NavLink>
        </ProjectFooterStyles>
    )
}

export default ProjectFooter