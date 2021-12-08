import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmInfo, resetFilmDataAC } from "../../redusers/filmReducer";
import Film from "./Film";

const FilmContainer = ({ match }) => {
   const slug = match.params.slug
   const dispatch = useDispatch()
   const stateFilm = useSelector(state => state.filmData)
   useEffect(() => {
      dispatch(getFilmInfo(slug))
      return () => {
         dispatch(resetFilmDataAC())
      }
   }, [dispatch, slug])
   return <Film state={stateFilm} slug={slug} />
}
export default FilmContainer