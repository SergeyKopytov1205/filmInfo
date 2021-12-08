import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledLink = styled(Link)`
   text-decoration: none;
`
const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   font-weight: 600;
   letter-spacing: 0.1em;
   color: #fff;
   text-decoration: none;
`
const Number = styled.div`
   font-size: 3em;
   text-decoration: none;
`
const Description = styled.div`
   font-size: 1.2em;
   width: min-content;
`

const Logo = () => {
   return (
      <StyledLink to='/'  >
         <Container>
            <Number >
               #3
            </Number>
            <Description >
               Training Project
            </Description>
         </Container>
      </StyledLink>
   )
}

export default Logo