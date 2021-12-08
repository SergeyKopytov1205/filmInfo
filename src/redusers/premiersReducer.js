import { getAllFilms } from "../api/api"

const SET_PREMIERS = 'SET_PREMIERS'
const SET_IS_LOADING_PREMIERS = 'SET_IS_LOADING_PREMIERS'
const SET_FETCH_ERROR_PREMIERS = 'SET_FETCH_ERROR_PREMIERS'
const SET_CARRENT_PAGE_PREMIERS = 'SET_CARRENT_PAGE_PREMIERS'
const RESET_PREMIERS = 'RESET_PREMIERS'

const initialState = {
   films: [],
   pagesCount: 0,
   isLoading: null,
   fetchError: null,
   currentPage: 1
}

export default function premiersReducer(state = initialState, action) {
   switch (action.type) {
      case SET_PREMIERS:
         return {
            ...state,
            films: action.payload.items,
            pagesCount: action.payload.pagesCount,
            isLoading: false
         }
      case SET_IS_LOADING_PREMIERS:
         return {
            ...state,
            isLoading: action.payload
         }
      case SET_FETCH_ERROR_PREMIERS:
         return {
            ...state,
            fetchError: action.payload
         }
      case SET_CARRENT_PAGE_PREMIERS:
         return {
            ...state,
            currentPage: action.payload
         }
      case RESET_PREMIERS:
         return {
            ...state,
            films: [],
            pagesCount: 0
         }
      default:
         return state
   }
}

export const setPremiersAC = (data) => ({ type: SET_PREMIERS, payload: data })

export const setIsLoadingPremiersAC = (bool) => ({ type: SET_IS_LOADING_PREMIERS, payload: bool })

export const setFetchErrorPremiersAC = (error) => ({ type: SET_FETCH_ERROR_PREMIERS, payload: error })

export const resetPremiersAC = () => ({ type: RESET_PREMIERS })

// const setCurrentPageAwaitFilmsAC = (page) => ({ type: SET_CARRENT_PAGE_PREMIERS, payload: page })

export const getPremiers = (params, query) => {
   return async (dispatch) => {
      try {
         dispatch(setIsLoadingPremiersAC(true))
         const response = await getAllFilms(params, query)
         dispatch(setPremiersAC(response))
      } catch (error) {
         debugger
         console.log(error.message);
         dispatch(setFetchErrorPremiersAC(error))
         dispatch(setIsLoadingPremiersAC(false))
      }
   }
}