import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonInfo, resetPersonDataAC } from "../../redusers/personReducer";
import Actor from "./Actor";
import useFilteredObject from "../../hooks/useFilteredObject";

const ActorContainer = ({ match }) => {
   const personId = match.params.slug
   const person = useSelector(state => state.person)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getPersonInfo(personId))
      return () => {
         dispatch(resetPersonDataAC())
      }
   }, [dispatch, personId])

   const profKeyOfData = useFilteredObject(person.personData.films, 'professionKey')

   return <Actor data={person.personData} films={profKeyOfData} isLoading={person.isLoading} fetchError={person.fetchError} />
}
export default ActorContainer