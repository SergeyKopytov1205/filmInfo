import React from "react";
import styled from "styled-components";
import Pagination from "../../../components/Pagination";
import useFilteredObject from "../../../hooks/useFilteredObject";
import usePagination from "../../../hooks/usePagination";

const Container = styled.section`
   display: flex;
   flex-direction: column;
   gap: 20px;
`
const Content = styled.div`
   h3 {
      font-size: 1.5em;
      color: #444;
      margin: 0;
      padding: 0 0 10px 0;
   }
   ul {
      display: flex;
      flex-direction: column;
      justify-content:center;
      gap: 5px;
   } li {
      list-style: none;
   } a {
      text-decoration: none;
      color: orangered;
   }
`

const Facts = ({ data, isLoading, fetchError }) => {
   const [filteredOject] = useFilteredObject(data.items, 'type')
   const [{ slicedObject: facts, totalPage: totalPageFacts, currentPage: currentPageFacts }, setCurrentPageFacts] = usePagination(filteredOject.FACT, 10)
   const [{ slicedObject: bloopers, totalPage: totalPageBloopers, currentPage: currentPageBloopers }, setCurrentPageBloopers] = usePagination(filteredOject.BLOOPER, 10)

   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchError) {
      return <div>Some error</div>
   }

   return (
      <Container>
         {facts.length > 0 && (
            <FactItem data={facts} totalPage={totalPageFacts} currentPage={currentPageFacts} setCurrentPage={setCurrentPageFacts} title='Факты о фильме' />
         )}
         {bloopers.length > 0 && (
            <FactItem data={bloopers} totalPage={totalPageBloopers} currentPage={currentPageBloopers} setCurrentPage={setCurrentPageBloopers} title='Киноляпы' />
         )}
      </Container>
   )
}

const FactItem = ({ data, title, totalPage, currentPage, setCurrentPage }) => {

   return (
      <>
         <Content>
            <h3>{title}</h3>
            {data && (
               <ul>
                  {data.map((item, index) => {
                     return (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item.text }} ></li>
                     )
                  })}
               </ul>
            )}

         </Content>
         <Pagination totalCount={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </>
   )
}

export default Facts