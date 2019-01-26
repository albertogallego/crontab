import * as React from "react";
import { WrappedFieldProps } from "redux-form";
import styled from "styled-components";

const InputWrapper = styled.input`
  padding: 0.5em;
  color: white;
  border: none;
  border-radius: 3px;
  text-align: center;
  font-size: 130%;
  background-color: #382b5f;
`;

const Input = ({ input, label, type, meta: { touched, error } }: any) => (
  <div>
    <InputWrapper {...input} placeholder={label} type={type} />
    {touched && error && <span>{error}</span>}
  </div>
);

export default Input;
