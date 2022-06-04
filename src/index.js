import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';


import App from './App';

import './style.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(reducer)}>
    <App />
    <ToastContainer />
  </Provider>
);

