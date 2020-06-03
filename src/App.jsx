import React from "react";

import "./App.scss";

import { API_URL, ASC } from "../src/constants";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Loading from "./components/Loading";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      contacts: [],
      originalContacts: [],
      sortOrder: ASC,
      orderBy: "name",
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await fetch(API_URL)
      .then((res) => res.json())
      .then((data) => data);
    this.setState({ loading: false, contacts: response, originalContacts: response });
    this.sortByField('name');
  }

  async sortByField(fieldName) {
    await this.setState({sortOrder: -this.state.sortOrder, orderBy: fieldName});
    const array = [...this.state.contacts];
    array.sort((a, b) => this.compare(a, b));
    this.setState({contacts:array})
  }

  compare( a, b ) {
    if ( a[this.state.orderBy] < b[this.state.orderBy] ){
      return 1 * this.state.sortOrder;
    }
    if ( a[this.state.orderBy] > b[this.state.orderBy] ){
      return -1 *  this.state.sortOrder;
    }
    return 0;
  }

  async filter(query) {
    
    const array = [...this.state.originalContacts];
    const filtered = query ? array.filter((contato) => contato.name.toUpperCase().includes(query.toUpperCase()) ||
                              contato.name.toUpperCase().includes(query.toUpperCase()) ||
                              contato.phone.toUpperCase().includes(query.toUpperCase()) ||
                              contato.country.toUpperCase().includes(query.toUpperCase()) ||
                              contato.company.toUpperCase().includes(query.toUpperCase()) ||
                              contato.department.toUpperCase().includes(query.toUpperCase()) 
                           ) : array;
    await this.setState({ loading: false, contacts: filtered, sortOrder: -this.state.sortOrder});
    this.sortByField(this.state.orderBy);

  }

  handleSubmit(event) {
    this.filter(event.target.value)
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Topbar/>
        <Filters sortField={this.state.orderBy} sortOrder={this.state.sortOrder} onSort={(value) => this.sortByField(value)} handleSubmit={(ev) => this.handleSubmit(ev)} />
        {this.state.loading ? <Loading/> : <Contacts contatos={this.state.contacts} />}
      </React.Fragment>
    );
  }
}

export default App;
