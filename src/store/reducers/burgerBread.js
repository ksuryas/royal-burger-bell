import * as actionTypes from '../actions/actionTypes';
import * as utils from '../../shared/utils/allUtils';

const initialState = {
    breadTypes: null,
    breadPrice: 0,
    error: false,
    building: false
};

const breadTypePrices = {
    seeds: 0.5,
    plain: 0.2,
    glutenFree: 1.5,
    potato: 2.5,
    sliced: 1
};

const setBreadType = (state) => {
  const newBread = {
    breadTypes: {
        glutenFree: 0,
        plain: 0,
        potato: 0,
        seeds: 0,
        sliced: 0
    },
    error: false,
    breadPrice: 0,
    building: false
 };
   return utils.updateObject(state, newBread);
};

const replaceBreadType = (state, action) => {
    let updatedBreadType = { [action.breadType]: state.breadTypes[action.breadType] + 1 };
    let updatedBreadTypes = utils.updateObject(state.breadTypes, updatedBreadType);
    let updatedState = {
        breadTypes: updatedBreadTypes,
        breadPrice: state.breadPrice + breadTypePrices[action.breadType],
        building: true
    };
    return utils.updateObject(state, updatedState);
};

const burgerBreadReducer = (state = initialState, action) => {
    // const obj = {
    //     breadPrice: state.breadPrice,
    //     action: action,
    //     state: state
    // };
    switch(action.type) {
    case(actionTypes.SET_BREAD_TYPE):
      return setBreadType(state);
    case(actionTypes.REPLACE_BREAD_TYPE):
        return replaceBreadType(state, action);
    case(actionTypes.FETCH_FAILED_BREAD_TYPES):
        return utils.updateObject(state, {error: true});
    default:
          return state;
 };
};

export default burgerBreadReducer;