import React, { useEffect, useState } from "react";

const Videos = ({ data, isLoading, fetchError }) => {
   const [url, setUrl] = useState('')

   useEffect(() => {
      if (data.items) {
         setUrl(data.items[0].url)
      }
   }, [data.items])

   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchError) {
      return <div>Some error</div>
   }


   return (
      <div>
         <h3>Тизеры и трейлеры</h3>
         {data.items && data.items.map((item, index) => {
            return (
               <div onClick={e => { setUrl(item.url) }} key={index}>{item.name}</div>
            )
         })}
         <div>
            <video src={url} width='50%' controls></video>
         </div>
      </div>
   )
}

export default Videos