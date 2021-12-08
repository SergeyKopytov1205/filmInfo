import { useState, useEffect } from "react";

const useSwitchPath = (path, currentPage) => {
   const [params, setParams] = useState({})
   const [title, setTitle] = useState('')

   useEffect(() => {
      switch (path) {
         case '/':
            setParams({ type: 'TOP_250_BEST_FILMS', page: currentPage })
            setTitle('Топ лучших фильмов')
            break;
         case '/populars':
            setParams({ type: 'TOP_100_POPULAR_FILMS', page: currentPage })
            setTitle('Топ популярных фильмов')
            break;
         case '/await':
            setParams({ type: 'TOP_AWAIT_FILMS', page: currentPage })
            setTitle('Топ ожидаемых фильмов')
            break;
         default:
            break;
      }
   }, [currentPage, path])

   return [params, title]
}

export default useSwitchPath