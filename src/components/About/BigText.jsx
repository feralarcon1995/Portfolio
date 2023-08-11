import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAnimations } from '../../hooks/useAnimations';

const BigTextStyles = styled.div`
padding: 0 4vw;
height:100vh;
display: flex;
flex-wrap: wrap;
align-content: center;
margin-bottom: 10vh;
.container{
    overflow: hidden;
    width: 100%;
    :nth-child(2){
        text-align: right;
    }
    :nth-child(3){
            padding-left: 15vw;
    }
    h2{
        text-transform: uppercase;
        font-size: calc(var(--VW)*11);
        line-height: 10vw;
        height: 10vw;
        overflow: hidden;
    }
}
`

const BigText = () => {
    const { transition, textReveal } = useAnimations()

    return (
        <BigTextStyles data-scroll-section className="big-text">
                <div className='container'>
                    <motion.h2
                        variants={textReveal}
                        initial='initial'
                        animate='animate'
                        transition={{ ...transition, delay: 3 }}
                    >Frontend</motion.h2>
                </div>
                <div className='container'>
                    <motion.h2
                        variants={textReveal}
                        initial='initial'
                        animate='animate'
                        transition={{ ...transition, delay: 3.2 }}
                    > Developer</motion.h2>
                </div>
                <div className='container'>
                    <motion.h2
                        variants={textReveal}
                        initial='initial'
                        animate='animate'
                        transition={{ ...transition, delay: 3.4 }}
                    >Based in </motion.h2>
                </div>
                <div className='container'>
                    <motion.h2
                        variants={textReveal}
                        initial='initial'
                        animate='animate'
                        transition={{ ...transition, delay: 3.6 }}
                    >Argentina.</motion.h2>
                </div>

        </BigTextStyles>


    )

}

export default BigText