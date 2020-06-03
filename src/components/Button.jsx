
import React from 'react';
import './Button.scss';
import { ASC } from '../constants';

function Button(props) {
    const selected =  props.isSelected ? "is-selected" : "";
    const iconClass = (props.isSelected && props.icon === ASC) ? 'fas fa-sort-up': props.isSelected  ? 'fas fa-sort-down' : '';
    return (
            <button onClick={props.handleClick}
            className={"filters__item " + selected } data-testid="button">
            {props.name} <i className={iconClass} />
          </button>
        )
}

export default Button;