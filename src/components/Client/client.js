import React, {Component} from 'react';
import ClientInfo from '../ClientInfo/clientInfo.js'


class Client extends Component {
    constructor () {
        super();

        this.state = {
            clientName: '',
            showClient: false,
        };      
    };

    updateName = (event) => {
        this.setState({clientName:event.target.value})
        this.setState({showClient: false}) 
    };

    renderClientInfo = ()=> {
       this.setState({showClient: true}) 
    }

    render () {
       return (
        <section>
            <h3>Cliente</h3>
            <input type="text" name="Nombre del cliente" className="clientNam" onChange={this.updateName}></input>
            <button onClick={this.renderClientInfo}>Guardar</button>
            {this.state.showClient ? <ClientInfo client={this.state.clientName}/> : null}
        </section>
       );
    };
};

export default Client;