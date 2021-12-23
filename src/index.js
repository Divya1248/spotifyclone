import React from 'react';
import {render} from 'react-dom';
import "./Global.css"
import App from './App';
import AuthProvider from './Apis/AuthContent';
import MyFirstPortal from './Pages/MyFirstPortal';
import AudioContextProvider from './Apis/AudioContext';


render(
  <AudioContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AudioContextProvider>,
  document.getElementById("root")
);

// render(<MyFirstPortal/>, document.getElementById("root1"))