import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/NavBar/Navbar";
import styled from "styled-components";
import Logo from "./components/Logo";
import Filter from "./components/Filter";
import { getFilterInfo, setIsActiveFilter } from "../../redusers/filterReducer";
import { useEffect } from "react";

const Container = styled.div`
   display: flex;
   align-items: center;
   background-color: #222;
   padding: 20px 40px;
   position: relative;
`

const Header = () => {
   const stateFilter = useSelector(state => state.filter)
   const dispatch = useDispatch()

   const handlerOnClick = () => {
      dispatch(setIsActiveFilter(!stateFilter.isActiveFilter))
   }

   useEffect(() => {
      dispatch(getFilterInfo())
   }, [dispatch])

   return (
      <>
         <Container>
            <Logo />
            <Navbar isActive={stateFilter.isActiveFilter} handlerOnClick={handlerOnClick} />
         </Container>
         {stateFilter.isActiveFilter && <Filter filterData={stateFilter.filterData} handlerOnClick={handlerOnClick} />}
      </>
   )
}

export default Header