import {handleResponse} from "@/_helpers";
import config from 'config';
import { authHeader } from '../_helpers/auth-header';
import axios from 'axios';


export const clienteService = {
  getClientes
}

function getClientes() {
  let axiosConfig = {
    headers: authHeader()
  }
  return axios.get(`${config.apiUrl}/clientes`, axiosConfig)
    .then(handleResponse)
    .then(clientes => {

      console.log(clientes);

      return clientes;
    }).catch(error => {
      console.log(error);
    });
}