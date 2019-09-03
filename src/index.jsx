import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { Router } from 'react-router';
// import { createBrowserHistory } from 'history';

import rootReducer from './reducers';
import './index.css';
// import App from './App';
import Counter from './components/counter.component';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

// const customHistory = createBrowserHistory();

// ReactDOM.render(
//   <Router history={customHistory}>
//     <App />
//   </Router>,
//   document.getElementById('root'),
// );
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
