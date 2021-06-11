import React from 'react';
import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label } from "reactstrap";
import { InputType } from "reactstrap/es/Input";
import { Field } from "formik";

interface CampoProps {
  className?: string;
  htmlFor?: string;
  label?: string;
  placeholderInput?: string;
  typeInput?: InputType;
  nameInput?: string;
  idInput?: string;
  erro?: any;
  valueInput?: any;
  renderMask?: any;
}

export default function Campo({ htmlFor, label, placeholderInput, typeInput, nameInput, idInput, erro, valueInput, renderMask }: CampoProps) {
  return (
    <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Label htmlFor={htmlFor}>{label}</Label>
          </InputGroupText>
        </InputGroupAddon>
        <Field
          className="form-control"
          type={typeInput}
          name={nameInput}
          id={idInput}
          placeholder={placeholderInput}
          value={valueInput}
          render={renderMask}
        />
      </InputGroup>
      <span>{erro}</span>
    </FormGroup>
  );
}