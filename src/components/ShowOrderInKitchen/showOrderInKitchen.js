import React, { Component } from 'react';

class ShowOrderInKitchen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderDescription: []
        }
    }

    componentDidMount() {

            const firebaseAccess = this.props.firebase.getRefDb().root.child(this.props.sec);
            let orderDescriptionElems = [];
    
            firebaseAccess.on('value', (snapshot) => {
                let dataCopy = snapshot.val();
    
                for (let orderInfo in dataCopy) {
                    
                    orderDescriptionElems.push(
                        {
                            client: dataCopy[orderInfo].client,
                            items: dataCopy[orderInfo].items,
                            status: dataCopy[orderInfo].status,
                            total: dataCopy[orderInfo].total,
                        }
                    )
                }
    
                this.setState({
                    orderDescription: orderDescriptionElems
                })   
            });
    };

    render() {
        return (
            <section>
                {this.state.orderDescription.map((itemProperty, index) => {
                    return (
                        <div key={index} id={itemProperty.id}>
                            <p>{itemProperty.client}</p>
                            <p>{itemProperty.items}</p>
                        </div>
                    )
                })}
            </section>
        )
    }
}

export default ShowOrderInKitchen;