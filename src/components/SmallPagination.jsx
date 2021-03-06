import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   gap: 10px;
   justify-content: center;
`
const Page = styled.span`
   cursor: pointer;
   color: ${props => props.currentPage ? '#aaa' : '#333' };
`
const Arrow = styled.div`
   cursor: pointer;
   color: orangered;
`

let SmallPagination = ({ totalCount, currentPage, setCurrentPage, portionSize = 5 }) => {
   let pages = []
   for (let i = 1; i <= totalCount; i++) {
      pages.push(i)
   }

   const portionCount = Math.ceil(totalCount / portionSize)
   let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   let rigthPortionPageNumber = portionNumber * portionSize

   useEffect(() => {
      setPortionNumber(1)
   }, [])

   return <Container >
      {portionNumber > 1 && <Arrow onClick={() => { setPortionNumber(portionNumber - 1) }}>&#10094;</Arrow>}
      {pages.length > 1 && pages
         .filter(p => {
            return p >= leftPortionPageNumber && p <= rigthPortionPageNumber
         })
         .map(page => {
            return <Page key={page} onClick={() => { setCurrentPage(page) }} currentPage={currentPage === page } >{page}</Page>
         })}
      {portionCount > portionNumber && <Arrow onClick={() => { setPortionNumber(portionNumber + 1) }} >&#10095;</Arrow>}
   </Container>
}

export default SmallPagination;