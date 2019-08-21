import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/products';

import BASEURL_MLAPI from '../../helpers/consts';
import mockListProducts from '../../mock/api/listProducts.json'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Product action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('+++ should call action getProductsList', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockListProducts,
      });
    });

    moxios.stubRequest(`${BASEURL_MLAPI}/sites/MLA/search?q=iphone}&limit=4&offset=0`, {
      status: 200,
      response: mockListProducts,
    })

    const expectedActions = [
      { type: actions.GET_PRODUCT_LIST, payload: mockListProducts },
    ];

    const store = mockStore({ });
    await store.dispatch(actions.getProductsList('iphone'));
    expect(store.getActions()).toEqual(expectedActions);
  });

});
