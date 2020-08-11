import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reducer from './reducers/reducer';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


// function createStore(reducer) {
//   let state;
 
//   function dispatch(action) {
//     state = reducer(state, action);
//     render();
//   }
 
//   function getState() {
//     return state;
//   };
 
//   return {
//     dispatch,
//     getState
//   };
// };

// function render() {
//   let container = document.getElementById('container');
//   if(store.getState()) {
//     container.textContent = store.getState().join(' ')
//   } else {
//     throw new Error("the store's state has not been defined yet")
//   }
// };
const store = createStore(reducer, applyMiddleware(thunk))
window.store = store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
