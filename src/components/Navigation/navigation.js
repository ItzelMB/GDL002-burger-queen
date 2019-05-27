import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../index.css';

const Navigation = () => (
    <nav>
        <ul>
            <button type="button" className="btn btn-primary btn-lg">
                <Link to={ROUTES.WAITERS}>Meseros</Link>
            </button>
            <button type="button" className="btn btn-primary btn-lg">
                <Link to={ROUTES.KITCHEN}>Cocina</Link>
            </button>
        </ul>

    </nav>
);

export default Navigation;