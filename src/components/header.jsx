import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../static/Logo_ML.png';

const Icon = styled(FontAwesomeIcon)`
`;
const Container = styled.div`
width: 100%;
background: ${props => props.theme.colorMlYellow};
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

export default ({
  children,
}) => (

  <header className="page-header">
    <Container>
      <Nav className="navbar navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <Icon icon="bars" />
        </button>
        <Link className="navbar-brand" href="./list">
          <img width="60px" className="img-logo-vr-sm-white" alt="Logo VR" src={logo} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li> 
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </li>
          </ul>
          {children}
        </div>
      </Nav>
    </Container>
  </header>
);
