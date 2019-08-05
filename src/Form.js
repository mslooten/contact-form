import React from 'react';
import styled from 'styled-components';

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

class Form extends React.Component {
  constructor() {
    super();
    this.state = { naam: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }
  render() {
    return (
      <form>
        <InputWrapper>
          <label>
            Naam:
            <TextInput
              value={this.state.naam}
              name="naam"
              onChange={this.handleChange}
            />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label>
            Email:
            <TextInput
              value={this.state.email}
              name="email"
              type="email"
              onChange={this.handleChange}
            />
          </label>
        </InputWrapper>
        <InputWrapper>
          <Btn type="submit">Verstuur</Btn>
          <Btn type="reset">Reset</Btn>
        </InputWrapper>
      </form>
    );
  }
}
export default Form;
