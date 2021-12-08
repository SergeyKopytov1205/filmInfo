import React from "react";
import styled from "styled-components";
import Filter from "./components/Filter";
import ItemLink from "./components/LinkItem";
import Search from "./components/Search";

const Container = styled.div`
   position: relative;
   display: flex;
   margin-left: auto;
`
const List = styled.ul`
   display: flex;
   align-items: center;
   gap: 40px;
`


const Navbar = () => {
   return (
      <Container>
         <List>
            <ItemLink url='/' text='Лучшие' icon='thumbs-up' />
            <ItemLink url='/populars' text='Популярные' icon='heart' />
            <ItemLink url='/await' text='Ожидаемые' icon='time' />
            <Search />
            <Filter />
         </List>
      </Container>
   )
}


export default Navbar