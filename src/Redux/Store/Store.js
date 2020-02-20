import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {rootReducer } from '../Reducers/Reducer'

const initializeStore = () => {
  const store = createStore(
    rootReducer, // Initializing root reducer
    //Redux DevTools for debugging application's state changes.
    //The extension provides power-ups for your Redux development workflow.Apart from Redux, 
    //it can be used with any other architectures which handle the state.
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default initializeStore;