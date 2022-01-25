import React from "react";
// Components
import Counter from "./components/Counter";
// CSS
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="main">

        <h1>Counter</h1>

        <Counter />

      </div>
    );
  };
};

export default App;