import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import { HashRouter } from "react-router-dom";
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
    <HashRouter>
      <Container>
        <Header />
        <Routes />
        <Footer />
      </Container>
    </HashRouter>
  );
}

export default App;
