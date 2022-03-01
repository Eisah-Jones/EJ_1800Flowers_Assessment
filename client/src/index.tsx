import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';
import rootSaga from './sagas';
import './index.css';

// Prepare redux-saga store/middleware and inject dev tools
let store;
const sagaMiddleware = createSagaMiddleware();
if(process.env.NODE_ENV === "development") {
  const composeEnhancer = (
    (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] &&
      (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({
        trace: true,
        traceLimit: 25,
      })) || compose;
  store = createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
}
else
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const rootApp = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(rootApp, document.getElementById('root'));

// Can supply a function to log web vitals from application
// reportWebVitals();
