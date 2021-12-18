import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SectionPagination from "./Components/SectionPagination";
import { getTranslatedDate } from "../../../../utils/utils";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
`
const Content = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`
const Episod = styled.div`
   display: flex;
   flex-direction: column;
   gap: 5px;
   & h4 {
      color: #444;
      font-size: 1em;
   }
   & p {
      font-style: italic;
      font-size: 1em;
   }
   & div {
      color: orangered;
   }
`


const Seasons = ({ data, isLoading, fetchError, slug }) => {
   const [activePath, setActivePath] = useState(slug)
   useEffect(() => {
      if (activePath !== slug) {
         setActiveSeason(1)
         setActivePath(slug)
      }
   }, [slug, activePath])

   const [activeSeason, setActiveSeason] = useState(1)
   const [seasonData, setSeasonData] = useState(null)
   const isSerial = data.length !== 0 && data.total !== 0

   useEffect(() => {
      if (data.length !== 0) {
         const item = data.items[activeSeason - 1]
         setSeasonData(item)
      }
   }, [data, activeSeason])

   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchError) {
      return <div>Some error</div>
   }

   return (
      <>
         {isSerial && (
            <Container>
               <SectionPagination data={data.items} currentPage={activeSeason} setCurrentPage={setActiveSeason} portionSize={2} />
               <Content>
                  {seasonData && seasonData.episodes.map(item => {
                     return (
                        <Episod key={item.episodeNumber}>
                           <h4>{`Эпизод ${item.episodeNumber} ${item.nameRu ? item.nameRu : ''}`}</h4>
                           {item.synopsis && <p>{item.synopsis}</p>}
                           <div>Дата выхода: {getTranslatedDate(item.releaseDate)}</div>
                        </Episod>
                     )
                  })}
               </Content>
            </Container>
         )}
      </>
   )
}

export default Seasons