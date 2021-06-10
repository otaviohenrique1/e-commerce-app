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

/*
<FormGroup>
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText>
        <Label htmlFor="sexo">Sexo</Label>
      </InputGroupText>
    </InputGroupAddon>
    <Field
      className="form-control"
      type="select"
      name="sexo"
      id="sexo"
    >
      <option>Masculino</option>
      <option>Feminino</option>
    </Field>
  </InputGroup>
  <span>{(errors.sexo && touched.sexo) ? (<Alert color="danger">{errors.sexo}</Alert>) : null}</span>
</FormGroup>
*/
