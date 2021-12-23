import React from "react";
import styled from "styled-components";

const Item = styled.li`
   list-style: none;
`
const Content = styled.div`
   cursor: pointer;
   display: flex;
   align-items: center;
   gap: 10px;
   color: ${props => props.isActive ? '#fff' : '#999'} ;
   text-decoration: none;
   font-size: 1.2em;
   font-weight: 600;
   & ion-icon {
      font-size: 1.2em;
   }
`

const ItemFilter = ({ text, icon, handlerOnClick, isActive }) => {
   return (
      <Item onClick={handlerOnClick}>
         <Content isActive={isActive} >
            <ion-icon name={icon}></ion-icon>
            <span>{text}</span>
         </Content>
      </Item>
   )
}

export default ItemFilter