import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoudary from "../components/ErrorBoundary";
import "./App.css";

// State >> props
// state is an object
// smart components have state and a class
// hooks are a way to avoid classes
// hooks allow us to use functional components

function App() {
  // two separate states
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
    console.log(count);
  }, [count]); // only run if count changes

  const onSearchChange = (event) => {
    setSearchfield(event.target.value); // search field gets updated
  };
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1>RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoudary>
          <CardList robots={filteredRobots} />
        </ErrorBoudary>
      </Scroll>
    </div>
  );
}

export default App;
