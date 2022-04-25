import { combineReducers } from 'redux'
import { ProductReducer } from "../reducers/productReducer";

const reducers = combineReducers({
    allProducts:ProductReducer,
})

export default reducers;