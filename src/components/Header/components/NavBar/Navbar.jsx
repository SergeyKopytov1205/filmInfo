import React from "react";
import styled from "styled-components";
import ItemFilter from "./components/FilterItem";
import ItemLink from "./components/LinkItem";
import Search from "./components/Search";

const Container = styled.div`
   display: flex;
   margin-left: auto;
`
const List = styled.ul`
   display: flex;
   align-items: center;
   gap: 40px;
`


const Navbar = ({isActive, handlerOnClick}) => {
   


   return (
      <Container >
         <List>
            <ItemLink url='/' text='Лучшие' icon='thumbs-up' />
            <ItemLink url='/populars' text='Популярные' icon='heart' />
            <ItemLink url='/await' text='Ожидаемые' icon='time' />
            <Search />
            <ItemFilter handlerOnClick={handlerOnClick} url='#' text='Поиск по фильтру' icon='options' isActive={isActive} />
         </List>
      </Container>
   )
}


export default Navbar