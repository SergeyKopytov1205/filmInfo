import { useState, useEffect } from "react";

const usePagination = (data, limit, slug) => {
   const [activeSlug, setActiveSlug] = useState(null)
   const [currentPage, setCurrentPage] = useState(1)
   const [slicedObject, setSlicedObject] = useState([])
   const [totalPage, setTotalPage] = useState()

   useEffect(() => {
      if (activeSlug !== slug) {
         setCurrentPage(1)
         setActiveSlug(slug)
      }
   }, [slug, activeSlug])

   useEffect(() => {
      let start = (currentPage - 1) * limit
      let end = start + limit
      if (data) {
         let newData = data.slice(start, end)
         setSlicedObject(newData)
         setTotalPage(Math.ceil(data.length / limit))
      }
      return () => {
         setSlicedObject([])
         setTotalPage()
      }
   }, [data, currentPage, limit])

   return [{ slicedObject, totalPage, currentPage }, setCurrentPage]
}

export default usePagination