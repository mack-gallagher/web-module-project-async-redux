import Redux from 'redux';
import { connect } from 'react-redux';

import axios from 'axios';

export const CLEAR_OPEN = "CLEAR_OPEN";

export const GET_NEW_START = "GET_NEW_START";
export const GET_NEW_SUCCESS = 'GET_NEW_SUCCESS';
export const GET_NEW_FAILURE = "GET_NEW_FAILURE";

export const REMOVE_OPEN = "REMOVE_OPEN";
export const FAVORITE = "FAVORITE";
export const CLEAR_CHECKED = "CLEAR_CHECKED";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const TOGGLE_CHECKED = "TOGGLE_CHECKED";

export const clearOpen = () => {
  return {
           type: CLEAR_OPEN
         }
}

export const getNew = () => dispatch => {
  dispatch({ type: GET_NEW_START });
  axios.get('https://www.boredapi.com/api/activity')
    .then(res => {
      dispatch({ type: GET_NEW_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
    });
}

export const removeOpen = (id) => {
  return {
           type: REMOVE_OPEN,
           payload: id,
         }
}

export const favorite = (id) => {
  return {
           type: FAVORITE,
           payload: id,
         }
}

export const clearChecked = () => {
  return {
           type: CLEAR_CHECKED,
         };
}

export const toggleFavorite = (id) => {
  return {
           type: TOGGLE_FAVORITE,
           payload: id,
         };
}

export const toggleChecked = (id) => {
  return {
           type: TOGGLE_CHECKED,
           payload: id,
         };
}

