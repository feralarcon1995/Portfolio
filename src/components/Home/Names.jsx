import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useAnimations } from '../../hooks/useAnimations';


const NamesStyles = styled(motion.div)`
    text-align: right;
    .name-wrapper{
        overflow: hidden;
        li{
            font-family: Monument;
            font-weight: 600;
            display: inline-block;
            font-size:calc(var(--VW)*9);
            line-height: calc(var(--VW)*11);
            height: calc(var(--VW)*3);
            text-transform: uppercase;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: calc(var(--VW)*0.3) var(--black);
            @media (hover: none) and (pointer: coarse){
                font-size:calc(var(--VW)*17);
                line-height: calc(var(--VW)*16);
                height: calc(var(--VW)*16);
            }
        }
    }
`

//animations 

const titleParent = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 3.5
        }
    }
}

const titleParent2 = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 4
        }
    }
}

const titleTextReveal = {
    hidden: {
        y: "300%",
    },
    show: {
        y: "0%",
    }
}

const Names = () => {

    const ronnie = ["F", "e", "r", "n", "a", "n", "d", "o"]
    const feng = ["A", "l", "a", "r", "c", "o", "n"];
    const { transition } = useAnimations();

    return (
        <NamesStyles>
            <motion.ol className="name-wrapper" variants={titleParent} initial="hidden" animate="show">
                {
                    ronnie.map((letter, index) => {
                        return (
                            <motion.li
                                key={index}
                                variants={titleTextReveal}
                                transition={{ ...transition, duration: 1 }}>
                                {letter}
                            </motion.li>
                        )
                    })
                }
            </motion.ol>
            <motion.ol
                className="name-wrapper"
                variants={titleParent2}
                initial="hidden"
                animate="show">
                {
                    feng.map((letter, index) => {
                        return (
                            <motion.li
                                key={index}
                                variants={titleTextReveal}
                                transition={{ ...transition, duration: 1 }}>
                                {letter}
                            </motion.li>
                        )
                    })
                }
            </motion.ol>
        </NamesStyles>
    )
}

export default Names