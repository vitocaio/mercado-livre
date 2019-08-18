import { GET_PRODUCT_LIST } from '../../actions/productsList';

const INITIAL_STATE = { data: {} };

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
