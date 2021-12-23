import { getFilters } from "../api/api"

const SET_FILTER_DATA = 'SET_FILTER_DATA'
const SET_IS_LOADING_FILTER_DATA = 'SET_IS_LOADING_FILTER_DATA'
const SET_FETCH_ERROR_FILTER_DATA = 'SET_FETCH_ERROR_FILTER_DATA'
const SET_IS_ACTIVE_FILTER = 'SET_IS_ACTIVE_FILTER'

const initialState = {
   filterData: {
      genres: [],
      countries: []
   },
   isLoading: null,
   fetchError: null,
   isActiveFilter: false
}

export default function filterReducer(state = initialState, action) {

   switch (action.type) {
      case SET_FILTER_DATA:
         return {
            ...state,
            filterData: action.payload,
            isLoading: false
         }
      case SET_IS_LOADING_FILTER_DATA:
         return {
            ...state,
            isLoading: action.payload
         }
      case SET_FETCH_ERROR_FILTER_DATA:
         return {
            ...state,
            fetchError: action.payload
         }
      case SET_IS_ACTIVE_FILTER:
         return {
            ...state,
            isActiveFilter: action.payload
         }
      default:
         return state
   }
}

export const setFilterDataAC = (data) => ({ type: SET_FILTER_DATA, payload: data })
export const setIsLoadingFilterDataAC = (bool) => ({ type: SET_IS_LOADING_FILTER_DATA, payload: bool })
export const setFetchErrorFilterDataAC = (error) => ({ type: SET_FETCH_ERROR_FILTER_DATA, payload: error })
export const setIsActiveFilter = (bool) => ({ type: SET_IS_ACTIVE_FILTER, payload: bool })

export const getFilterInfo = () => {
   return async (dispatch) => {
      try {
         dispatch(setIsLoadingFilterDataAC(true))
         dispatch(setFilterDataAC(await getFilters()))
      } catch (error) {
         debugger
         console.log(error.message);
         dispatch(setFetchErrorFilterDataAC(error))
         dispatch(setIsLoadingFilterDataAC(false))
      }
   }
}