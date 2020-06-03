

import React from 'react';
import './Searchbar.scss';

class Searchbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: ''};
  }

  render() {
    return (

      <div className="filters__search" data-testid="searchbar">
          <input 
            type="text" value={this.state.value} onChange={(event) => this.handleChange(event)}
            className="filters__search__input"
            placeholder="Pesquisar"/>

          <button className="filters__search__icon" type="button">
            <i className="fa fa-search" />
          </button>
      </div>

    );
  }

  handleChange(event) {
   this.setState({value: event.target.value});
   this.props.handleSubmit(event);
  }
  
}

export default Searchbar;