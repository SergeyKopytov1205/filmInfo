import { getReviewData } from "../api/api"

const SET_REVIEW_DATA = 'SET_REVIEW_DATA'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_LOADING_REVIEW_DATA = 'SET_IS_LOADING_REVIEW_DATA'
const SET_FETCH_ERROR_REVIEW_DATA = 'SET_FETCH_ERROR_REVIEW_DATA'

const initialState = {
   reviewData: {},
   isLoading: null,
   fetchError: null
}

export default function reviewReducer(state = initialState, action) {

   switch (action.type) {
      case SET_REVIEW_DATA:
         return {
            ...state,
            reviewData: action.payload,
            isLoading: false
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            reviewData: {
               ...state.reviewData,
               page: action.payload
            }
         }
      case SET_IS_LOADING_REVIEW_DATA:
         return {
            ...state,
            isLoading: action.payload
         }
      case SET_FETCH_ERROR_REVIEW_DATA:
         return {
            ...state,
            fetchError: action.payload
         }
      default:
         return state
   }
}

export const setReviewDataAC = (data) => ({ type: SET_REVIEW_DATA, payload: data })
export const setCurrentPage = (num) => ({ type: SET_CURRENT_PAGE, payload: num })
export const setIsLoadingReviewDataAC = (bool) => ({ type: SET_IS_LOADING_REVIEW_DATA, payload: bool })
export const setFetchErrorReviewDataAC = (error) => ({ type: SET_FETCH_ERROR_REVIEW_DATA, payload: error })

export const getReview = (id, page) => {
   return async (dispatch) => {
      try {
         dispatch(setIsLoadingReviewDataAC(true))
         dispatch(setReviewDataAC(await getReviewData(id, page)))
      } catch (error) {
         debugger
         console.log(error.message);
         dispatch(setFetchErrorReviewDataAC(error))
         dispatch(setIsLoadingReviewDataAC(false))
      }
   }
}