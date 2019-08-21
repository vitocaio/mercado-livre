import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Header from './components/header';
import ProductsList from './components/listProducts';
import ProductsDetails from './components/detailProduct';
import styled from 'styled-components';

const Content = styled.div`
width: 80%;
margin: 50px auto;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueSearch: '',
    };

    this.renderList = this.renderList.bind(this);
  }

  handleSearch(value) {
    if(value === undefined || value === '') {
      return false;
    }
    this.setState({ valueSearch: value, });
  }

  renderList() {
    const { valueSearch } = this.state;
    return (
      <ProductsList search={valueSearch}/>
    )
  }

  renderDetail() {
    return (
      <ProductsDetails />
    )
  }

  render() {
    return (
      <div className="App">
        <Router history={createBrowserHistory}>
        <Header onSearch={valor => this.handleSearch(valor)}/>
          <Content>
            <Route exact path="/items" component={this.renderList}/>
            <Route path="/items/:id" component={this.renderDetail}/>
          </Content>
        </Router>
      </div>
    );
  }
}

export default App;
