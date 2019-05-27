import React from 'react';
import Navigation from '../Navigation/navigation';

const Login = () => (
    <section className="bgLogin">
        <div className="logo">
            <img src="../../../../img/logo.png" width="250px" height="250px"></img>
        </div>
        
        <h2>¿En qué área laboras?</h2>
        <Navigation/>
        {/*<div>
            <input type="password"></input>
            <button>Iniciar</button>
        </div>*/}
    </section>
    
);

export default Login;