import "./style.css";

import React from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";

import { resetFields, updateField } from "./actions/form.actions";
import Form from "./components/Form";
import reducer from "./reducers/index";
import CodeList from "./components/Codes";
import { generateCodes, removeCodes } from "./actions/codes.actions";
import { AnimatedSwitch } from "react-router-transition";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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

const FormWithProps = props => (
  <ConnectedForm
    handleChange={handleValueChange}
    submitForm={submitForm}
    reset={resetForm}
    {...props}
  />
);

const App = () => (
  <Provider store={store}>
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/" component={FormWithProps} exact />
        <Route path="/resultaat" component={ConnectedCodeList} exact />
      </AnimatedSwitch>
    </Router>
  </Provider>
);

export default App;
