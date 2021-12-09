import React from 'react';
import {render} from 'react-dom';
import "./Global.css"
import App from './App';
import AuthProvider from './Apis/AuthContent';


render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);