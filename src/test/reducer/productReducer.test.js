import reducer from '../../store/reducers/products';

describe('Product reducer', () => {

  it('should  return initial state', () => {
    expect(reducer(undefined, {})).toEqual({ list: {}, detail: {}, });
  });
});




