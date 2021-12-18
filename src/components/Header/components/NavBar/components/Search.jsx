import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
   const history = useHistory()
   const [keyWord, setKeyWord] = useState('')
   const handlerOnChange = (e) => {
      const value = e.target.value
      setKeyWord(value)
   }

   function redirectOn() {
      if (keyWord.length > 0) {
         setKeyWord('')
         return history.push(`/search?keyWord=${keyWord}`)
      }
   }
   function handleKeyPress(event) {
      if (keyWord.length > 0 && event.key === 'Enter') {
         setKeyWord('')
         return history.push(`/search?keyWord=${keyWord}`)
      }
   }

   return (
      <SearchContainer>
         <Input value={keyWord} onChange={handlerOnChange} type="text" placeholder='Поиск по ключевым словам' onKeyPress={e => { handleKeyPress(e) }} onBlur={redirectOn} />
         <Icon onClick={redirectOn}>
            <ion-icon name="search"></ion-icon>
         </Icon>
      </SearchContainer>
   )
}

export default Search