import axios from 'axios';
import { BASEURL_MLAPI } from '../helpers/consts';
export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const GET_PRODUCT_DETALS = 'GET_PRODUCT_DETALS';
export const GET_PRODUCT_DESCRIPTION = 'GET_PRODUCT_DESCRIPTION';

export function getProductsList(query = 'query',offset = 0, limit = 4) {
  return dispatch => axios.get(`${BASEURL_MLAPI}/sites/MLA/search?q=​:${query}&limit=${limit}&offset=${offset}`)
    .then((resp) => {
      const data = resp.data || {};
      return dispatch({
        type: GET_PRODUCT_LIST,
        payload: data,
      });
    });
}

export function getProductsDetails(id) {
  return dispatch => axios.get(`${BASEURL_MLAPI}/items/${id}`)
    .then((resp) => {
      const data = resp.data || {};
      return dispatch({
        type: GET_PRODUCT_DETALS,
        payload: data,
      });
    });
}

export function getProductsDetailsDescription(id) {
  return dispatch => axios.get(`${BASEURL_MLAPI}/items/${id}/descriptions`)
    .then((resp) => {
      const data = resp.data || {};
      return dispatch({
        type: GET_PRODUCT_DESCRIPTION,
        payload: data,
      });
    });
}
