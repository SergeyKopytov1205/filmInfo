import React from "react";
import { getTranslatedDate } from "../../../utils/utils";
import styled from "styled-components";

const AboutContainer = styled.section`
   display: flex;
   gap: 20px;
`
const Poster = styled.div`
   flex: 0 0 240px;
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
const Content = styled.div`
   display: flex;
   flex-direction: column;
   gap: 5px;
   & > * {
      margin: 0;
      padding: 0;
      color: #333;
   }
`

const About = ({ data }) => {
   let isMale = data.sex === 'MALE'
   let birthDescription = `${isMale ? 'Родился' : 'Родилась'} ${getTranslatedDate(data.birthday)} в ${data.birthplace}.`
   let deathDescription = data.death ? `${isMale ? 'Скончался' : 'Скончалась'} ${getTranslatedDate(data.death)} в ${data.deathplace} в возрасте ${data.age}.` : ''
   let lifeDescription = `${birthDescription} ${deathDescription}`

   return (
      <AboutContainer>
         <Poster>
            <img src={data.posterUrl} alt={data.nameRu || data.nameEn} />
         </Poster>
         <Content>
            <h1>{data.nameRu || data.nameEn}</h1>
            <h2>{data.profession}</h2>
            <p>{lifeDescription}</p>
            {data.facts && (
               data.facts.map((item, index) => {
                  return <p key={index}>{item}</p>
               })
            )}
         </Content>
      </AboutContainer>
   )
}

export default About