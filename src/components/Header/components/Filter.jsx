import React from "react";
import { useState } from "react";
import { Range, createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useHistory } from "react-router-dom";
import { stringify } from "query-string";
import styled from "styled-components";
import { handleOnChangeCheckBox } from "../../../utils/utils";

const FilterContainer = styled.div`
   padding: 20px 40px;
   background: #222;
`
const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 30px;
   color: #999;
   font-size: 1.2em;
`
const Wrapper = styled.div`
   overflow: hidden;
   padding: 0 30px;
   position: relative;
   :before{
      content: "";
      display: block;
      top: 0;
      left: 0;
      position: absolute;
      border: 10px solid transparent;
      border-right: 15px solid #999;
   }
   :after{
      content: "";
      display: block;
      right: 0;
      top: 0;
      position: absolute;
      border: 10px solid transparent;
      border-left: 15px solid #999;
   }
`
const SlyderFieldset = styled.div`
   display: flex;
   overflow-x: scroll;
   gap: 20px;
   ::-webkit-scrollbar {
  width: 0;
}
`
const Fieldset = styled.div`
   display: flex;
   justify-content: space-evenly;
   & > div {
      display: flex;
      gap: 40px;
   }
`
const StyledRange = styled.div`
   
   color: #fff;
   padding: 30px 40px 0;
   display: flex;
   justify-content: space-evenly;
   & > * {
      width: 30%;
      text-align: center;
   }

`
const Input = styled.input`
   display: none;
`
const Label = styled.label`
   cursor: pointer;
   flex: 1 0 auto;
   
`
const LabelText = styled.span`
   ${Input}:checked + && {
      color: #fff;
   }
`
const Button = styled.button`
   padding: 10px 30px;
   width: 30%;
   margin: 0 auto;
   border-radius: 10px;
   background: ${props => props.disabled ? '#999' : '#fff'};
   color: #222;
   border: none;
`

const Filter = ({ filterData, handlerOnClick }) => {
   const history = useHistory()
   const [checkedCountries, setCheckedCountires] = useState([])
   const [checkedGenres, setCheckedGenres] = useState([])
   const [checkedSort, setCheckedSort] = useState('RATING')
   const [checkedType, setCheckedType] = useState('ALL')
   const [rating, setRating] = useState([0, 10])
   const [years, setYears] = useState([1880, 2020])

   const SliderWithTooltip = createSliderWithTooltip(Range)

   const handlerSubmit = (event) => {
      event.preventDefault()
      const data = {
         country: checkedCountries.join(','),
         genre: checkedGenres.join(','),
         order: checkedSort,
         type: checkedType,
         ratingFrom: rating[0].toString(),
         ratingTo: rating[1].toString(),
         yearFrom: years[0].toString(),
         yearTo: years[1].toString(),
         page: 1
      }
      const queryStryng = stringify(data)
      handlerOnClick()
      history.push(`/search?${queryStryng}`)
      console.log(data);
   }

   const handleCheckCountries = (event) => {
      handleOnChangeCheckBox(event, checkedCountries, setCheckedCountires)
   }
   const handleCheckGenres = (event) => {
      handleOnChangeCheckBox(event, checkedGenres, setCheckedGenres)
   }
   const handleCheckSort = (event) => {
      setCheckedSort(event.target.value)
   }
   const handleCheckType = (event) => {
      setCheckedType(event.target.value)
   }

   return (
      <FilterContainer >
         <StyledForm onSubmit={handlerSubmit}>
            <Wrapper>
               <SlyderFieldset >
                  {filterData?.countries.map(item => {
                     return (
                        <Label key={item.id} checked={item.checked}> <Input type="checkbox" id={item.id} onChange={handleCheckCountries} /> <LabelText>{item.country}</LabelText> </Label>
                     )
                  })}
               </SlyderFieldset>
            </Wrapper>
            <Wrapper>
               <SlyderFieldset >
                  {filterData?.genres.map(item => {
                     return (
                        <Label key={item.id}> <Input type="checkbox" id={item.id} onChange={handleCheckGenres} /> <LabelText>{item.genre}</LabelText> </Label>
                     )
                  })}
               </SlyderFieldset>
            </Wrapper>
            <Fieldset>
               <div>
                  <Label > <Input type="radio" name="sort" value="RATING" onChange={handleCheckSort} checked={checkedSort === 'RATING'} /> <LabelText>По рэйтингу</LabelText> </Label>
                  <Label > <Input type="radio" name="sort" value="NUM_VOTE" onChange={handleCheckSort} checked={checkedSort === 'NUM_VOTE'} /> <LabelText>По количеству голосов</LabelText> </Label>
                  <Label > <Input type="radio" name="sort" value="YEAR" onChange={handleCheckSort} checked={checkedSort === 'YEAR'} /> <LabelText>По году релиза</LabelText> </Label>
               </div>
               <div>
                  <Label > <Input type="radio" name="type" value="FILM" onChange={handleCheckType} checked={checkedType === 'FILM'} /> <LabelText>Фильм</LabelText> </Label>
                  <Label > <Input type="radio" name="type" value="TV_SHOW" onChange={handleCheckType} checked={checkedType === 'TV_SHOW'} /> <LabelText>Шоу</LabelText> </Label>
                  <Label > <Input type="radio" name="type" value="ALL" onChange={handleCheckType} checked={checkedType === 'ALL'} /> <LabelText>Все</LabelText> </Label>
               </div>
            </Fieldset>
            <StyledRange>
               <div>
                  <SliderWithTooltip min={0} max={10} defaultValue={rating}
                     tipProps={{ visible: true }} onChange={setRating} />
                  <div>Рэйтинг</div>
               </div>
               <div>
                  <SliderWithTooltip min={1880} max={2020} defaultValue={years}
                     tipProps={{ visible: true }} onChange={setYears} />
                  <div>Период релиза</div>
               </div>
            </StyledRange>
            <Button disabled={checkedCountries.length < 1 || checkedGenres.length < 1} > Найти фильмы </Button>
         </StyledForm>
      </FilterContainer>
   )
}

export default Filter