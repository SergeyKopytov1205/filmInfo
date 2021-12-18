import React from "react";
import FeatFilms from "./components/ FeatFilms";
import About from "./components/About";
import styled from "styled-components";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   padding: 40px;
`

const Actor = ({ data, isLoading, fetchError, films }) => {

   if (isLoading) {
      return <div>Loading...</div>
   }

   if (fetchError) {
      return <div>Some error</div>
   }

   return (
      <Container>
         <About data={data} />
         <FeatFilms data={films} />
      </Container>
   )
}

export default Actor