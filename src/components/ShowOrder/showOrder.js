import React, { Component } from 'react';

class ShowOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orderList: [],
            total: 0
        }
    }

    sendOrder () {

        let orderList = {
          client : "test",
          status: "processing",
          total: this.props.total,
          items: this.props.item,
        }
    
        this.props.firebase.saveOrd(orderList);
    };

    render() {
        return (
            <div>
                {
                    this.props.item.map((element, index) => {
                        return (
                            <div key={index} id={index} price={element.value}>
                                <p className="itemDescription">{element.description + "........" + element.price}</p>
                                <button type="button" className="btn btn-danger" onClick={this.props.removeItem}>Eliminar</button>
                            </div>
                        )
                    })
                }

                <section className="total">
                    <h5>TOTAL ${this.props.total}</h5>
                    <button type="button" className="btn btn-warning saveBtn" onClick={this.sendOrder()}>ENVIAR PEDIDO</button>
                </section>
            </div>
        )
    }
};

export default ShowOrder;