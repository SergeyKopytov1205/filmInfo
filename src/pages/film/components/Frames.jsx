import React from "react";
import Pagination from "../../../components/Pagination";
import usePagination from "../../../hooks/usePagination";

const Frames = ({ data, isLoading, fetchError, slug }) => {
   const [{ slicedObject, totalPage, currentPage }, setCurrentPage] = usePagination(data.frames, 20, slug)

   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchError) {
      return <div>Some error</div>
   }

   return (
      <div>
         <h1>Кадры из фильма</h1>
         {slicedObject && slicedObject.map((item, index) => {
            return (
               <div key={index}>
                  <img src={item.preview} alt='frames' />
               </div>
            )
         })}
         <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={totalPage} />
      </div>

   )

}

export default Frames