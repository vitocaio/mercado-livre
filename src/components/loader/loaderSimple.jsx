import React from 'react';
import styled from 'styled-components';
import LoaderSVG from '../../static/loader.svg';


const LoaderContainer = styled.div`
position:relative;
min-height: ${props => (props.limit === 'v' && '0') || '250px'};
`;
const ImgLoader = styled.img`
position: absolute;
width: 100%;
display: flex;
justify-content: center;
margin: 50px 0;
opacity: ${props => (props.show ? 1 : 0)};
visibility: ${props => (props.show ? 'visible' : 'hidden')};
transition: opacity .4s ease, visibility .0s ease .4s;
${props => props.limit === 'v' && `
  height: 100%;
  margin: 0;
`}
${props => props.show && `
  transition opacity .4s ease .4s, visibility .0s ease;
`}
`;
const Content = styled.div`
opacity: ${props => (props.hide ? 0 : 1)};
visibility: ${props => (props.hide ? 'hidden' : 'visible')};
transition: opacity .8s ease .4s;
${props => props.hide && `
  transition: opacity .4s ease 0s;
`}
`;

export default ({ show, limit, children }) => (
  <LoaderContainer limit={limit}>
    <ImgLoader
      alt="Icone de Carregamento"
      src={LoaderSVG}
      height={200}
      width={200}
      show={show}
      limit={limit}
    />
    <Content hide={show}>{children }</Content>
  </LoaderContainer>
);
