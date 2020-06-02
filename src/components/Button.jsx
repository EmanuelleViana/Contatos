
import React from 'react';
import './Button.scss';
import { ASC } from '../constants';

function Button(props) {
    const selected =  props.isSelected ? "is-selected" : "";
    const iconClass = (props.isSelected && props.icon === ASC) || !props.isSelected ? 'fas fa-sort-down': 'fas fa-sort-up';
    return (
            <button onClick={props.handleClick}
            className={"filters__item " + selected } data-testid="button">
            {props.name} <i className={iconClass} />
          </button>
        )
}

export default Button;