import React from "react";
import styled from "styled-components";
import Pagination from "../../../components/Pagination";
import usePagination from "../../../hooks/usePagination";

const Container = styled.section`
   display: flex;
   flex-direction: column;
   gap: 10px;
`
const Title = styled.h3`
   color: #333;
   font-size: 1.2em;
`
const Content = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
`
const Image = styled.div`
   flex-basis: 300px;
   width: 300px;
   height: 200px;
   position: relative;
`
const Picture = styled.img`
   width: 100%;
   max-width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: 50% 0;
`

const Frames = ({ data, isLoading, fetchError, slug }) => {
   const [{ slicedObject, totalPage, currentPage }, setCurrentPage] = usePagination(data.frames, 20, slug)

   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchError) {
      return <div>Some error</div>
   }

   return (
      <>
         {slicedObject && (
            <Container>
               <Title>Кадры из фильма</Title>
               <Content>
                  {slicedObject.map((item, index) => {
                     return (
                        <Image key={index}>
                           <Picture src={item.preview} alt='frames' />
                        </Image>
                     )
                  })}
               </Content>
               <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={totalPage} />
            </Container>
         )}

      </>
   )

}

export default Frames