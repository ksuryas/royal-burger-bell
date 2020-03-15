import * as actionTypes from  '../actions/actionTypes';
import * as utils from '../../shared/utils/allUtils';

const initialState = {
    ingredients: null,
    totalPrice: 0,
    error: false,
    building: false
};

const ingredientPrices = {
    salad: 0.2,
    cheese: 0.5,
    meat: 1,
    bacon: 1.82,
    avacados: 1.16,
    tofu: 1.92
};

const addIng = (state, action) => {
    let updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    let updatedIngredients = utils.updateObject(state.ingredients, updatedIngredient);
    let updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + ingredientPrices[action.ingredientName],
        building: true
    };
    return utils.updateObject(state, updatedState);
};

const removeIng = (state, action) => {
    let updatedIngredient2 = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    let updatedIngredients2 = utils.updateObject(state.ingredients, updatedIngredient2);
    let updatedState2 = {
        ingredients: updatedIngredients2,
        totalPrice: state.totalPrice - ingredientPrices[action.ingredientName],
        building: true
    };
    return utils.updateObject(state, updatedState2);
};

const resetIng = (state, action) => {
    let updatedIngredient3 = { [action.ingredientName]: state.ingredients[action.ingredientName] - state.ingredients[action.ingredientName] };
    let updatedIngredients3 = utils.updateObject(state.ingredients, updatedIngredient3);
    let updatedState3 = {
        ingredients: updatedIngredients3,
        totalPrice: state.totalPrice - ingredientPrices[action.ingredientName] * state.ingredients[action.ingredientName],
        building: true
    };
    return utils.updateObject(state, updatedState3);
};

const setIngs = (state) => {
    return utils.updateObject(state, {
        ingredients: {
            salad: 0,
            cheese: 0,
            avacados: 0,
            tofu: 0,
            meat: 0,
            bacon: 0
        },
        error: false,
        totalPrice: 0,
        building: false
    });
}; 

const burgerBuilderReducer = (state = initialState, action) => {
switch(action.type) {
    case(actionTypes.ADD_INGREDIENT):
    return addIng(state, action);

    case(actionTypes.REMOVE_INGREDIENT):
    return removeIng(state, action);
    
    case(actionTypes.RESET_INGREDIENT):
    return resetIng(state, action);

    case(actionTypes.FETCH_FAILED_INGS): 
    return utils.updateObject(state, {error: true});
   
    case(actionTypes.SET_INGREDIENTS): 
        return setIngs(state); 

    default:
        return state;
    }
  };

export default burgerBuilderReducer;