import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
