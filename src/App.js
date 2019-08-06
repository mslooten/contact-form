import "./style.css";

import React from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import styled from "styled-components";

import { resetFields, updateField } from "./actions/form.actions";
import Form from "./components/Form";
import form from "./reducers/form.reducer";

const StyledHeader = styled.div`
  background-color: #0086ff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

const HeaderMain = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  color: #fff;
`;

const store = createStore(
  form,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function handleValueChange(event) {
  const name = event.target.name;
  store.dispatch(updateField(event.target.value, name));
}

function resetForm() {
  store.dispatch(resetFields());
}

const mapStateToProps = state => {
  return {
    name: state.naam,
    email: state.email
  };
};

const ConnectedForm = connect(mapStateToProps)(Form);

const Test = () => <div>Test</div>;

const Main = () => (
  <div className="App">
    <StyledHeader>
      <HeaderMain>Contact form</HeaderMain>
    </StyledHeader>
    <ConnectedForm handleChange={handleValueChange} reset={resetForm} />
  </div>
);

const codes = [];

function getRandomNumber() {
  const numbers = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

  const code = [];

  for (let i = 0; i < 9; i++) {
    code[i] = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
  }
  const result =
    code[0] * 9 +
    code[1] * 8 +
    code[2] * 7 +
    code[3] * 6 +
    code[4] * 5 +
    code[5] * 4 +
    code[6] * 3 +
    code[7] * 2 +
    code[8];
  if (result % 11 === 0) {
    return code.join("");
  }
  return false;
}

const results = new Set();

while (Array.from(results).length < 100) {
  const number = getRandomNumber();
  if (number) results.add(number);
}
Array.from(results).map(val => codes.push(val));

const Result = () => (
  <div>
    <StyledHeader>
      <HeaderMain>Jouw codes</HeaderMain>
    </StyledHeader>
    <pre>
      {codes.map(val => {
        return val + "\n";
      })}
    </pre>
  </div>
);

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Main} exact />
      <Route path="/resultaat" component={Result} exact />
    </Router>
  </Provider>
);

export default App;
