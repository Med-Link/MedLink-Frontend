import axios from 'axios';
import { authConstants } from './constants';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { backendUrl } from '../urlConfig';
// import axios from "../helpers/axios";

export const login = (user) => {
  console.log("kkkkkkk");

  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post('http://localhost:4000/api/admin/signin', {
      ...user,
    });

    if (res.status === 200) {
      console.log(res.data);
      const { token, userdet } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userdet));
      // console.log(token,userdet);
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token, userdet,
        },
      });
    } else if (res.status === 400) {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const isuserLoggedIn = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token, user,
      },
    });
  } else {
    dispatch({
      type: authConstants.LOGIN_FAILURE,
      payload: { error: 'Failed to login' },
    });
  }
};

// export const signout = () => {
//   return async (dispatch) => {
//   console.log("gghjkkkk");
//   dispatch({ type: authConstants.LOGOUT_REQUEST });
//   const res = await axios.post('http://localhost:4000/api/admin/signout');

//   if (res.status === 200) {
//     localStorage.clear();
//     dispatch({ type: authConstants.LOGOUT_SUCCESS });
//   } else {
//     dispatch({
//       type: authConstants.LOGOUT_FAILURE,
//       payload: { error: res.data.error },
//     });
//   }
// };
// };
export const signout = () => async (dispatch) => {
      console.log('hhhhhhhh');
      dispatch({ type: authConstants.LOGOUT_REQUEST });
      const res = await axios.post(`http://localhost:4000/api/admin/signout`);

      if(res.status === 200){
          localStorage.clear();
          dispatch({ type: authConstants.LOGOUT_SUCCESS });
          return <Redirect to={'/'} />
      }else{
          dispatch({
              type: authConstants.LOGOUT_FAILURE,
              payload: { error: res.data.error }
          });
      }

}

