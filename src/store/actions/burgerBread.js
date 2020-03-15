import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const setBreadType = (bread) => {
    return {
        type: actionTypes.SET_BREAD_TYPE,
        breadType: bread
    };
};

export const replaceBreadType = (bread) => {
    return {
        type: actionTypes.REPLACE_BREAD_TYPE,
        breadType: bread
    };
};

export const fetchFailedBreadTypes = (error) => {
return {
    type: actionTypes.FETCH_FAILED_BREAD_TYPES,
    error: error
};
};

export const initBreadTypes = () => {
    return dispatch => {
        axios.get('https://mcburger-reactjs-app.firebaseio.com/breadTypes.json')
.then(response => {
    const res = response.data;
    console.log(res); 
    // dispatch(setBreadType(response.data));
})
.catch(error => {
    dispatch(fetchFailedBreadTypes(error.response));
   });
  };
 };