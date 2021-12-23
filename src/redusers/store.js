import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import premiersReducer from "./premiersReducer";
import filmsReducer from "./filmsReducer";
import filmReducer from "./filmReducer";
import personReducer from "./personReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
   premiers: premiersReducer,
   topFilms: filmsReducer,
   filmData: filmReducer,
   person: personReducer,
   filter: filterReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))