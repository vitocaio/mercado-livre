import React from 'react'
import renderer from 'react-test-renderer';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router } from "react-router-dom";

import Header from '../../components/header';

configure({ adapter: new Adapter() });

const renderHeader = () => {
  return shallow(
    <Router>
      <Header />
    </Router>
  ).shallow();
};

// Snapshot for Home React Component
describe('>>>HEADER --- Snapshot', () => {
  const wrapper = renderHeader();
  it('+++capturing Snapshot of Header', () => {
    const renderedValue = renderer.create(wrapper).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('>>>HEADER --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = renderHeader()
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
});

describe('>>>HEADER --- attributes', () => {
  const props = {
    onSearch: jest.fn(),
  };
  const header = mount(
    <Router>
      <Header {...props} />
    </Router>
  );

  it('+++ should have logo', () => {
    expect(header.find('img').props('src').src).toEqual('Logo_ML.png');
  });

  it('+++ should have input search', () => {
    expect(header.find('input').props('type').type).toEqual('search');
  });
});

