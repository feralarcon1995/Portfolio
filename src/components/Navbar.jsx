import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const NavStyles = styled.div`

.logo, .works, .about{
    position: fixed;
    z-index: 20;
}
.logo{
    top: 2vw;
    left: 1.2vw;
    width: 3.2vw;
    height: 3.2vw;
    mix-blend-mode: normal;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        width: 7vw;
        height: 7vw;
    }
    svg{
        width: 100%;
        height: 100%;
        pointer-events: none;
        color: var(--black);
    }
}
.works, .about{
    transition: 0.3s all ease;
    transform: rotate(90deg);
    transform-origin: 0% 0%;
    right: -3vw;
    font-size: calc(var(--VW) *1.2);
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        font-size: calc(var(--VW) *3);
        right: -12vw;
    }
    :hover{
        -webkit-text-stroke: 0.1vw var(--black);
    }
}
.works{
    top: 2.2vw;
}
.about{
    bottom: 6.5vw;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        bottom: 13.5vw;
    }
}
`
const Navbar = () => {


    return (
        <NavStyles>

            <NavLink className="logo nav-nutton" to="/">
                FA
            </NavLink>
            <NavLink className="works nav-button" to="/works">
                Works
            </NavLink>

            <NavLink className=" about nav-button" to="/about" >
                About
            </NavLink>
        </NavStyles>
    )
}

export default Navbar