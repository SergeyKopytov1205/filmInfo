import React, { useEffect, useState } from "react";

const Seasons = ({ data, isLoading, fetchError, slug }) => {
   const [activePath, setActivePath] = useState(slug)
   useEffect(() => {
      if (activePath !== slug) {
         setActiveSeason(0)
         setActivePath(slug)
      }
   }, [slug, activePath])

   const [activeSeason, setActiveSeason] = useState(0)
   const [seasonData, setSeasonData] = useState(null)
   const isSerial = data.length !== 0 && data.total !== 0

   useEffect(() => {
      if (data.length !== 0) {
         const item = data.items[activeSeason]
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
            <div>
               {data.items.map((item, index) => {
                  return (
                     <div key={item.number} onClick={e => { setActiveSeason(index) }}>
                        <h3 >Сезон {item.number}</h3>
                     </div>

                  )
               })}
               <div>
                  {seasonData && seasonData.episodes.map(item => {
                     return (
                        <div key={item.episodeNumber}>
                           <h4>{`Эпизод ${item.episodeNumber} ${item.nameRu ? item.nameRu : ''}`}</h4>
                           <p>{item.synopsis}</p>
                           <div>Дата выхода: {item.releaseDate}</div>
                        </div>
                     )
                  })}
               </div>
            </div>

         )}
      </>
   )
}

export default Seasons