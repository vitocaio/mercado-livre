import axios from 'axios';
import { BASEURL_MLAPI } from '../helpers/consts';
export const GET_PRODUCT_LIST = 'GET_REPOSITORYS';

export function getProducts(user = []) {
  return dispatch => axios.get(`${BASEURL_MLAPI}`)
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
