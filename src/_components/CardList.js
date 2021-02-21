import {Card} from "react-bootstrap";
import React from "react";

export const CardList = ({clientes}) => {
  const cardsArray = clientes.map(c => (
    <Card style={{flex: 1}}>
      <Card.Body>
        <Card.Title>{c.nome}</Card.Title>
        <Card.Text>
          <p>CPF: {c.cpf}</p>
          <p>Email(s):
            <ul>
              {c.email.map(email => (<li>{email}</li>))}
            </ul>
          </p>
          <p>Telefone(s):
            <ul>
              {c.telefone.map(telefone => (<li>{telefone.tipo} - {telefone.numero}</li>))}
            </ul>
          </p>
          <p>Endereço:
            <ul style={{ listStyleType: "none" }}>
              <li>Cep: {c.endereco.cep}</li>
              <li>Logradouro: {c.endereco.logradouro}</li>
              <li>Bairro: {c.endereco.bairro}</li>
              <li>Cidade: {c.endereco.cidade}</li>
              <li>UF: {c.endereco.uf}</li>
            </ul>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <div>
      {cardsArray}
    </div>
  );
};