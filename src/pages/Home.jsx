import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { motion } from "framer-motion";
import hoverEffect from "hover-effect";
import Fer from "../assets/images/homepage/profile.jfif";
import Fer2 from "../assets/images/homepage/profile2.png";
import DisplacementImg from "../assets/images/homepage/glass.webp";

//components
import Panels from '../components/Panels'
import Names from "../components/Home/Names"
import BigText from '../components/About/BigText'
import { useAnimations } from './../hooks/useAnimations';

//icons
import { BsLinkedin,BsGithub } from 'react-icons/bs'

const HomepageStyles = styled(motion.div)`
width: 100vw;
height: 100vh;
display: flex;
justify-content: space-between;
padding: 2vw;
 &.bg{
  
 }
@media (hover: none) and (pointer: coarse){
    padding: 10vh 5vw;
}

.span-bg{
  background:var(--bluelight);
  font-weight: bold;
}



.left{
    height: 100%;
    width: 24%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        display: none;
    }
    &-top{
        .pic{
            height: 50vh;
            overflow: hidden;
        }
        .descriptions{
            margin-top: 3vh;
            text-align: justify;

            
        }
    }


    &-bottom{
        overflow: hidden;
        a{
            margin-right: 3vw;
            display: inline-block;
            svg{
                pointer-events: none;
                width: 2.5vw;
                height: 2.5vw;
                mix-blend-mode: normal;
                color: var(--black);
                background-color: var(--bluelight);
                &:hover{
                    color: var(--bluelight);
                    background-color:var(--black);
                }
            }
        }
    }
}

.right{
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        width: 100%;
    }
    &-descriptions{
        display: none;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            display: block;
            text-align: justify;
            width: 52%;
            margin: 5vh 0;
        }
        @media (max-width: 500px){
            width: 85%;
        }
    }
    &-bottom{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        max-height: 40vh;
        position: relative;
        top: 1%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            margin-top: 0;
            margin-bottom: 5vh;
        }
        .link-container{
            overflow: hidden;
            text-align: right;
            :nth-child(1){
                padding-right: 5vw;
                @media (hover: none) and (pointer: coarse), (max-width: 500px){
                    padding-right: 0;
                }
            }
            :nth-child(3){
                padding-right: 10vw;
                @media (hover: none) and (pointer: coarse), (max-width: 500px){
                    padding-right: 0;
                }
            }
            .link-wrapper{
                a{
                    display: inline-block;
                    font-size:calc(var(--VW)*7);
                    line-height: calc(var(--VW)*6);
                    height: calc(var(--VW)*6);
                    @media (hover: none) and (pointer: coarse), (max-width: 500px){
                        font-size:calc(var(--VW)*12);
                        line-height: calc(var(--VW)*11);
                        height: calc(var(--VW)*11);
                    }
                    .number{
                        pointer-events: none;
                        font-size:calc(var(--VW)*2);
                        @media (hover: none) and (pointer: coarse), (max-width: 500px){
                        font-size:calc(var(--VW)*3);
                        }
                    }
                }
            }
        }
    }
}
`

const Home = () => {

  const profile = useRef(null);
  const { transition, opacityReveal, angleTextReveal } = useAnimations();

  useEffect(() => {
    new hoverEffect({
      parent: profile.current,
      intensity: 1.4,
      image1: Fer2,
      image2: Fer,
      displacementImage: DisplacementImg
    })
  });

  return (
    <>
      <Panels />
      <HomepageStyles
        initial={{ backgroundColor: "#0f0e0e", pointerEvents: "none" }}
        animate={{ backgroundColor: "transparent", pointerEvents: "unset" }}
        exit={{ opacity: [1, 1, 0], transition: { duration: 2, times: [0, 0.99, 1] } }}
      >
        <div className="left">
          <div className="left-top">
            <div className="pic" ref={profile}></div>
            <div className="descriptions">
              <motion.p
                variants={opacityReveal} initial="initial"
                animate="animate"
                transition={{ ...transition, duration: 1, delay: 2.5 }}
              >Hi, <span className="span-bg">I'm Fernando Alarcon based in Argentina.</span>  I'm always looking for new challenges in a development team, where I can add value from <span className="span-bg">my experience and knowledge</span> in the <span className="span-bg">Front-End area</span> , and keep learning every day. At the same time,  <span className="span-bg"> I am a beginner in cybersecurity </span> and <span className="span-bg">I study English </span> to improve my skills in the working field.</motion.p>
            </div>
          </div>
          <div className="left-bottom">
            <motion.a
              variants={opacityReveal} initial="initial"
              animate="animate"
              transition={{ ...transition, duration: 1, delay: 2.7 }}
              href="https://www.linkedin.com/in/feralarcon1995/" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </motion.a>
            <motion.a
              variants={opacityReveal} initial="initial"
              animate="animate"
              transition={{ ...transition, duration: 1, delay: 2.9 }}
              href="https://github.com/feralarcon1995" target="_blank" rel="noreferrer">
              <BsGithub/>
            </motion.a>
          </div>
        </div>
        <div className="right">
          <Names />
          <div className="right-descriptions">
            <motion.p
              variants={opacityReveal} initial="initial"
              animate="animate"
              transition={{ ...transition, duration: 1, delay: 4.5 }}
            >Hi, <span className="span-bg">I'm Fernando Alarcón based in Argentina.</span>  I'm always looking for new challenges in a development team, where I can add value from <span className="span-bg">my experience and knowledge</span> in the <span className="span-bg">Front-End area</span> , and keep learning every day. At the same time,  <span className="span-bg"> I am a beginner in cybersecurity </span> and <span className="span-bg">I study English </span> to improve my skills in the working field.</motion.p>
          </div>
          <div className="right-bottom">
            <motion.div className="link-container">
              <motion.div className="link-wrapper"
                variants={angleTextReveal} initial="initial" animate="animate" transition={{ ...transition, duration: 1, delay: 4 }}
              >
                <NavLink to="/works"><span className="number">01.</span>Works</NavLink>
              </motion.div>
            </motion.div>
            <motion.div className="link-container">
              <motion.div className="link-wrapper"
                variants={angleTextReveal} initial="initial" animate="animate" transition={{ ...transition, duration: 1, delay: 4.2 }}
              >
                <NavLink to="/about"><span className="number">02.</span>About</NavLink>
              </motion.div>
            </motion.div>
            <motion.div className="link-container">
              <motion.div className="link-wrapper"
                variants={angleTextReveal} initial="initial" animate="animate" transition={{ ...transition, duration: 1, delay: 4.4 }}
              >
                <a href="mailto:feralarcon1995@gmail.com"><span className="number">03.</span>Contact</a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </HomepageStyles>
    </>
  )
}

export default Home