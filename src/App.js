import './style.css';

import React from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import styled from 'styled-components';

import { resetFields, updateField } from './actions/form.actions';
import Form from './components/Form';
import form from './reducers/form.reducer';

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

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Main} />
      <Route path="/test" component={Test} exact />
    </Router>
  </Provider>
);

export default App;
