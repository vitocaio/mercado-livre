import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getProducts } from '../actions/productsList';

//Styles
const Content = styled.div`
`;

const StyledList = styled.ul`
list-style: none;
padding: 0px;
`;

const ListItem = styled.li`
padding: 30px;
border: solid 1px #e2e2e2;
border-radius: 5px;
margin: 10px 0;
box-shadow: 0px 5px 23px -9px rgba(148,148,148,0.64);
`;

class ListProducts extends Component {
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  renderList() {
    const { products } = this.props;
    if (products !== undefined) {
      const list = products.results.map(item => {
        return ( <ListItem key={item.id}> {item.title} </ListItem>);
      });

      return list;
    }
  }

  render() {
    return (
      <Content>
        <StyledList>
          {this.renderList()}
        </StyledList>
      </Content>
    )
  }
}

const mapStateToProps = state => ({
    products: state.products.data.products,
});
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getProducts,
  },
  dispatch,
);
export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
