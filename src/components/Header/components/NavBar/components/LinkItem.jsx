import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Item = styled.li`
   list-style: none;
   & a {
      color: #999;
      text-decoration: none;
      font-size: 1.2em;
      font-weight: 600;
   }
   & a.active {
      color: #fff;
   }
`
const Content = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   & ion-icon {
      font-size: 1.2em;
   }
`

const ItemLink = ({ url, text, icon }) => {
   return (
      <Item>
         <NavLink exact to={url}>
            <Content>
               <ion-icon name={icon}></ion-icon>
               <span>{text}</span>
            </Content>
         </NavLink>
      </Item>
   )
}

export default ItemLink