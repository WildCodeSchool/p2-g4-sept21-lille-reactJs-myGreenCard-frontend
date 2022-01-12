import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Reset />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
