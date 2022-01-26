import React from "react";
// Components
import Counter from "./components/Counter";
// CSS
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  };

  render() {

    return (
      <div className="main">

        <h1>Counter</h1>

        {/* {Counter.counter1 <= Counter.counter2 ? (
          <h2>{this.state.count}</h2> 
          ) : (
          <h2>{this.state.count}</h2>
          )
        }; */}
        <Counter className="counter1" count={this.state.count} substract={() => {
          this.setState((prevState) => ({ 
          count: prevState.count - 1,
          }));
        }} increment={() => {
          this.setState((prevState) => ({ 
          count: prevState.count + 1, 
          }));
        }} />
        {/* <Counter className="counter2" /> */}

      </div>
    );
  };
};

export default App;