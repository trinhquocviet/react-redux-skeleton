import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import combineReducers from './reducers';


const initialState = {};
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__; //eslint-disable-line
  const logger = createLogger({ collapsed: true, duration: true });

  middleware.push(logger);
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(combineReducers, initialState, composedEnhancers);

export default store;
