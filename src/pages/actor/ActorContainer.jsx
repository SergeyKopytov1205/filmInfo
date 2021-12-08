import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonInfo, resetPersonDataAC } from "../../redusers/personReducer";
import Actor from "./Actor";

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

   return <Actor data={person.personData} isLoading={person.isLoading} fetchError={person.fetchError} />
}
export default ActorContainer