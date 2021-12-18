import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPremiers } from "../../redusers/premiersReducer";
import { getFilms, setCurrentPageFilmsAC } from "../../redusers/filmsReducer";
import useSwitchPath from '../../hooks/useSwitchPath'
import Home from "./Home";
import { getNextMonth } from "../../utils/utils";
import { useLocation } from "react-router-dom";

const HomeContainer = () => {
   const location = useLocation()
   const statePremiers = useSelector(state => state.premiers)
   const stateTopFilms = useSelector(state => state.topFilms)
   const dispatch = useDispatch()
   const [activePath, setActivePath] = useState(location.pathname)
   const [params, title, query] = useSwitchPath(location, stateTopFilms.currentPage)
   const setCurrentPage = (page) => {
      dispatch(setCurrentPageFilmsAC(page))
   }

   console.log(query);
   useEffect(() => {
      if (activePath !== location.pathname) {
         dispatch(setCurrentPageFilmsAC(1))
         setActivePath(location.pathname)
      }
   }, [dispatch, location.pathname, activePath])

   useEffect(() => {
      if (query.length > 0) {
         dispatch(getPremiers(getNextMonth(), `/api/v2.2/films/premieres`))
         dispatch(getFilms(params, query))
      }
   }, [dispatch, params, statePremiers.currentPage, query])

   return (
      <Home statePremiers={statePremiers} stateTopFilms={stateTopFilms} setCurrentPage={setCurrentPage} title={title} />
   )
}

export default HomeContainer;
