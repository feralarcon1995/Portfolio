


import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const ProjectFooterStyles = styled.div`
    display: flex;
    justify-content: flex-end;
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
            <a href={`/works/${next}`} className="next" rel="noreferrer">next <span>&rsaquo;</span></a>
        </ProjectFooterStyles>
    )
}

export default ProjectFooter