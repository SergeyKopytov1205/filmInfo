import { useState, useEffect } from "react"

const useFilteredObject = (data, key) => {
   const [filteredOject, setFilteredObjectSlice] = useState({})

   useEffect(() => {
      if (data) {
         const newObject = data.reduce((accum, item) => {
            if (!(item[key] in accum)) accum[item[key]] = []
            accum[item[key]].push(item)
            return accum
         }, [])
         setFilteredObjectSlice(newObject)
      }
   }, [data, key])

   return filteredOject
}

export default useFilteredObject