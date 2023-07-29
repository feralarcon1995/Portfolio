import { useScroll } from "../hooks/useScroll";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

import Navbar from "../components/Navbar";
import Panels from "../components/Panels";
import BigText from "../components/About/BigText";
import MainSection from "../components/About/MainSection";
import Info from "../components/About/Info";
import Marque from "../components/About/Marque";
import Testimonials from "../components/About/Testimonials";

const AboutStyles = styled(motion.div)`
    padding: 0 4vw;
    padding-bottom: 6vw;
    .hello{
        h2{
            font-size: calc(var(--VW)*);
            text-align: center;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*6);
            }
        }
    }
    .name{
        text-align: center;
        margin: 10vh 0 20vh 0;
        h2{
            font-size: calc(var(--VW)*10);
            line-height: 9vw;
            height: 9vw;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 0.1vw var(--black);
            text-transform: uppercase;
        }
        h3{
            font-size: calc(var(--VW)*3);
            text-align: center;
            z-index: 5;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*6);
            }
        }

        a{
            font-size: calc(var(--VW)*3);
            text-align: center;
            margin:10px;
        }
    }
    .split{
        margin: 5vh 0;
        h2{
            text-transform: uppercase;
            font-size: calc(var(--VW)*3);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*5);
            }
        }
    }
    .contact{
        text-align: right;
        h2{
            font-size: calc(var(--VW)*6);
            text-transform: uppercase;
        }
        a{
            font-size: calc(var(--VW)*10);
            text-transform: uppercase;
            -webkit-text-fill-color: var(----bluelight);
            -webkit-text-stroke: 0.14vw var(--black);
            mix-blend-mode: difference;

            &:hover{
                -webkit-text-fill-color: var(--bluelight);
                -webkit-text-stroke: 0.14vw var(--black);
            }
        }
    }
`

const About = () => {
    const { scrollRef } = useScroll();

    return (
        <>
            <Navbar />
            <Panels />
            <LocomotiveScrollProvider>
                <AboutStyles
                    initial={{ backgroundColor: "rgba(15, 14, 14, 1)", pointerEvents: "none" }}
                    animate={{ backgroundColor: "rgba(15, 14, 14, 0)", pointerEvents: "unset" }}
                    exit={{ opacity: [1, 1, 0], transition: { duration: 2, times: [0, 0.99, 1] } }}
                    ref={scrollRef} data-scroll-container >
                    <BigText />
                    <div data-scroll-section className="hello">
                        <h2 data-scroll data-scroll-speed="-8" data-scroll-direction="horizontal">Hi, my name is</h2>
                    </div>
                    <div data-scroll-section className="name">
                        <h2 data-scroll data-scroll-speed="0.5">
                            Fernando
                        </h2>
                        <h3 data-scroll data-scroll-speed="6">Web Developer</h3>
                        <h2 data-scroll data-scroll-speed="0.5">Alarcon</h2>
                        <a
                            href="https://www.linkedin.com/in/feralarcon1995/" target="_blank" rel="noreferrer">
                            <BsLinkedin />
                        </a>
                        <a
                            href="https://github.com/feralarcon1995" target="_blank" rel="noreferrer">
                            <BsGithub />
                        </a>
                    </div>
                    <MainSection />
                    <Marque />
                    <div data-scroll-section className="split">
                        <h2>FrontEnd Addicted.</h2>
                        <h2>Cybersecurity Enthusiast.</h2>
                    </div>
                    <Info />
                    <Testimonials />
                    <div data-scroll-section className="contact">
                        <h2>Got Some Ideas?</h2>
                        <a href="mailto: feralarcon1995@gmail.com">Let's Talk.</a>
                    </div>
                </AboutStyles>
            </LocomotiveScrollProvider>



        </>
    )
}

export default About