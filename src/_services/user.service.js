import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';
import axios from "axios";

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return axios.get(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}