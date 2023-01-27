import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAnimations } from './../../hooks/useAnimations';
import { BsGithub } from 'react-icons/bs'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const MainWorkStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap:wrap-reverse;
    width: 100%;
    .img{
        width:40%;

        img{
            width:100%
        }
    }
    }
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        margin-top:6vw;
       justify-content: center;
       gap:4vw;
       .img{
        width:90%;
       }
    }
    .content{
        width: 50%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
        .title-wrapper{
            overflow: hidden;
            margin-bottom: 3vw;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin-bottom: 6vw;
            }
            .title{
                font-size: calc(var(--VW) *3);
                position: relative;
                @media (hover: none) and (pointer: coarse), (max-width: 500px){
                    font-size: calc(var(--VW) *8);
                }
            }
            .underline{
                    width: 30%;
                    height: 0.3vw;
                    background-color: var(--black);
            }
        }
        .links{
            text-align: right;
            margin-bottom: 2vw;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin-bottom: 4vw;
            }
            a{
                height: 100%;
                display: inline-block;
                margin: 0 0.5vw;
                @media (hover: none) and (pointer: coarse), (max-width: 500px){
                    margin: 0 2vw;
                }
                svg{
                    width: 3.5vw;
                    height: 3.5vw;
                    pointer-events: none;
                    mix-blend-mode: normal;
                    color: var(--black);
                    background-color: var(--bluelight);
                    border-radius:50%;
                    @media (hover: none) and (pointer: coarse) and (min-width: 500px){
                        width: 8vw;
                        height: 8vw;
                        mix-blend-mode: unset;
                    }
                    @media (max-width: 500px){
                        width: 12vw;
                        height: 12vw;
                        mix-blend-mode: unset;
                    }
                }
            }
        }
        .text{
            margin-bottom: 3vw;
            font-weight:bold;
            font-size:calc(var(--VW)*1.8)
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin-bottom: 5vw;
            }
        }
    }
`

const MainWork = ({ title, githubLink, liveLink, texts, desktopImgSrc }) => {

    const { transition, textReveal, opacityReveal } = useAnimations();

    return (
        <MainWorkStyles data-scroll-section>
            <div className="img">
                <motion.img variants={textReveal} initial="initial"
                    animate="animate"
                    transition={{ ...transition, duration: 2, delay: 2 }}
                    src={desktopImgSrc}
                    className="title" />
            </div>
            <div className="content">
                <div className="title-wrapper">
                    <motion.h1 variants={textReveal} initial="initial"
                        animate="animate"
                        transition={{ ...transition, duration: 2, delay: 2 }}
                        className="title">{title}
                    </motion.h1>
                    <motion.div
                        initial={{ x: "-120%" }}
                        animate={{ x: "0%" }}
                        transition={{ ...transition, duration: 2, delay: 2.4 }}
                        className="underline"></motion.div>
                </div>
                <motion.div
                    variants={opacityReveal} initial="initial"
                    animate="animate"
                    transition={{ ...transition, duration: 2, delay: 2.6 }}
                    className="links">
                    <a href={githubLink} target="_blank" rel="noreferrer">
                        <BsGithub />
                    </a>
                    <a href={liveLink} target="_blank" rel="noreferrer">
                        <FaExternalLinkSquareAlt />
                    </a>
                </motion.div>
                {
                    texts.map((text, index) => {
                        return (
                            <motion.p
                                variants={opacityReveal} initial="initial"
                                animate="animate"
                                transition={{ ...transition, duration: 2, delay: 2.8 }}
                                className="text" key={index}>{text}</motion.p>
                        )
                    })
                }
            </div>
        </MainWorkStyles>



    )
}

export default MainWork