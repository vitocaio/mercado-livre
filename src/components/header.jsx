import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from "react-router-dom";

import logo from '../static/Logo_ML.png';

const Icon = styled(FontAwesomeIcon)`
`;
const Container = styled.div`
width: 100%;
background: ${props => props.theme.colorMlYellow};
ul,li {
  width: 100%;
}
`;
const Nav = styled.nav`
width: 80%;
margin: 0 auto;
`;
const Link = styled.a`
text-decoration: none;
color: ${props => props.theme.colorGray02};
&:hover {
  color: ${props => props.theme.colorWhite};
}
`;
const InputSearch = styled.div`
width: 100%;
input {
  width: 100% !important;
  border: none;
  float: right;
  margin-top: -38px;
  position: relative;
  z-index: 1;
}
}
button {
  float: right;
  width: 50px;
  background: #eee;
  position: relative;
  z-index: 2;
}
`;

const ClearBoth = styled.span`
clear: both;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
      const search = new URLSearchParams(this.props.location.search);
      const searchValue = search.get("search");

      this.setState({ search: searchValue });
  }
  
  handleChange(e) {
    const { value } = e.target;
    this.setState({ search: value });
  }

  handleKeyDown(e) {
    const { search } = this.state;
    const { onSearch } = this.props;
    
    if (e.key === 'Enter') {
      onSearch(search);
      this.props.history.push(`/items?search=${search}`);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { search } = this.state;
    const { onSearch } = this.props;

    return (
      <header className="page-header">
        <Container>
          <Nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <Icon icon="bars" />
            </button>
            <Link className="navbar-brand" href="/">
              <img width="60px" className="img-logo-ml-sm-white" alt="Logo ML" src={logo} />
            </Link>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li> 
                  <form className="form-inline" onSubmit={this.handleSubmit}>
                    <InputSearch>
                      <button className="btn" type="button" onClick={() => { 
                        onSearch(search) 
                        this.props.history.push(`/items?search=${search}`);
                      }}>
                        <Icon icon="search"/>
                      </button>
                      <input 
                        className="form-control"
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" 
                        value={search || ''} 
                        onChange={(e) => { this.handleChange(e) }} 
                        onKeyDown={(e) => { this.handleKeyDown(e) }} />
                    </InputSearch>
                    <ClearBoth></ClearBoth>
                  </form>
                </li>
              </ul>
            </div>
          </Nav>
        </Container>
      </header>
    );
  };
}

export default withRouter(Header);