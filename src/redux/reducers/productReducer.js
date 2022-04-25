import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    products: [],
}
export const ProductReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        
        // case ActionTypes.SET_PRODUCTS_ID:
        //     return{...state,id:payload};
        
        case ActionTypes.CREATE_PRODUCT:
            return{
                ...state,payload
            }

        case ActionTypes.DELETE_PRODUCT:
            return {
                ...state,payload
            }

        default:
            return state;
    }
}