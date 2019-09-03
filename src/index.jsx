import { applyMiddleware, createStore, compose } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

// import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer(history),
  composeEnhancer(applyMiddleware(routerMiddleware(history))),
);

// const customHistory = createBrowserHistory();

// ReactDOM.render(
//   <Router history={customHistory}>
//     <App />
//   </Router>,
//   document.getElementById('root'),
// );
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
