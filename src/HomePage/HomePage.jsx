import React from 'react';

import { userService, authenticationService } from '@/_services';
import { clienteService } from "@/_services/cliente.service";
import { CardList } from "../_components/CardList.js";
class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null,
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { currentUser, users } = this.state;
        return (
            <div>
                <h1>Clientes</h1>
                <CardList style={{display: 'flex', flexDirection: 'row'}} clientes={clienteService.getClientes()} />
            </div>
        );
    }
}

export { HomePage };