import { GET_PRODUCT_LIST, GET_PRODUCT_DETALS, GET_PRODUCT_DESCRIPTION } from '../../actions/products';

const INITIAL_STATE = { list: {}, detail: {} };

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return { ...state, list: action.payload };
    case GET_PRODUCT_DETALS:
      return { ...state, detail: action.payload };
    case GET_PRODUCT_DESCRIPTION:
        return { ...state, detailDescription: action.payload };
    default:
      return state;
  }
};
