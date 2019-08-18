import React from 'react';

import Header from './components/header';
import ProductsList from './components/listProducts'
import styled from 'styled-components';

const Content = styled.div`
width: 80%;
margin: 20px auto;
`;

function App() {
  return (
    <div className="App">
      <Header/>
      <Content>
        <ProductsList />
      </Content>
    </div>
  );
}

export default App;
