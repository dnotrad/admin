import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import ProfileReducer from "./ProfileReducer";

let reducers = combineReducers({
    profile: ProfileReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;