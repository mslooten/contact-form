import React from "react";
import { Btn } from "./StyledComponents";
import PropTypes from "prop-types";

const Form = ({ handleChange, reset, name, email, history, submitForm }) => (
  <>
    <div className="header">
      <h1>Contact form</h1>
    </div>
    <div className="container">
      <form>
        <label>
          Naam:
          <input name="naam" value={name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input
            name="email"
            value={email}
            type="email"
            onChange={handleChange}
          />
        </label>
        <Btn
          onClick={e => {
            e.preventDefault();
            submitForm(e);
            history.push("/resultaat");
          }}
          type="submit"
          disabled={!name || !email}
        >
          Verstuur
        </Btn>
        <Btn
          type="reset"
          onClick={e => {
            e.preventDefault();
            reset();
          }}
        >
          Reset
        </Btn>
      </form>
    </div>
  </>
);

export default Form;

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  history: PropTypes.any
};
