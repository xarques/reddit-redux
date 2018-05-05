import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducers from './reducers'

const loggerMiddleware = createLogger();

const configureStore = preloadedState => (
  createStore(
    rootReducers,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
);

export default configureStore;
