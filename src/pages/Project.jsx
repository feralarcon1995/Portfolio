import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import { useScroll } from '../hooks/useScroll';
import { useAnimations } from './../hooks/useAnimations';
import { useData } from "../hooks/useData";

import Navbar from "../components/Navbar";
import MainWork from "../components/Works/MainWork";
import SecondarySection from "../components/Works/Secondary";
import ProjectFooter from "../components/Works/ProjectFooter";
import Panels from "../components/Panels";

const ProjectStyles = styled(motion.div)`
padding: 6vw 5vw;
padding-right: 6vw;
.number{
    display: flex;
    justify-content: flex-start;
    position: absolute;
    left: 0%;
    top: 29%;
    overflow: hidden;
    margin: 5vw 0;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        left: -38%;
        width: 120%;
        margin: 15vw 0;
    }
    &-wrapper{
        overflow: hidden;
        h2{
            font-size: calc(var(--VW)*20);
            line-height: 33vw;
            height: 33vw;
            position: relative;
            bottom: -10%;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size:calc(var(--VW)*10);
                line-height: 50vw;
                height: 50vw;
            }
        }
    }
}
`


const Project = () => {
    const { scrollRef } = useScroll();
    const { projectID } = useParams();
    const { getData } = useData();
    const { transition, angleTextReveal } = useAnimations();

    const { title,
        sequence,
        secondary,
        phoneImgSrc,
        desktopImgSrc,
        tabletImgSrc,
        text,
        githubLink,
        liveLink,
        next } = getData(projectID)


    return (
        <>
            <Navbar />
            <Panels />
            <ProjectStyles
                initial={{ backgroundColor: "rgb(15, 14, 14)", pointerEvents: "none" }}
                animate={{ backgroundColor: "transparent", pointerEvents: "unset" }}
                exit={{ opacity: [1, 1, 0], transition: { duration: 2, times: [0, 0.99, 1] } }}
                ref={scrollRef} data-scroll-container>
                <div data-scroll-section className="number">
                    <div className="number-wrapper">
                        <motion.h2 variants={angleTextReveal} initial="initial" animate="animate" transition={{ ...transition, duration: 2, delay: 2 }}>.0</motion.h2>
                    </div>
                    <div className="number-wrapper">
                        <motion.h2 variants={angleTextReveal} initial="initial" animate="animate" transition={{ ...transition, duration: 2, delay: 2.4 }}>{sequence}</motion.h2>
                    </div>
                </div>
                <MainWork title={title} texts={text} githubLink={githubLink} liveLink={liveLink} 
                    desktopImgSrc={desktopImgSrc} />
                <SecondarySection secondary={secondary} tabletImgSrc={tabletImgSrc} />
                <ProjectFooter next={next} />

            </ProjectStyles>
        </>
    )
}

export default Project