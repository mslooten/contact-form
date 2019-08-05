import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 0.4rem;
  width: 100%;
  margin-top: 0.5rem;
  font-size: 1.6rem;
  height: 1.5em;
`;

const InputWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto 2rem auto;
  font-size: 1.6rem;
`;

const Btn = styled.button``;

const Form = ({ handleChange, name, email }) => (
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
      <Btn type="submit">Verstuur</Btn>
      <Btn type="reset">Reset</Btn>
    </InputWrapper>
  </form>
);

export default Form;
