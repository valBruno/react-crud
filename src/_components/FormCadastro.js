import React from 'react';
import { Formik, Field, Form } from 'formik';
import {Button} from "react-bootstrap";

function FormCadastro() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function onBlurCep(ev, setFieldValue) {
    debugger
    const { value } = ev.target;

    const cep = value;

    // if (cep?.length !== 8) {
    //   return;
    // }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }

  return (
    <div className="FormCadastro">
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          nome: '',
          cpf: '',
          telefone: [],
          email: [],
          cep: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          uf: '',
        }}
        render={({ isValid, setFieldValue }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <Field name="nome" className={'form-control'} type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <Field name="cpf" className={'form-control'} type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" className={'form-control'} type="text" />
              <Button variant="outline-dark">Adicionar</Button>
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <Field component="select" className={'form-control'} name="tipo">
                <option value={null}>Selecione o tipo</option>
                <option value="CELULAR">Celular</option>
                <option value="COMERCIAL">Comercial</option>
                <option value="RESIDENCIAL">Residencial</option>
              </Field>
              <Field name="telefone" className={'form-control'} type="text" />
              <Button variant="outline-dark">Adicionar</Button>
            </div>
            <div className="form-group">
              <label htmlFor="cep">Cep</label>
              <Field name="cep" className={'form-control'} type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
            </div>
            <div className="form-group">
              <label>Logradouro</label>
              <Field name="logradouro" className={'form-control'} type="text" />
            </div>
            <div className="form-group">
              <label>Número</label>
              <Field name="numero" className={'form-control'} type="text" />
            </div>
            <div className="form-group">
              <label>Complemento</label>
              <Field name="complemento" className={'form-control'} type="text" />
            </div>
            <div className="form-group">
              <label>bairro</label>
              <Field name="bairro" className={'form-control'} type="text" />
            </div>
            <div className="form-group">
              <label>Cidade</label>
              <Field name="cidade" className={'form-control'} type="text" />
            </div>
            <div className="form-group">
              <label>Estado</label>
              <Field component="select" className={'form-control'} name="uf">
                <option value={null}>Selecione o Estado</option>
                <option value="SP">São Paulo</option>
                <option value="SC">Santa Catarina</option>
              </Field>
            </div>
            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default FormCadastro;