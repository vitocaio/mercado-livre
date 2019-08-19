import React, { Component } from 'react';

import Header from './components/header';
import ProductsList from './components/listProducts';
import styled from 'styled-components';

const Content = styled.div`
width: 80%;
margin: 20px auto;
`;

class App extends Component {
  state = {
    valueSearch: '',
  };

  handleSearch(value) {
    if(value === undefined || value === '') {
      return false;
    }
    this.setState({ valueSearch: value, });
  }

  render() {
    const { valueSearch } = this.state;
    return (
      <div className="App">
        <Header onSearch={valor => this.handleSearch(valor)}/>
        <Content>
          <ProductsList search={valueSearch}/>
        </Content>
      </div>
    );
  }
}

export default App;
