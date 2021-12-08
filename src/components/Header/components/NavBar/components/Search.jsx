import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
   position: relative;
`
const Input = styled.input`
   padding: 5px;
   border-radius: 10px;
   width: 250px;
   outline-style: none;
   box-shadow: none;
   border-color: transparent;
`
const Icon = styled.div`
   position: absolute;
   right: 10px;
   top: 50%;
   transform: translateY(-50%);
   display: flex;
   justify-content: center;
   align-self: center;
   & ion-icon {
      color: #555;
      font-size: 1.2em;
      cursor: pointer;
   }
`

const Search = () => {
   const [keyWord, setKeyWord] = useState('')
   const handlerOnChange = (e) => {
      const value = e.target.value
      setKeyWord(value)
   }

   return (
      <SearchContainer>
         <Input value={keyWord} onChange={handlerOnChange} type="text" placeholder='Поиск по ключевым словам' />
         <Icon>
            <ion-icon name="search"></ion-icon>
         </Icon>
      </SearchContainer>
   )
}

export default Search