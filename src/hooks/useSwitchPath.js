import { useState, useEffect } from "react";
import { parse } from 'query-string';

const useSwitchPath = (location, currentPage) => {
   const path = location.pathname
   const [params, setParams] = useState({})
   const [query, setQuery] = useState('')
   const [title, setTitle] = useState('')

   useEffect(() => {
      switch (path) {
         case '/':
            setParams({ type: 'TOP_250_BEST_FILMS', page: currentPage })
            setTitle('Топ лучших фильмов')
            setQuery('/api/v2.2/films/top')
            break;
         case '/populars':
            setParams({ type: 'TOP_100_POPULAR_FILMS', page: currentPage })
            setTitle('Топ популярных фильмов')
            setQuery('/api/v2.2/films/top')
            break;
         case '/await':
            setParams({ type: 'TOP_AWAIT_FILMS', page: currentPage })
            setTitle('Топ ожидаемых фильмов')
            setQuery('/api/v2.2/films/top')
            break;
         case '/search':
            const parsed = parse(location.search)
            const query = Object.keys(parsed).includes('keyword') ? '/api/v2.1/films/search-by-keyword' : '/api/v2.2/films'
            setParams({ ...parsed, page: currentPage })
            setTitle('По запросу найдено')
            setQuery(query)
            break;
         default:
            break;
      }
   }, [currentPage, path, location.search])

   return [params, title, query]
}

export default useSwitchPath