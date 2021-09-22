import React, { Component } from "react";
import CardList from "./components/CardList";
import { robots } from "./robots";
import SearchBox from "./components/SearchBox";

// State >> props
// state is an object

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
