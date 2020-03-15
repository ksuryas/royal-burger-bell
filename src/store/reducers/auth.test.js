import authReducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
   it('should return the right initial state', () => {
        expect(authReducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null, 
            authRedirectPath: '/burger-builder'
        });   
   }); 
   it('should return the right initial state', () => {
    expect(authReducer({      
        token: null,
        userId: null,
        error: null, 
        authRedirectPath: '/burger-builder'
    }, { type: actionTypes.AUTH_SUCCESS, idToken: 'some-token', userId: 'some-userId' })).toEqual({        
        token: 'some-token',
        userId: 'some-userId',
        error: null, 
        authRedirectPath: '/burger-builder'
    });   
}); 
});