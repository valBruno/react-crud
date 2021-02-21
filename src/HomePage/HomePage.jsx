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
            clientes: []
        };
    }

    componentDidMount() {
        // userService.getAll().then(users => this.setState({ users }));
        clienteService.getClientes().then(clientes => this.setState({clientes}))
    }

    render() {
        const { currentUser, users, clientes } = this.state;
        return (
            <div>
                <h1>Clientes</h1>
                <div>
                <CardList style={{display: 'flex', flexDirection: 'row'}} clientes={clientes} />
                </div>
            </div>
        );
    }
}

export { HomePage };