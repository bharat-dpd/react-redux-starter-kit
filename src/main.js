import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);
render((
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
), document.getElementById('root'));
