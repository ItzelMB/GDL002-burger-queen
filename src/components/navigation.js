import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import '../index.css';

const Navigation = () => (
    <nav>
        <ul>
            <li className="btnDirectioner">
                <Link to={ROUTES.WAITERS}>Meseros</Link>
            </li>
            <li className="btnDirectioner">
                <Link to={ROUTES.KITCHEN}>Cocina</Link>
            </li>
        </ul>
        
    </nav>
);

export default Navigation;