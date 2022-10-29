import { combineReducers } from 'redux';
import storeReducer from './store/storeReducer';

const rootReducer = combineReducers({
  store: storeReducer,
});

export default rootReducer;
