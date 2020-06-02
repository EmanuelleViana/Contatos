

import React from 'react';
import './Searchbar.scss';

function Searchbar(props) {
    return (
        <div className="filters__search" data-testid="searchbar">
        <input type="text" className="filters__search__input" placeholder="Pesquisar" />

        <button className="filters__search__icon">
          <i className="fa fa-search"/>
        </button>
      </div>

    )
}

export default Searchbar;