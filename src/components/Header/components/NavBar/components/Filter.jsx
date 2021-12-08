import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   color: ${props => props.active ? '#fff' : '#999'};
   font-size: 1.2em;
   font-weight: 600;
   cursor: pointer;
   
`
const Icon = styled.div`
   font-size: 1.2em;
`

const Filter = () => {
   const [active, setActive] = useState(false)

   const handlerOnClick = () => {
      setActive(!active)
   }

   return (
      <FilterContainer onClick={handlerOnClick} active={active}>
         <Icon>
            <ion-icon name="options"></ion-icon>
         </Icon>
         <div>Поиск по фильтру</div>
      </FilterContainer>
   )
}

export default Filter