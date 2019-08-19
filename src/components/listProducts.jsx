import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Currency from 'react-currency-formatter';

import If from '../helpers/if';
import { getProductsList } from '../actions/products';
import shipping from '../static/ic_shipping.png';
import LoaderSimple from './loader/loaderSimple';

//Styles
const StyledList = styled.ul`
list-style: none;
padding: 10px;
background: ${props => props.theme.colorWhite};
border-radius: 3px;
`;

const StyledListItem = styled.li`
padding: 10px 0px;
border-bottom: solid 1px ${props => props.theme.colorGray10};
&&:last-child {
  border-bottom: none;
}
`;

const StyledListItemContent = styled.div`
min-height: 180px;
h4 {
  margin-top: 30px;
}
p {
  margin-top: 20px;
}

span {
  font-size: 12px;
  color: ${props => props.theme.colorGray08};
  position: absolute;
  margin-top: 50px;
}
`;

const Thumbnail = styled.img`
  width: 180px;
  height: 180px;
  background: ${props => props.theme.colorGray08};
  border-radius: 3px;
`;

const Shipping = styled.img`
margin: 5px 15px;
position: absolute;
`;

class ListProducts extends Component {
  state = {
    loaderLocal: true,
  }

  componentDidMount() {
    const { getProductsList } = this.props;
    getProductsList().then(() => {
      this.setState({ loaderLocal: false });
    });
  }

  componentDidUpdate(prevState) {
    const { search } = this.props;
    if (search !== prevState.search) {
      this.getProductsSearch(search);
    }
  }

  getProductsSearch(searchValue) {
    const { getProductsList } = this.props;

    this.setState({ loaderLocal: true });
    getProductsList(searchValue).then(() => {
      this.setState({
        loaderLocal: false,
      });
    });
  }

  renderListItem(item) {
    return (
      <StyledListItemContent className="row">
        <div className="col-lg-2">
          <Thumbnail src={item.thumbnail} alt="" />
        </div>
        <div className="col-lg-8">
          <h4>
            <Currency
              quantity={item.price}
              currency="USD"
            />
            <If test={item.shipping.free_shipping}>
              <Shipping alt="Shipping ML" src={shipping} />
            </If>
          </h4>
          <p>
            {item.title}
          </p>
        </div>
        <div className="col-lg-2">
          <span>
            {item.address.state_name}
          </span>
        </div>
      </StyledListItemContent>
    );
  }

  renderList() {
    const { products } = this.props;
    if (products !== undefined) {
      if(products.results !== undefined) {
        const list = products.results.map(item => {
          return ( <StyledListItem key={item.id}> {this.renderListItem(item)} </StyledListItem>);
        });
        return list;
      }
    }
  }

  render() {
    const { loaderLocal } = this.state;

    return (
      <div>
        <StyledList>
          <LoaderSimple show={loaderLocal}>
            {this.renderList()}
          </LoaderSimple>
        </StyledList>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.list,
});
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getProductsList,
  },
  dispatch,
);
export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
