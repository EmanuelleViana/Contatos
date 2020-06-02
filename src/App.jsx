import React from "react";

import "./App.scss";

import { API_URL, ASC, DESC } from "../src/constants";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

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
    this.setState({ loading: false, contacts: response });
  }

  sortByField(fieldName) {
    console.log(fieldName);
    this.setState({sortOrder: -this.state.sortOrder, orderBy: fieldName});
    const array = [...this.state.contacts];
    array.sort((a, b) => this.compare(a, b));
    console.log(array)
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

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters sortField={this.state.orderBy} sortOrder={this.state.sortOrder} onSort={(value) => this.sortByField(value)} />
        <Contacts contatos={this.state.contacts} />
      </React.Fragment>
    );
  }
}

export default App;
