import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
import styled from 'styled-components';

//icons
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const NavStyles = styled.div`

.logo, .works, .nav-footer{
    position: fixed;
    z-index: 20;
    color:#dbecff;
}
.logo{
    top: 2vw;
    left: 1.2vw;
    mix-blend-mode: normal;
    display:flex;
    align-items:center;
    gap:2rem;
    font-size:2rem;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        font-size:1rem;

    }
}
.works{
    transition: 0.3s all ease;
    right: 2vw;
    font-size: calc(var(--VW) *1.2);
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        font-size: calc(var(--VW) *3);
    }
    :hover{
        -webkit-text-stroke: 0.1vw #fff;
    }
}
.works{
    top: 2.2vw;
}
.nav-footer{
    postion:absolute;
    bottom:2vw;
    left: 1.2vw;
    display:flex;
    align-items:center;
    gap:2rem;
    font-size:2rem;

    a{
        padding:0;
        svg{
            pointer-events: none;
            mix-blend-mode: normal;
            color: var(--black);
            background-color: var(--bluelight);
            border-radius:50%;
            &:hover{
                color: var(--bluelight);
                background-color:var(--black);
                transform: scale(0.7);
                        }
            }
    }
    
    
}


`
const Navbar = () => {


    return (
        <NavStyles>
                <NavLink className="logo nav-button" to="/">
                    FA
                </NavLink>
            <NavLink className="works nav-button" to="/works">
                Works
            </NavLink>
            <div className="nav-footer">
                <a
                    href="https://www.linkedin.com/in/feralarcon1995/" target="_blank" rel="noreferrer" className='nav-link'>
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/feralarcon1995" target="_blank" rel="noreferrer" className='nav-link'>
                    <BsGithub />
                </a>
            </div>
        </NavStyles>
    )
}

export default Navbar