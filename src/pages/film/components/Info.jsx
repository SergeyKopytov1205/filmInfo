import React from "react";
import styled from "styled-components";
import useObjectToString from "../../../hooks/useObjectToString";

const Container = styled.section`
   display: flex;
   align-items: flex-start; 
   gap: 20px;
`
const Poster = styled.div`
   flex: 1 0 240px;
   height: 320px;
   position: relative;
   border-radius: 10px;
   overflow: hidden;
   & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`
const Desc = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   flex-grow: 1;
   h1 {
      margin: 0;
      padding: 0;
      font-size: 2.5em;
      font-weight: 700;
      color: #333;
      text-transform: uppercase;
   }
   h2 {
      margin: 0;
      padding: 0;
      color: #444;
      font-style: italic;
      font-size: 1.5em;
   }
   p {
      color: #555;
      text-align: justify;
      font-size: 1.2em;
   }
`
const Aside = styled.aside`
   display: flex;
   flex-basis: 300px;
   flex-shrink: 0;
   flex-grow: 0;

   flex-direction: column;
   gap: 5px;
   padding: 10px;
   border-radius: 10px;
   background-color: #555;
   color: #ddd;
   font-size: 1.1em;
   div span:first-child {
      margin-right: 5px;
   }
`

const Info = ({ data, isLoading, fetchError }) => {

   const [countries] = useObjectToString(data.countries, 'country')
   const [genres] = useObjectToString(data.genres, 'genre')

   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchError) {
      return <div>Some error</div>
   }

   return (
      <Container>
         <Poster>
            <img src={data.posterUrl} alt={data.nameRu} />
         </Poster>
         <Desc>
            <h1>{data.nameRu} / {data.nameOriginal}</h1>
            <h2>{data.slogan}</h2>
            <p>{data.description}</p>
         </Desc>
         <Aside>
            <div>
               <span>Рейтинг КиноПоиск:</span>
               <span>{data.ratingKinopoisk}</span>
            </div>
            <div>
               <span>Год выпуска:</span>
               <span>{data.year}</span>
            </div>
            <div>
               <span>Продолжительность:</span>
               <span>{data.filmLength} мин.</span>
            </div>
            <div>
               <span>Страна:</span>
               <span>{countries}</span>
            </div>
            <div>
               <span>Жанр:</span>
               <span>{genres}</span>
            </div>
         </Aside>
      </Container>
   )
}

export default Info