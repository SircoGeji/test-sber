import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import infoReducer from "./info-reducer";

let reducers = combineReducers({
    infoPage: infoReducer,
    form: formReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
