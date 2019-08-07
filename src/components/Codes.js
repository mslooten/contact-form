import React from "react";
import { Redirect } from "react-router-dom";
import {
  StyledHeader,
  HeaderMain,
  Paragraph,
  CodeBlock,
  Btn
} from "./StyledComponents";

const CodeList = ({ name, email, codes, history }) =>
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
      <Paragraph>
        <Btn
          onClick={e => {
            e.preventDefault();
            history.push("/");
          }}
        >
          Terug naar het formulier
        </Btn>
      </Paragraph>
      <CodeBlock>{codes.map(code => code + "\n")}</CodeBlock>
    </div>
  )) || <Redirect to="/" />;

export default CodeList;
