import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import ProfileReducer from "./ProfileReducer";
import WalletsReducer from "./WalletsReducer";

let reducers = combineReducers({
    profile: ProfileReducer,
    wallets: WalletsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;