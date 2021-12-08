import React from "react";
import { Link } from "react-router-dom";
import SmallPagination from "../../../components/SmallPagination";
import useFilteredObject from "../../../hooks/useFilteredObject";
import usePagination from "../../../hooks/usePagination";
import styled from "styled-components";

const Container = styled.section`
   display: flex;
   gap: 20px;
   flex-direction: column;
`
const Title = styled.h3`
   text-align: center;
   color: #444;
   font-size: 1.5em;
`
const Content = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: space-evenly;

`

const Staff = ({ data, isLoading, fetchError, slug }) => {
   const [filteredOject] = useFilteredObject(data, 'professionKey')
   const [{ slicedObject: directors, totalPage: totalPageDirectors, currentPage: currentPageDirectors }, setCurrentPageDirectors] = usePagination(filteredOject.DIRECTOR, 10, slug)
   const [{ slicedObject: actors, totalPage: totalPageActors, currentPage: currentPageActors }, setCurrentPageActors] = usePagination(filteredOject.ACTOR, 10, slug)
   const [{ slicedObject: composers, totalPage: totalPageComposers, currentPage: currentPageComposers }, setCurrentPageComposers] = usePagination(filteredOject.COMPOSER, 10, slug)
   const [{ slicedObject: design, totalPage: totalPageDesign, currentPage: currentPageDesign }, setCurrentPageDesign] = usePagination(filteredOject.DESIGN, 10, slug)
   const [{ slicedObject: editors, totalPage: totalPageEditors, currentPage: currentPageEditors }, setCurrentPageEditors] = usePagination(filteredOject.EDITOR, 10, slug)
   const [{ slicedObject: operators, totalPage: totalPageOperators, currentPage: currentPageOperators }, setCurrentPageOperators] = usePagination(filteredOject.OPERATOR, 10, slug)
   const [{ slicedObject: producers, totalPage: totalPageProducers, currentPage: currentPageProducers }, setCurrentPageProducers] = usePagination(filteredOject.PRODUCER, 10, slug)
   const [{ slicedObject: translators, totalPage: totalPageTranslators, currentPage: currentPageTranslators }, setCurrentPageTranslators] = usePagination(filteredOject.TRANSLATOR, 10, slug)
   const [{ slicedObject: voiceDirectors, totalPage: totalPageVoiceDirectors, currentPage: currentPageVoiceDirectors }, setCurrentPageVoiceDirectors] = usePagination(filteredOject.VOICE_DIRECTOR, 10, slug)
   const [{ slicedObject: writers, totalPage: totalPageWriters, currentPage: currentPageWriters }, setCurrentPageWriters] = usePagination(filteredOject.WRITER, 10, slug)

   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchError) {
      return <div>Some error...</div>
   }

   return (
      <Container>
         <Title>Над фильмом работали</Title>
         <Content>
            <StaffItem data={directors} title='Режиссеры' totalPage={totalPageDirectors} currentPage={currentPageDirectors} setCurrentPage={setCurrentPageDirectors} />
            <StaffItem data={actors} title='Актеры' totalPage={totalPageActors} currentPage={currentPageActors} setCurrentPage={setCurrentPageActors} />
            <StaffItem data={composers} title='Композиторы' totalPage={totalPageComposers} currentPage={currentPageComposers} setCurrentPage={setCurrentPageComposers} />
            <StaffItem data={design} title='Дизайнеры' totalPage={totalPageDesign} currentPage={currentPageDesign} setCurrentPage={setCurrentPageDesign} />
            <StaffItem data={editors} title='Редакторы' totalPage={totalPageEditors} currentPage={currentPageEditors} setCurrentPage={setCurrentPageEditors} />
            <StaffItem data={operators} title='Операторы' totalPage={totalPageOperators} currentPage={currentPageOperators} setCurrentPage={setCurrentPageOperators} />
            <StaffItem data={producers} title='Продюсеры' totalPage={totalPageProducers} currentPage={currentPageProducers} setCurrentPage={setCurrentPageProducers} />
            <StaffItem data={translators} title='Переводчики' totalPage={totalPageTranslators} currentPage={currentPageTranslators} setCurrentPage={setCurrentPageTranslators} />
            <StaffItem data={voiceDirectors} title='Режиссеры дубляжа' totalPage={totalPageVoiceDirectors} currentPage={currentPageVoiceDirectors} setCurrentPage={setCurrentPageVoiceDirectors} />
            <StaffItem data={writers} title='Сценаристы' totalPage={totalPageWriters} currentPage={currentPageWriters} setCurrentPage={setCurrentPageWriters} />
         </Content>
      </Container>
   )
}

export default Staff

const Card = styled.div`
   flex-basis: 200px;
   text-align: center;
`
const CardTitle = styled.h4`
   color: #555;
   font-size: 1.1em;
   margin-bottom: 10px;
`
const CardList = styled.ul`
   display: flex;
   gap: 10px;
   flex-direction: column;
`
const CardItem = styled.li`
   list-style: none;
   display: flex;
   align-items: center;
   gap: 10px;
`
const CardImage = styled.div`
   display: inline-block;
   vertical-align: middle;
   width: 30px;
   height: 30px;
   overflow:hidden;
   border-radius: 5px;
   & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`
const CardLink = styled(Link)`
   text-decoration: none;
   color: orangered;
   font-size: 1em;
`

const StaffItem = ({ data, title, totalPage, currentPage, setCurrentPage }) => {
   if (data.length) {
      return (
         <Card>
            <CardTitle>{title}</CardTitle>
            <CardList>
               {data.map(item => {
                  return (
                     <CardItem key={item.staffId}>
                        <CardImage>
                           <img src={item.posterUrl} alt={item.nameRu || item.nameEn} />
                        </CardImage>
                        <CardLink to={`/name/${item.staffId}`} >{item.nameRu || item.nameEn}</CardLink>
                     </CardItem>
                  )
               })}
            </CardList>
            <SmallPagination totalCount={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
         </Card>
      )
   }
   return null
}