import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReview } from "../../../../redusers/reviewReducer";
import Reviews from "./Reviews";

const ReviewsContainer = ({ slug }) => {
   const stateReview = useSelector(state => state.review)
   const dispatch = useDispatch()
   const [currentPage, setCurrentPage] = useState(1)

   useEffect(() => {
      dispatch(getReview(slug, currentPage))
   }, [dispatch, slug, currentPage])

   return <Reviews isLoading={stateReview.isLoading} fetchError={stateReview.fetchError} data={stateReview.reviewData} setCurrentPage={setCurrentPage} />


}

export default ReviewsContainer