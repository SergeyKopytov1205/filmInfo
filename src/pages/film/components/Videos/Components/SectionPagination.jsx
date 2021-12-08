import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   gap: 10px;
   justify-content: start;
`
const Page = styled.div`
   cursor: pointer;
   color: ${props => props.currentPage ? '#aaa' : '#333'};
`
const Arrow = styled.div`
   cursor: pointer;
   color: orangered;
`

let SectionPagination = ({ data, currentPage, setCurrentPage, portionSize = 10 }) => {

   const portionCount = Math.ceil(data?.length / portionSize)
   let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   let rigthPortionPageNumber = portionNumber * portionSize

   useEffect(() => {
      setPortionNumber(1)
   }, [])

   return <Container >
      {portionNumber > 1 && <Arrow onClick={() => { setPortionNumber(portionNumber - 1) }}>&#10094;</Arrow>}
      {data?.length > 1 && data
         .filter((item, index) => {
            return index + 1 >= leftPortionPageNumber && index + 1 <= rigthPortionPageNumber
         })
         .map((item, index) => {
            return (
               <Page onClick={e => { setCurrentPage(item.url) }} key={item.url} currentPage={currentPage === item.url} ><h4>{item.name}</h4></Page>
            )
         })}
      {portionCount > portionNumber && <Arrow onClick={() => { setPortionNumber(portionNumber + 1) }} >&#10095;</Arrow>}
   </Container>
}

export default SectionPagination;