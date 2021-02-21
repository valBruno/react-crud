import {Card} from "react-bootstrap";
import React from "react";

export const CardList = ({clientes}) => {
  const cardsArray = clientes.map(c => (
    <Card style={{flex: 1}}>
      <Card.Body key={c.id}>
        <Card.Title>{c.nome}</Card.Title>
        <Card.Text>
          <div>CPF: {c.cpf}</div>
          <div>Email(s):
            <ul>
              {c.email.map((email, index) => (<li key={index}>{email}</li>))}
            </ul>
          </div>
          <div>Telefone(s):
            <ul>
              {c.telefone.map((telefone, index) => (<li key={index}> {telefone.tipo} - {telefone.numero}</li>))}
            </ul>
          </div>
          <div>Endereço:
            <ul style={{ listStyleType: "none" }}>
              <li>Cep: {c.endereco.cep}</li>
              <li>Logradouro: {c.endereco.logradouro}</li>
              <li>Bairro: {c.endereco.bairro}</li>
              <li>Cidade: {c.endereco.cidade}</li>
              <li>UF: {c.endereco.uf}</li>
            </ul>
          </div>
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