import React from "react";
import { Link } from "react-router-dom";
import translateProffession from "../../../utils/utils";
import styled from "styled-components";

const FilmsConteiner = styled.section`
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   & > :nth-child(odd) {
      background: #eee;
   }
`
const FilmContent = styled.div`
   padding: 10px;
   & h2 {
      color: #444;
      padding: 0 0 10px 0;
      margin: 0;
   }
`
const Customlink = styled(Link)`
   text-decoration: none;
   color: #333;
   & :hover {
      color: #830505;
   }
   & > span {
      color: orangered;
   }

`

const FeatFilms = ({ data }) => {
   return (
      <FilmsConteiner>
         {Object.keys(data).map((item, index) => {
            return (
               <FilmContent key={index}>
                  <h2>{translateProffession(item)}</h2>
                  {data[item].map((elem, index) => {
                     return <div key={index}>
                        <Customlink to={`/film/${elem.filmId}`}> <span>{elem.nameRu || elem.nameEn} </span> {elem.description ? `(${elem.description})` : ''}</Customlink>
                     </div>
                  })}
               </FilmContent>
            )
         }
         )}
      </FilmsConteiner>
   )
}
export default FeatFilms