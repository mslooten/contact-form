import React from "react";
import { InputWrapper, TextInput, BtnLink, Btn } from "./StyledComponents";

const Form = ({ handleChange, reset, name, email }) => (
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
      <BtnLink to="/resultaat" type="submit">
        Verstuur
      </BtnLink>
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

export default Form;
