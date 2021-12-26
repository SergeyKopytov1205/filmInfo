import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SectionPagination from "./Components/SectionPagination";

const Container = styled.section`
   display: flex;
   flex-direction: column;
   gap: 10px;
`

const Videos = React.memo(({ data, isLoading, fetchError }) => {

   const [url, setUrl] = useState('')

   useEffect(() => {
      if (data.items) {
         setUrl(data.items[0]?.url)
      }
   }, [data.items])

   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchError) {
      return <div>Some error</div>
   }

   return (
      <>
         {data.total > 0 && (
            <Container>
               {data.items && <SectionPagination data={data.items} currentPage={url} setCurrentPage={setUrl} portionSize={5} />}
               <video src={url} width='50%' controls />
            </Container>
         )}
      </>
   )
})

export default Videos