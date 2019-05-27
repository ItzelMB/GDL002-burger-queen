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
        <section className="clientName">
            <input type="text" name="Nombre del cliente" placeholder="Nombre del cliente" className="clientInputName" onChange={this.updateName}></input>
            <button type="button" className="btn btn-warning saveBtn" onClick={this.renderClientInfo}>GUARDAR</button>
            {this.state.showClient ? <ClientInfo client={this.state.clientName}/> : null}
        </section>
       );
    };
};

export default Client;