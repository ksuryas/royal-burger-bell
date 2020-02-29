import * as actionTypes from '../actions/actionTypes';
import * as utils from '../../shared/utils/allUtils';

const initialState = {
    orders: [],
    loading: true,
    purchased: false   
};

const purchaseBurgerSuccess = (state, action) => {
const newOrder = utils.updateObject(action.orderData, {id: action.orderId});
   return utils.updateObject(state, {
       loading: false,
       purchased: true, 
       orders: state.orders.concat(newOrder)
    });
};

const orderReducer = (state = initialState, action) => {
switch(action.type) {
    default:
        return state;
    case(actionTypes.PURCHASE_INIT):
    return utils.updateObject(state, {purchased: false});
  
    case(actionTypes.PURCHASE_BURGER_START):
    return utils.updateObject(state, {loading: true});
  
    case(actionTypes.PURCHASE_BURGER_FAIL):
    return utils.updateObject(state, {loading: false});
  
    case(actionTypes.PURCHASE_BURGER_SUCCESS):
    return purchaseBurgerSuccess(state, action);

    case(actionTypes.FETCH_ORDERS_SUCCESS):
    return utils.updateObject(state, {orders: [action.orders], loading: false});
   
    case(actionTypes.FETCH_ORDERS_START):
    return utils.updateObject(state, {loading: true});
  
    case(actionTypes.FETCH_ORDERS_FAIL):
     return utils.updateObject(state, {loading: false});
  };
};

export default orderReducer;