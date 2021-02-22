import React from 'react';
import {authenticationService} from "@/_services";
import FormCadastro from "@/_components/FormCadastro";


class Cadastro extends React.Component {

  constructor(props) {
    super(props);

    let currentUserValue = authenticationService.currentUserValue;

    console.log(currentUserValue);

    if (!currentUserValue.perfis.includes('Administrador')) {
      this.props.history.push('/');
    }

  }

  render() {
    return (
      <div>
        <FormCadastro/>
      </div>
    );
  }
}

export {Cadastro};