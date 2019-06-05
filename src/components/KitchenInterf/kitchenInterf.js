import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { FirebaseContext } from '../Firebase';
import ShowOrderInKitchen from '../ShowOrderInKitchen/showOrderInKitchen';

class KitchenInterf extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="kitchenInterf">
                    <h1>COCINA</h1>
                    <Link to={ROUTES.LOGIN}>REGRESAR A INICIO</Link>
                </div>
                <FirebaseContext.Consumer>
                    {firebase => <ShowOrderInKitchen firebase={firebase} sec="order" />}
                </FirebaseContext.Consumer>


            </div>
        )
    }
}

export default KitchenInterf;