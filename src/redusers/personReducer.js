import { getPersonData } from "../api/api"

const SET_PERSON_DATA = 'SET_PERSON_DATA'
const SET_IS_LOADING_PERSON_DATA = 'SET_IS_LOADING_PERSON_DATA'
const SET_FETCH_ERROR_PERSON_DATA = 'SET_FETCH_ERROR_PERSON_DATA'
const RESET_PERSON_DATA = 'RESET_PERSON_DATA'

const initialState = {
   personData: [],
   isLoading: null,
   fetchError: null
}

export default function personReducer(state = initialState, action) {

   switch (action.type) {
      case SET_PERSON_DATA:
         return {
            ...state,
            personData: action.payload,
            isLoading: false
         }
      case SET_IS_LOADING_PERSON_DATA:
         return {
            ...state,
            isLoading: action.payload
         }
      case SET_FETCH_ERROR_PERSON_DATA:
         return {
            ...state,
            fetchError: action.payload
         }
      case RESET_PERSON_DATA:
         return {
            personData: [],
            isLoading: null,
            fetchError: null
         }
      default:
         return state
   }
}

export const setPersonDataAC = (data) => ({ type: SET_PERSON_DATA, payload: data })
export const setIsLoadingPersonDataAC = (bool) => ({ type: SET_IS_LOADING_PERSON_DATA, payload: bool })
export const setFetchErrorPersonDataAC = (error) => ({ type: SET_FETCH_ERROR_PERSON_DATA, payload: error })
export const resetPersonDataAC = () => ({ type: RESET_PERSON_DATA })

export const getPersonInfo = (id) => {
   return async (dispatch) => {
      try {
         dispatch(setIsLoadingPersonDataAC(true))
         dispatch(setPersonDataAC(await getPersonData(id)))
      } catch (error) {
         debugger
         console.log(error.message);
         dispatch(setFetchErrorPersonDataAC(error))
         dispatch(setIsLoadingPersonDataAC(false))
      }
   }
}