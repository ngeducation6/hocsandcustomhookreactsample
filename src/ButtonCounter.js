import React, { Component } from "react";
import useCounter from "./CounterHook";

class ButtonCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

// Buttton counter as functional component using custom hook

function ButtonCounterCustomHook() {
  const {count, handleIncrement} = useCounter(1);
  return (
    <div>
      <button onClick={handleIncrement}>Clicked {count} times</button>
    </div>
  );
}

export { ButtonCounter, ButtonCounterCustomHook };
