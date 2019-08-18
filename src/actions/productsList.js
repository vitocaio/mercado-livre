import axios from 'axios';
import { BASEURL_MLAPI } from '../helpers/consts';
export const GET_PRODUCT_LIST = 'GET_REPOSITORYS';

export function getProducts(query = 'query',offset = 0, limit = 10) {
  return dispatch => axios.get(`${BASEURL_MLAPI}/sites/MLA/search?q=​:${query}&limit=${limit}&offset=${offset}`)
    .then((resp) => {
      const data = resp.data || {};
      return dispatch({
        type: GET_PRODUCT_LIST,
        payload: {
          products: data,
        },
      });
    });
}
