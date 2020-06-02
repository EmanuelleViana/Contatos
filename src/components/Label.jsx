import React from 'react';
import './Label.scss';

function Label(props) {
    return (
        <label className="contact__data">{props.name}</label>
    )
}
export default Label;