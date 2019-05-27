import React, { Component } from 'react';


class ClientInfo extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (
            <h3>{this.props.client}</h3>
        );
    };
};

export default ClientInfo;