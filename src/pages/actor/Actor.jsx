import React from "react";

const Actor = ({ data, isLoading, fetchError }) => {

   if (isLoading) {
      return <div>Loading...</div>
   }

   if (fetchError) {
      return <div>Some error</div>
   }

   return (
      <div>
         <h1>{data.nameRu}</h1>
      </div>
   )
}

export default Actor