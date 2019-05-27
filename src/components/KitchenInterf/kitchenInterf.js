import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const KitchenInterf = () => (
    
    <div className="kitchenInterf">
        <h1>COCINA</h1>
        <Link to={ROUTES.LOGIN}>REGRESAR A INICIO</Link>
    </div>
);

export default KitchenInterf;