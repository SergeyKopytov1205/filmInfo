import { getFilmData } from "../api/api"

const SET_FILM_DATA = 'SET_FILM_DATA'
const SET_IS_LOADING_FILM_DATA = 'SET_IS_LOADING_FILMS_DATA'
const SET_FETCH_ERROR_FILM_DATA = 'SET_FETCH_ERROR_FILMS_DATA'
const RESET_FILM_DATA = 'RESET_FILM_DATA'

const initialState = {
   filmInfo: {
      data: [],
      isLoading: null,
      fetchError: null
   },
   filmSeasons: {
      data: [],
      isLoading: null,
      fetchError: null
   },
   filmFacts: {
      data: [],
      isLoading: null,
      fetchError: null
   },
   filmDistrib: {
      data: [],
      isLoading: null,
      fetchError: null
   },
   filmBox_office: {
      data: [],
      isLoading: null,
      fetchError: null
   },
   filmVideos: {
      data: [],
      isLoading: null,
      fetchError: null
   },
   filmSimilars: {
      data: [],
      isLoading: null,
      fetchError: null
   },
   filmFrames: {
      data: [],
      isLoading: null,
      fetchError: null
   },
   filmReviews: {
      data: [],
      isLoading: null,
      fetchError: null
   },
   filmStaff: {
      data: [],
      isLoading: null,
      fetchError: null
   }
}

export default function filmReducer(state = initialState, action) {

   switch (action.type) {
      case SET_FILM_DATA:
         return { ...state, [action.item]: { ...state[action.item], data: action.payload, isLoading: false, fetchError: null } }
      case SET_IS_LOADING_FILM_DATA:
         return { ...state, [action.item]: { ...state[action.item], isLoading: action.payload } }
      case SET_FETCH_ERROR_FILM_DATA:
         return { ...state, [action.item]: { ...state[action.item], fetchError: action.payload } }
      case RESET_FILM_DATA:
         return initialState
      default:
         return state
   }
}

export const setFilmInfoAC = (data, item) => ({ type: SET_FILM_DATA, payload: data, item })
export const setIsLoadingFilmInfoAC = (bool, item) => ({ type: SET_IS_LOADING_FILM_DATA, payload: bool, item })
export const setFetchErrorFilmInfoAC = (error, item) => ({ type: SET_FETCH_ERROR_FILM_DATA, payload: error, item })
export const resetFilmDataAC = () => ({ type: RESET_FILM_DATA })

export const getFilmInfo = (id) => {
   const requestData = {
      filmInfo: `/api/v2.2/films/${id}`,
      filmSeasons: `/api/v2.2/films/${id}/seasons`,
      filmFacts: `/api/v2.2/films/${id}/facts`,
      filmDistrib: `/api/v2.2/films/${id}/distributions`,
      filmBox_office: `/api/v2.2/films/${id}/box_office`,
      filmVideos: `/api/v2.2/films/${id}/videos`,
      filmSimilars: `/api/v2.2/films/${id}/similars`,
      filmFrames: `/api/v2.1/films/${id}/frames`,
      filmReviews: `/api/v1/reviews?filmId=${id}`,
      filmStaff: `/api/v1/staff?filmId=${id}`
   }

   return async (dispatch) => {
      for (const item in requestData) {
         try {
            dispatch(setIsLoadingFilmInfoAC(true, item))
            dispatch(setFilmInfoAC(await getFilmData(requestData[item]), item))
         } catch (error) {
            debugger
            console.log(error.message);
            dispatch(setFetchErrorFilmInfoAC(error, item))
            dispatch(setIsLoadingFilmInfoAC(false, item))
         }
      }
   }
}





      // data: `/api/v2.2/films/${id}`,
      // seasons: `/api/v2.2/films/${id}/seasons`,
      // facts: `/api/v2.2/films/${id}/facts`,
      // distributions: `/api/v2.2/films/${id}/distributions`,
      // box_office: `/api/v2.2/films/${id}/box_office`,
      // videos: `/api/v2.2/films/${id}/videos`,
      // similars: `/api/v2.2/films/${id}/similars`,
      // frames: `/api/v2.1/films/${id}/frames`,
      // reviews: `/api/v1/reviews?filmId=${id}`,
      // staff: `/api/v1/staff?filmId=${id}`