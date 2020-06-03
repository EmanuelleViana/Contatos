import React from "react";

import "./Filters.scss";
import Button from "./Button";
import Searchbar from "./Searchbar";

class Filters extends React.Component {

  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <Searchbar handleSubmit={(e)=>this.props.handleSubmit(e)}/>
          <Button name="Nome" icon={this.props.sortOrder}
            isSelected={this.props.sortField === "name"}
            handleClick={(event) => this.props.onSort("name")}>
			</Button>
          <Button name="País" icon={this.props.sortOrder}
            isSelected={this.props.sortField === "country"}
            handleClick={(event) => this.props.onSort("country")}>
			</Button>
          <Button name="Empresa" icon={this.props.sortOrder}
            isSelected={this.props.sortField === "company"}
            handleClick={(event) => this.props.onSort("company")}>
			</Button>
          <Button name="Departamento" icon={this.props.sortOrder}
            isSelected={this.props.sortField === "department"}
            handleClick={(event) => this.props.onSort("department")}>
			</Button>
          <Button name="Data de admissão" icon={this.props.sortOrder}
            isSelected={this.props.sortField === "admissionDate"}
            handleClick={(event) => this.props.onSort("admissionDate")}>
			</Button>
        </section>
      </div>
    );
  }
}

export default Filters;
