import React from 'react';
import s from "./BlueButton.module.css";
const BlueButton = (props) => {
    return (
        <div className={`${s.button} ${props.isFill ? s.fill : ''}`}>
            {props.title}
        </div>
    );
};

export default BlueButton;