import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Btn = styled.button`
  background-color: ${props => (props.type === "submit" ? "#83cf3d" : "#ddd")};
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: ${props =>
      props.type === "submit" ? "#79b53a" : "#ccc"};
  }
  border: none;
  padding: 1em;
  border-radius: 0.4rem;
  margin-right: 20px;
  color: ${props => (props.type === "submit" ? "#fff" : "#888")};
  font-size: 1.6rem;
`;

const BtnLink = styled(Link)`
  background-color: ${props => (props.type === "submit" ? "#83cf3d" : "#ddd")};
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: ${props =>
      props.type === "submit" ? "#79b53a" : "#ccc"};
  }
  border: none;
  padding: 1em;
  border-radius: 0.4rem;
  margin-right: 20px;
  color: ${props => (props.type === "submit" ? "#fff" : "#888")};
  font-size: 1.6rem;
`;

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
      <BtnLink to="/resultaat">Verstuur</BtnLink>
      <Btn
        type="reset"
        onClick={e => {
          e.preventDefault();
          reset();
        }}
      >
        {" "}
        Reset
      </Btn>
    </InputWrapper>
  </form>
);

export default Form;
