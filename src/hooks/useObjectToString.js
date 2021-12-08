import { useState, useEffect } from "react";

const useObjectToString = (object, value) => {
   const [string, setString] = useState('')

   useEffect(() => {
      if (object) {
         const array = []
         object.forEach(item => {
            array.push(item[value]);
         })
         setString(array.join(', '))
      }
   }, [object, value])


   return [string]
}

export default useObjectToString