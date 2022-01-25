import React from "react";
// CSS
import "./App.css";

function decrementCounter(previousState) {
  return {
      count: previousState.count - 1
  };
};

function incrementCounter(previousState) {
  return {
      count: previousState.count + 1
  };
};

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div className="main">

        <h1>Counter</h1>

        <div className="container">

          <button className="btn red" onClick={() => {
							this.setState(decrementCounter);
						}}>-</button>

          <h2>{this.state.count}</h2>
          
          <button className="btn green" onClick={() => {
							this.setState(incrementCounter);
						}}>+</button>

        </div>
        
      </div>
    )
  }
}

export default App;
