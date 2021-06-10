import React from 'react';
import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label } from "reactstrap";
import { Field } from "formik";

interface CampoSelectProps {
  className?: string;
  htmlFor?: string;
  label?: string;
  nameInput?: string;
  idInput?: string;
  erro?: any;
  valueInput?: any;
  lista: any[];
}

export default function CampoSelect({ htmlFor, label, nameInput, idInput, erro, lista }: CampoSelectProps) {
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
          component="select"
          name={nameInput}
          id={idInput}
        >
          <option value="">Selecione</option>
          {lista.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </Field>
      </InputGroup>
      <span>{erro}</span>
    </FormGroup>
  );
}
