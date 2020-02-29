import * as actionTypes from '../actions/actionTypes';
import * as utils from '../../shared/utils/allUtils';

const initialState = {
    token: null,
    userId: null,
    error: null, 
    authRedirectPath: '/burger-builder'
};

const authReducer = (state = initialState, action) => {
switch(action.type) {
    case(actionTypes.AUTH_START):
    return utils.updateObject(state, { error: null });

    case(actionTypes.AUTH_FAIL):
    return utils.updateObject(state, { error: action.error });

    case(actionTypes.AUTH_SUCCESS):
    return utils.updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null
    });
    
    case(actionTypes.AUTH_LOGOUT):
    return utils.updateObject(state, { token: null, userId: null });

    case(actionTypes.SET_AUTH_REDIRECT_PATH):
    return utils.updateObject(state, { authRedirectPath: action.path });
    
    default:
        return state;
};
};

export default authReducer;