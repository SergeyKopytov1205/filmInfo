import React from "react";
import Navbar from "./components/NavBar/Navbar";
import styled from "styled-components";
import Logo from "./components/Logo";

const Container = styled.div`
   display: flex;
   align-items: center;
   background-color: #222;
   padding: 20px 40px;
`

const Header = () => {
   return (
      <Container>
         <Logo />
         <Navbar />
      </Container>

   )
}

export default Header