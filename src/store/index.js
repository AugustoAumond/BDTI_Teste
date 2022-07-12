import { createStore, combineReducers } from "redux";
import listReducer from "./lists/list.reducer";

const rootReducer = combineReducers({
    list: listReducer,
    
});

const store = createStore(rootReducer)

export default store;