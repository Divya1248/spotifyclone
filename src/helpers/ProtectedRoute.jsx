import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContextApi } from '../Apis/AuthContent'
import { Fragment } from 'react';
import Spinner from '../Pages/Spinner/Spinner';

const ProtectedRoute = ({ Component: Component, ...parameters}) => {
    let USER = useContext(AuthContextApi);
    return (
      <Route
        {...parameters}
        render={props => {
          return (
            <Fragment>
              {USER === null ? (
                <Spinner />
              ) : (
                <Fragment>
                              {USER ? <Component {...props}/>: <Redirect to="/login"/> } 
                </Fragment>
              )}
            </Fragment>
          );
        }}
      />
    );
}

export default ProtectedRoute
