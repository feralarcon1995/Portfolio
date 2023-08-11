import styled from "styled-components";
import  Panels  from "../components/Panels";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NotFoundStyles = styled(motion.main)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .content{
        text-align: center;
        h1, h2{
            display: block;
            margin: 1vh 0;
        }
        h1{
            font-size: calc(var(--VW)*20);
        }
        h2{
            font-size: calc(var(--VW)*5);
            a{
                text-decoration: underline;
            }
        }
    }
`

const NotFound = () => {
  return (
    <>
      <Panels />
      <NotFoundStyles
        initial={{ backgroundColor: "rgba(15, 14, 14,1)", pointerEvents: "none" }}
        animate={{ backgroundColor: "rgba(15, 14, 14,0)", pointerEvents: "unset" }}
        exit={{ opacity: [1, 1, 0], transition: { duration: 2, times: [0, 0.99, 1] } }}
      >
        <div className="content">
          <h1>404</h1>
          <h2>Did you get lost? No problem, <NavLink to="/">go home.</NavLink> </h2>
        </div>
      </NotFoundStyles>
    </>
  )
}

export default NotFound