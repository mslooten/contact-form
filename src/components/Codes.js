import React from "react";
import { Redirect } from "react-router-dom";
import {
  StyledHeader,
  HeaderMain,
  Paragraph,
  CodeBlock
} from "./StyledComponents";

const CodeList = ({ name, email, codes }) =>
  (name && email && codes && codes.length > 0 && (
    <div>
      <StyledHeader>
        <HeaderMain>Jouw codes</HeaderMain>
      </StyledHeader>
      <Paragraph>
        Hallo {name}, hier zijn jouw unieke codes. Je kunt ze nu copy-pasten
        (klik op de button) of je kunt in je mailbox kijken, want we hebben ze
        ook gemaild naar {email}.
      </Paragraph>
      <CodeBlock>{codes.map(code => code + "\n")}</CodeBlock>
    </div>
  )) || <Redirect to="/" />;

export default CodeList;
