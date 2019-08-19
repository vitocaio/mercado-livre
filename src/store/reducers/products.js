import { GET_PRODUCT_LIST, GET_PRODUCT_DETALS } from '../../actions/products';

const INITIAL_STATE = { list: {} };

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return { ...state, list: action.payload };
    case GET_PRODUCT_DETALS:
      return { ...state, detail: action.payload };
    default:
      return state;
  }
};
