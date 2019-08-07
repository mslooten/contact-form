import React from "react";
import { InputWrapper, TextInput, Btn } from "./StyledComponents";
import { withRouter } from "react-router-dom";

const Form = ({ handleChange, reset, name, email, history, submitForm }) => (
  <form>
    <InputWrapper>
      <label>
        Naam:
        <TextInput name="naam" value={name} onChange={handleChange} />
      </label>
    </InputWrapper>
    <InputWrapper>
      <label>
        Email:
        <TextInput
          name="email"
          value={email}
          type="email"
          onChange={handleChange}
        />
      </label>
    </InputWrapper>
    <InputWrapper>
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
    </InputWrapper>
  </form>
);

export default withRouter(Form);
