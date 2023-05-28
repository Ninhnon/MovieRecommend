// store.js

import {createStore, combineReducers} from 'redux';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
});

const store = createStore(rootReducer);

export default store;
