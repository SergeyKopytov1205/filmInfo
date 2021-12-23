import { getAllFilms } from "../api/api"

const SET_FILMS = 'SET_FILMS'
const SET_IS_LOADING_FILMS = 'SET_IS_LOADING_FILMS'
const SET_FETCH_ERROR_FILMS = 'SET_FETCH_ERROR_FILMS'
const SET_CARRENT_PAGE_FILMS = 'SET_CARRENT_PAGE_FILMS'
const RESET_DATA = 'RESET_DATA'

const initialState = {
   films: [],
   pagesCount: 0,
   isLoading: null,
   fetchError: null,
   currentPage: 1
}

export default function filmsReducer(state = initialState, action) {
   switch (action.type) {
      case SET_FILMS:
         return {
            ...state,
            films: action.payload.films || action.payload.items,
            pagesCount: action.payload.pagesCount,
            isLoading: false
         }
      case SET_IS_LOADING_FILMS:
         return {
            ...state,
            isLoading: action.payload
         }
      case SET_FETCH_ERROR_FILMS:
         return {
            ...state,
            fetchError: action.payload
         }
      case SET_CARRENT_PAGE_FILMS:
         return {
            ...state,
            currentPage: action.payload
         }
      case RESET_DATA:
         return {
            films: [],
            pagesCount: 0,
            isLoading: null,
            fetchError: null,
            currentPage: 1
         }
      default:
         return state
   }
}

export const setFilmsAC = (data) => ({ type: SET_FILMS, payload: data })

export const setIsLoadingFilmsAC = (bool) => ({ type: SET_IS_LOADING_FILMS, payload: bool })

export const setFetchErrorFilmsAC = (error) => ({ type: SET_FETCH_ERROR_FILMS, payload: error })

export const setCurrentPageFilmsAC = (page) => ({ type: SET_CARRENT_PAGE_FILMS, payload: page })

export const resetDataAC = () => ({ type: RESET_DATA })

export const getFilms = (params, query) => {
   return async (dispatch) => {
      try {
         dispatch(setIsLoadingFilmsAC(true))
         const response = await getAllFilms(params, query)
         dispatch(setFilmsAC(response))
      } catch (error) {
         debugger
         console.log(error.message);
         dispatch(setFetchErrorFilmsAC(error))
         dispatch(setIsLoadingFilmsAC(false))
      }
   }
}