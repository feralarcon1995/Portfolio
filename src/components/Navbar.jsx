import {NavLink} from 'react-router-dom'
import styled from 'styled-components';

const NavStyles = styled.div`

.logo , .works, .about{
position:fixed;
z-index:220;

}




.logo{
    top:2vw;
    left:2vw;
    font-size:1.4vw;

}

.works, .about{
  transform: rotate(90deg);
  right -2vw;
  font-size: 1.4vw;
}


.works{
    top: 5vw;

}

.about{
    bottom:5vw;
}
`
const Navbar = () => {


    return (
        <NavStyles>

            <NavLink className="logo nav-nutton" to="/">
                Fernando Alarcon
            </NavLink>
            <NavLink className="works nav-button" to="/works">
                Works
            </NavLink>

            <NavLink className=" about nav-button" to="about" >
                About
            </NavLink>
        </NavStyles>
    )
}

export default Navbar