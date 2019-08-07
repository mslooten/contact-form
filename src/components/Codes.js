import React from "react";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { Btn } from "./StyledComponents";
import { copyToClipboard } from "copy-lite";

const CodeList = ({ name, email, codes, history }) =>
  (name && email && codes && codes.length > 0 && (
    <>
      <div className="header">
        <h1>Jouw codes</h1>
      </div>
      <p>
        Hallo {name}, hier zijn jouw unieke codes. Je kunt ze nu copy-pasten
        (klik op de button) of je kunt in je mailbox kijken, want we hebben ze
        ook gemaild naar {email} <small>(not really)</small>.
      </p>
      <p>
        <Btn
          onClick={e => {
            e.preventDefault();
            history.push("/");
          }}
        >
          Terug naar het formulier
        </Btn>
        <Btn
          onClick={e => {
            copyToClipboard(codes.join(","));
          }}
        >
          Kopieer codes
        </Btn>
      </p>
      <pre>{codes.map(code => code + "\n")}</pre>
    </>
  )) || <Redirect to="/" />;

export default CodeList;

CodeList.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  codes: PropTypes.array.isRequired,
  history: PropTypes.any.isRequired
};
