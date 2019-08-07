import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: #0086ff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const HeaderMain = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  color: #fff;
`;

export const CodeBlock = styled.pre`
  max-width: 700px;
  column-count: 5;
  padding: 2rem;
  font-size: 1.6rem;
  line-height: 1.6;
  background-color: #eee;
  border-radius: 4px;
  text-align: center;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  max-width: 700px;
  margin: 0 auto 4rem;
  text-align: center;
`;

export const TextInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 0.4rem;
  width: 100%;
  margin-top: 0.5rem;
  font-size: 1.6rem;
  height: 1.5em;
`;

export const InputWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto 2rem auto;
  font-size: 1.6rem;
`;

export const Btn = styled.button`
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${props => (props.disabled ? ".5" : "1")};
  background-color: ${props => (props.type === "submit" ? "#83cf3d" : "#ddd")};
  transition: background-color 0.3s;
  &:hover {
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
