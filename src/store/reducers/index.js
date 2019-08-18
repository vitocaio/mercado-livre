import { combineReducers } from 'redux';
import Products from './products';

const rootReducer = combineReducers({
  products: Products,
});

export default rootReducer;
