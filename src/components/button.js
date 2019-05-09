import React from 'react';
import './Button.css';

const Button = () => {
    const greetinng = 'hi';
    
        return (
            <button className="Button" onClick={() => {console.log('holi')}}>{greetinng}</button>
        );
};

export default Button;