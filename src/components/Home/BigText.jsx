import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAnimations } from '../../hooks/useAnimations';

const BigTextStyles = styled.div`
height: 100vh;
   position:relative;
   display: flex;
   align-items: center;
   flex-wrap:wrap

   .containers{
   height: 80vh;
   }
   .container{
    text-transform:uppercase;
    width:100%;
    overflow:hidden;
    
    :nth-child(1){
        margin-left:8vw;
    }
    :nth-child(2){
        margin-left:12vw;
    }
    :nth-child(3){
        margin-left:18vw;
    }
    :nth-child(4){
        margin-left:8vw;
    }

    h2{
        
        font-size: 10vw;
        line-height: 9vw;
        height: 8vw;

    }
   }
`;

const BigText = () => {
    const { transition, textReveal } = useAnimations()

    return (
        <BigTextStyles>

            <div className="containers">
                <div className='container'>
                    <motion.h2
                        variants={textReveal}
                        initial='initial'
                        animate='animate'
                        transition={{ ...transition, delay: 1 }}
                    >Frontend</motion.h2>
                </div>
                <div className='container'>
                    <motion.h2
                        variants={textReveal}
                        initial='initial'
                        animate='animate'
                        transition={{ ...transition, delay: 1.2 }}
                    > Developer</motion.h2>
                </div>
                <div className='container'>
                    <motion.h2
                        variants={textReveal}
                        initial='initial'
                        animate='animate'
                        transition={{ ...transition, delay: 1.4 }}
                    >Based in </motion.h2>
                </div>
                <div className='container'>
                    <motion.h2
                        variants={textReveal}
                        initial='initial'
                        animate='animate'
                        transition={{ ...transition, delay: 1.6 }}
                    >Argentina.</motion.h2>
                </div>
            </div>


        </BigTextStyles>


    )

}

export default BigText