import styled from "styled-components";
import {motion} from "framer-motion";

const MarqueeStyles = styled.div`
    padding: 0 4vw;
    position: relative;
    left: -10vw;
    .left, .right{
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        span{
            position: relative;
            display: inline-block;
            font-family: Monument;
            font-weight: 100;
            font-size: calc(var(--VW)*8);
            text-transform: uppercase;
            padding-right: 2vw;
        }
    }
    .left{
        span{
            border-top: 0.5vw solid var(--black);
            border-bottom: 0.5vw solid var(--black);
        }
    }
    .right{
        span{
            border-bottom: 0.5vw solid var(--black);
        }
    }
`



const Marque = () => {

    const travelDistance = 85.7;

    return (
        <>
            <MarqueeStyles data-scroll-section>
                <div className="left"
                >
                    <motion.span
                        initial={{ left: 0 }}
                        animate={{ left: `-${travelDistance}%` }}
                        transition={{ ease: "linear", duration: 12, repeat: Infinity }}
                    >Skills-</motion.span>
                    <motion.span
                        initial={{ left: 0 }}
                        animate={{ left: `-${travelDistance}%` }}
                        transition={{ ease: "linear", duration: 12, repeat: Infinity }}
                    >Skills-</motion.span>
                    <motion.span
                        initial={{ left: 0 }}
                        animate={{ left: `-${travelDistance}%` }}
                        transition={{ ease: "linear", duration: 12, repeat: Infinity }}
                    >Skills-</motion.span>
                    <motion.span
                        initial={{ left: 0 }}
                        animate={{ left: `-${travelDistance}%` }}
                        transition={{ ease: "linear", duration: 12, repeat: Infinity }}
                    >Skills-</motion.span>
                </div>
                <div className="right">
                    <motion.span
                        initial={{ right: `${travelDistance}%` }}
                        animate={{ right: 0 }}
                        transition={{ ease: "linear", duration: 12, repeat: Infinity }}
                    >Skills-</motion.span>
                    <motion.span
                        initial={{ right: `${travelDistance}%` }}
                        animate={{ right: 0 }}
                        transition={{ ease: "linear", duration: 12, repeat: Infinity }}
                    >Skills-</motion.span>
                    <motion.span
                        initial={{ right: `${travelDistance}%` }}
                        animate={{ right: 0 }}
                        transition={{ ease: "linear", duration: 12, repeat: Infinity }}
                    >Skills-</motion.span>
                    <motion.span
                        initial={{ right: `${travelDistance}%` }}
                        animate={{ right: 0 }}
                        transition={{ ease: "linear", duration: 12, repeat: Infinity }}
                    >Skills-</motion.span>
                </div>
            </MarqueeStyles>
        </>
    )
}

export default Marque