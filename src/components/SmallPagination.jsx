import React, { useEffect } from 'react';
import { useState } from 'react';

let SmallPagination = ({ totalCount, currentPage, setCurrentPage, portionSize = 5 }) => {
   let pages = []
   for (let i = 1; i <= totalCount; i++) {
      pages.push(i)
   }

   const portionCount = Math.ceil(totalCount / portionSize)
   let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   let rigthPortionPageNumber = portionNumber * portionSize

   useEffect(() => {
      setPortionNumber(1)
   }, [])

   return <div >
      {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prew</button>}
      {pages.length > 1 && pages
         .filter(p => {
            return p >= leftPortionPageNumber && p <= rigthPortionPageNumber
         })
         .map(page => {
            return <span key={page} onClick={() => { setCurrentPage(page) }}>{page}</span>
         })}
      {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }} >Next</button>}
   </div>
}

export default SmallPagination;