import "./style.css";

import React from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { StyledHeader, HeaderMain } from "./components/StyledComponents";

import { resetFields, updateField } from "./actions/form.actions";
import Form from "./components/Form";
import reducer from "./reducers/index";
import CodeList from "./components/Codes";
import { generateCodes, removeCodes } from "./actions/codes.actions";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Generate the 100 codes up front. Could be done in action handler as well.
// store.dispatch(generateCodes(100));

function handleValueChange(event) {
  const fieldName = event.target.name;
  store.dispatch(updateField(event.target.value, fieldName));
}

function submitForm() {
  store.dispatch(generateCodes(100));
}

function resetForm() {
  Promise.resolve(store.dispatch(resetFields())).then(() =>
    store.dispatch(removeCodes())
  );
}

const mapStateToProps = state => {
  return {
    name: state.form.naam,
    email: state.form.email,
    codes: state.codes.codes
  };
};

const ConnectedForm = connect(mapStateToProps)(Form);
const ConnectedCodeList = connect(mapStateToProps)(CodeList);

const Main = () => (
  <div className="App">
    <StyledHeader>
      <HeaderMain>Contact form</HeaderMain>
    </StyledHeader>
    <ConnectedForm
      handleChange={handleValueChange}
      submitForm={submitForm}
      reset={resetForm}
    />
  </div>
);

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Main} exact />
      <Route path="/resultaat" component={ConnectedCodeList} exact />
    </Router>
  </Provider>
);

export default App;
