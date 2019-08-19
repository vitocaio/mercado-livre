import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getProductsDetails } from '../actions/products';


//Styles
const StyledContent = styled.div`
background: ${props => props.theme.colorWhite};
border-radius: 3px;
min-height: 400px;
`;

class ProductDetails extends Component {
  render() {
    const { getProductsDetails } = this.props;

    return (
      <StyledContent>
        <button onClick={() => { getProductsDetails('MLA738085345'); }}> teste </button>
      </StyledContent>
    );
  }
}

const mapStateToProps = state => ({
  detailProducts: state
});
const mapDispatchToProps = dispatch => bindActionCreators(
{
  getProductsDetails,
},
dispatch,
);
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
