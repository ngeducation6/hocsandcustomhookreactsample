import React, { Component } from "react";
import useCounter from "./CounterHook";

class HoverCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleHover = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p onMouseOver={this.handleHover}>Hovered {this.state.count} times</p>
      </div>
    );
  }
}

function HoverCounterCustomHook() {
  const {count, handleIncrement :handleHover } = useCounter(1);
  return (
    <div>
      <p onMouseOver={handleHover}>Hovered {count} times</p>
    </div>
  );
}

export { HoverCounter, HoverCounterCustomHook };
