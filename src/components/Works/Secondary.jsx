import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAnimations } from './../../hooks/useAnimations';

import { NavLink } from "react-router-dom";

const SecondarySectionStyles = styled.div`
    margin: 20vh 10vw;
    display:flex;
    justify-content: space-around;
    align-items:center;
    flex-wrap:wrap;
    img{
        width:60%;
    }
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        margin: 10vh 0;

        img{
            width:90%;
        }
    }
    .content{
        h2{
            font-size: calc(var(--VW) *2);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW) *7);

            }
        }
    }
`

const SecondarySection = ({ secondary, tabletImgSrc }) => {
    const { transition, textReveal } = useAnimations();

    return (
        <SecondarySectionStyles data-scroll-section >
            <div className="content">
                <h2>STACK:</h2>
                {
                    secondary.map((text, index) => {
                        return (
                            <h2 key={index}>{text}</h2>
                        )
                    })
                }
            </div>
            <motion.img variants={textReveal} initial="initial"
                animate="animate"
                transition={{ ...transition, duration: 2, delay: 2.8 }}
                src={tabletImgSrc}
                className="title" />
        </SecondarySectionStyles>
    )
}

export default SecondarySection