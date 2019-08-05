import './style.css';

import React from 'react';
import styled from 'styled-components';

import Form from './Form';

const HeaderMain = styled.h1`
  font-size: 2.4rem;
  font-family: sans-serif;
  text-align: center;
  margin-bottom: 4rem;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderMain>Contact form</HeaderMain>
        <Form />
      </header>
    </div>
  );
}

export default App;
