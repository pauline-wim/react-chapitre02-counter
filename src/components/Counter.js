import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
    
        this.state = {
          count: 0,
        };
    };

    render() {
        const counterLimit = this.state.count;
        return (
            <div className="container">
    
                {counterLimit === 0 ? (
                    <button className="btn red" onClick={console.log("The counter doesn't go below 0.")}>-</button>
                    ) : (
                    <button className="btn red" onClick={() => {
                        this.setState((substract) => ({ 
                        count: substract.count - 1
                        }));
                    }}>-</button>
                    )
                }
                <h2>{this.state.count}</h2>
                
                <button className="btn green" onClick={() => {
                    this.setState((increment) => ({ 
                    count: increment.count + 1 
                    }));
                }}>+</button>
            
            </div>
        );
    };
};
  
export default Counter;