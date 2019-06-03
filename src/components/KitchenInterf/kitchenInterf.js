import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

class KitchenInterf extends Component {
    constructor(props) {
        super(props);
    }

        componentDidMount() {

            const firebaseAccess = this.props.firebase.getRefDb().root.child(this.props.sec);
            let orderElements = [];
    
            firebaseAccess.on('value', (snapshot) => {
                let menuCopy = snapshot.val();
    
                for (let menuItem in menuCopy) {
                    
                    orderElements.push(
                        {
                            client: menuCopy[menuItem].client,
                            items: menuCopy[menuItem].items,
                            status: menuCopy[menuItem].status,
                            total: menuCopy[menuItem].total,
                        }
                    )
                }
    
                this.setState({
                    menu:orderElements
                })
            });
    };

    render() {
        return (
            <div className="kitchenInterf">
                <h1>COCINA</h1>
                <Link to={ROUTES.LOGIN}>REGRESAR A INICIO</Link>
            </div>
        )
    }
}

export default KitchenInterf;