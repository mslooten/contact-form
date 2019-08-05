import "./style.css";

import React from "react";
import styled from "styled-components";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

import Form from "./components/Form";
import form from "./reducers/form.reducer";
import { updateField } from "./actions/form.actions";

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
  font-family: sans-serif;
  text-align: center;
  color: #fff;
`;

const store = createStore(form);

function handleValueChange(event) {
  const name = event.target.name;
  store.dispatch(updateField(event.target.value, name));
  console.log(store.getState());
}

const mapStateToProps = state => {
  return {
    name: state.naam,
    email: state.email
  };
};

window.setTimeout(() => {
  store.dispatch(updateField("TEST", "naam"));
}, 5000);

const RealForm = connect(mapStateToProps)(Form);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <StyledHeader>
          <HeaderMain>Contact form</HeaderMain>
        </StyledHeader>
        <RealForm handleChange={handleValueChange} />
      </div>
    </Provider>
  );
};

export default App;
