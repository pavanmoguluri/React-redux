import { ActionTypes } from "../constants/actionTypes"

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload :products,
    };
}

export const createProduct = (products) => {
    return {
        type : ActionTypes.CREATE_PRODUCT,
        payload :products,
    };
}

export const deleteProdct = (id) => {
    return {
        type : ActionTypes.DELETE_PRODUCT,
        payload : id,
    };
}
