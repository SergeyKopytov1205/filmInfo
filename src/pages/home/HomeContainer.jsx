import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPremiers } from "../../redusers/premiersReducer";
import { getFilms, setCurrentPageFilmsAC } from "../../redusers/filmsReducer";
import useSwitchPath from '../../hooks/useSwitchPath'
import Home from "./Home";
import { getNextMonth } from "../../utils/utils";

const HomeContainer = ({ match }) => {
   const statePremiers = useSelector(state => state.premiers)
   const stateTopFilms = useSelector(state => state.topFilms)
   const dispatch = useDispatch()
   const [activePath, setActivePath] = useState(match.path)
   const [params, title] = useSwitchPath(match.path, stateTopFilms.currentPage)
   const setCurrentPage = (page) => {
      dispatch(setCurrentPageFilmsAC(page))
   }

   useEffect(() => {
      if (activePath !== match.path) {
         dispatch(setCurrentPageFilmsAC(1))
         setActivePath(match.path)
      }
   }, [dispatch, match.path, activePath])


   useEffect(() => {
      dispatch(getPremiers(getNextMonth(), `/api/v2.2/films/premieres`))
      dispatch(getFilms(params, '/api/v2.2/films/top'))
   }, [dispatch, params, statePremiers.currentPage])



   return (
      <Home statePremiers={statePremiers} stateTopFilms={stateTopFilms} setCurrentPage={setCurrentPage} title={title} />
   )
}

export default HomeContainer;
