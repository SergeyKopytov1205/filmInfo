import React from "react";
import styled from "styled-components";

const List = styled.ul`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   gap: 20px;
`
const Item = styled.li`
   cursor: pointer;
   list-style: none;
   font-size: 1.2em;
   width: 40px;
   height: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   border: 2px solid ${props => props.item === props.currentPage ? '#bbb' : '#333'};
   color: ${props => props.item === props.currentPage ? '#bbb' : '#333'};
`

const Pagination = ({ totalCount, currentPage, setCurrentPage }) => {
   const pages = []
   if (totalCount) {
      for (let index = 1; index <= totalCount; index++) {
         pages.push(index)
      }
   }

   if (pages.length < 2) {
      return null
   }

   return (
      <List>
         {pages.map(item => {
            return (
               <Item key={item} onClick={e => { setCurrentPage(item) }} item={item} currentPage={currentPage} >{item}</Item>
            )
         })}
      </List>
   )
}

export default Pagination