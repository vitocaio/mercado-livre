import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Currency from 'react-currency-formatter';
import { withRouter } from "react-router-dom";

import { getProductsDetails, getProductsDetailsDescription } from '../actions/products';


//Styles
const StyledContent = styled.div`
background: ${props => props.theme.colorWhite};
border-radius: 3px;
min-height: 400px;
`;
const Picture = styled.img`
margin-left: 100px;

@media only screen and (max-width: 767px) { 
  margin-left: 0px;
  width: 100%;
}
`;
const ContentDetails = styled.div`
padding-top: 30px;
`;
const ProductDetailDesc = styled.span`
color: ${props => props.theme.colorGray03};
`;
const ProductDetailName = styled.h4`
margin: 10px 0;
font-weight: 600;
`;
const ProductDetailPrice = styled.h2`
margin: 20px 0;
font-weight: bold;
font-size: 46px;
`;
const Buy = styled.button`
background: ${props => props.theme.colorMlBlue};
color: ${props => props.theme.colorWhite};
padding: 14px;
width: 90%;
margin: 40px 0px;
`;

class ProductDetails extends Component {

  componentDidMount() {
    const getId = this.props.match.params.id;
  
    this.getProducts(getId);
  }

  getProducts(id) {
    const { getProductsDetails, getProductsDetailsDescription } = this.props;
    getProductsDetails(id);
    getProductsDetailsDescription(id);
  }

  getPicture(img) {
    if(img.pictures) {
      const pircure = img.pictures[0].url;
      return pircure;
    }
  }

  getDescription(id) {
    const { detailDescription } = this.props;
    if(detailDescription) {
      return detailDescription[0].plain_text;
    }
  }

  render() {
    const { detailProducts } = this.props;

    return (
      <StyledContent>
        <div className="row">
          <div className="col-sm-8">
            <Picture alt={detailProducts.title} src={this.getPicture(detailProducts)} />
            <div className="row">
              <div className="col-sm-12">
                <h3> Descrição do Produto </h3>
                <p>
                {this.getDescription(detailProducts.id)}
                </p>
              </div>
            </div>
          </div>
          
          <ContentDetails className="col-sm-4">
            <ProductDetailDesc> 
              {detailProducts.condition} - {detailProducts.sold_quantity} vendidos
            </ProductDetailDesc>
            <ProductDetailName> 
              {detailProducts.title} 
            </ProductDetailName>
            <ProductDetailPrice> 
              <Currency
                quantity={detailProducts.price || 0}
                currency="USD"
              />
            </ProductDetailPrice>
            
            <Buy className="btn"> Comprar </Buy>
          </ContentDetails>
          
        </div>
      </StyledContent>
    );
  }
}

const mapStateToProps = state => ({
  detailProducts: state.products.detail,
  detailDescription: state.products.detailDescription
});
const mapDispatchToProps = dispatch => bindActionCreators(
{
  getProductsDetails,
  getProductsDetailsDescription
},
dispatch,
);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetails));
