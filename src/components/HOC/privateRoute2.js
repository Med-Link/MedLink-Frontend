/* eslint-disable react/prop-types */
import React from 'react';
import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

const PrivateRoute2 = ({component: Component, ...rest}) => {
    return <Route {...rest} component={(props) => {
        const token = window.localStorage.getItem('token');
        if(token){
            return <Component {...props} />
        }else{
            return <Redirect to={`/pharmacysignin`} />
        }
    }} />
}

export default PrivateRoute2;