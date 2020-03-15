import * as actionTypes from './actionTypes';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const resetIngredient = (name) => {
    return {
        type: actionTypes.RESET_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ings) =>  {
return {
    type: actionTypes.SET_INGREDIENTS,
    ings: ings
};
};

export const fetchFailedIngs = (error) => {
return {
    type: actionTypes.FETCH_FAILED_INGS,
    error: error
};
};

export const initIngredients = () => {
    return {
        type: actionTypes.INIT_INGREDIENTS
    };
};