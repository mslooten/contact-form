import styled from "styled-components";

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
  padding: 1.2rem;
  border-radius: 0.4rem;
  margin-right: 2rem;
  color: ${props => (props.type === "submit" ? "#fff" : "#888")};
  font-size: 1.6rem;
`;
