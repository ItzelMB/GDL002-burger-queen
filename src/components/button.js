import React from 'react';
//import './Button.css';

const Button = props => {
    const greetinng = 'hi';
    
        return (
            <button className="Button" key="1" onClick={() => {console.log('holi' + props.name)}}>{greetinng}</button>
        );
};

export default Button;